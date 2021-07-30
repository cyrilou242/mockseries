from datetime import datetime, timedelta
from numbers import Number
from typing import Callable, Iterable, Mapping

import numpy as np
from scipy.interpolate import PchipInterpolator

from mockseries.seasonality.seasonality import Seasonality


class PeriodSeasonality(Seasonality):
    """Base class for constraints based realistic period seasonalities.

    See [DailySeasonality](./daily_seasonality), [WeeklySeasonality](./weekly_seasonality), [YearlySeasonality](./yearly_seasonality).
    Finest granularity for constraints and generation is microseconds.
    The interpolation method is [PCHIP](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html#scipy-interpolate-pchipinterpolator).

    Args:
    time_value_constraints: A dict of `{time: value}` constraints. The curve will pass through these points.
    Pass time as a timedelta in the period frame. For instance, for daily seasonality, the timedelta must be between `0:00:00` and `23:59:59`.
    utc_offset: The offset from UTC of the time. For instance, if you give constraints with GMT-8 times in mind, pass `timedelta(hours=-8)`.
    Default behavior considers times are passed as UTC.
    normalize: transform constraints to a multiplication factor for easy use in multiplicative interactions. Eg: [5, 10, 15] --> [0.5, 1, 1.5].
    """

    MICROSECOND_SECONDS = 1e-06
    DAY_SECONDS = 86400
    # ensure the seasonality loop is smooth - the bigger the better
    INTERPOLATION_MARGIN = 100
    NORMALIZATION_POINTS = 1000

    def __init__(
        self,
        time_value_constraints: Mapping[timedelta, Number],
        utc_offset: timedelta = timedelta(0),
        normalize: bool = False,
    ) -> None:
        super().__init__()
        self._validate_keys(time_value_constraints.keys())
        self._validate_values(time_value_constraints.values())
        self._validate_utc_offset(utc_offset)
        self.utc_offset = utc_offset
        self.time_value_constraints = time_value_constraints
        self.interpolation = self._get_interpolation()
        self.vectorized_seconds_of_period_from_datetime = np.vectorize(
            self._seconds_of_period_from_datetime
        )
        self._init_normalizer(normalize)

    # fixme put default parameters in subclass only

    def _validate_keys(self, time_constraints: Iterable[timedelta]) -> None:
        invalid_keys = [
            e
            for e in time_constraints
            if (
                not isinstance(e, timedelta)
                or not (
                    timedelta(hours=0)
                    <= e
                    < timedelta(seconds=self._seconds_in_period())
                )
            )
        ]
        if invalid_keys:
            raise ValueError(
                "Invalid keys in time_value_constraints: {}. Timedeltas must be bigger than 0 strictly smaller than {}.".format(
                    invalid_keys, timedelta(seconds=self._seconds_in_period())
                )
            )

    def _validate_values(self, value_constraints: Iterable[Number]) -> None:
        invalid_values = [e for e in value_constraints if not isinstance(e, Number)]
        if invalid_values:
            raise ValueError(
                "Invalid values in time_value_constraints: {}. Values must be numeric.".format(
                    invalid_values
                )
            )

    def _validate_utc_offset(self, utc_offset: timedelta) -> None:
        if not isinstance(utc_offset, timedelta):
            raise ValueError("utc_offset must be a timedelta")
        if not (timedelta(hours=-14) <= utc_offset <= timedelta(hours=14)):
            raise ValueError("utc_offset should be between -14 and + 14 hours")

    def _get_utc_constraints(self) -> Mapping[timedelta, Number]:
        return {k - self.utc_offset: v for k, v in self.time_value_constraints.items()}

    def _seconds_of_period_from_timedelta(self, td: timedelta) -> float:
        """Returns a timedelta as a number of seconds in the period."""
        return (
            td.days * self.DAY_SECONDS
            + td.seconds
            + td.microseconds * self.MICROSECOND_SECONDS
        ) % self._seconds_in_period()

    def _seconds_of_period_from_datetime(self, dt: datetime) -> float:
        """Returns the number of seconds since the start of the period for a datetime."""
        raise NotImplementedError

    def _seconds_in_period(self) -> int:
        """Return the number of seconds in the period."""
        raise NotImplementedError

    def _get_interpolation(self) -> Callable[[np.ndarray], np.ndarray]:
        time_values = sorted(
            self._get_utc_constraints().items(),
            key=lambda x: self._seconds_of_period_from_timedelta(x[0]),
        )
        times_seconds = (
            [
                self._seconds_of_period_from_timedelta(t) - self._seconds_in_period()
                for t, _ in time_values[-self.INTERPOLATION_MARGIN :]
            ]
            + [self._seconds_of_period_from_timedelta(t) for t, _ in time_values]
            + [
                self._seconds_of_period_from_timedelta(t) + self._seconds_in_period()
                for t, _ in time_values[: self.INTERPOLATION_MARGIN]
            ]
        )
        values = (
            [v for _, v in time_values[-self.INTERPOLATION_MARGIN :]]
            + [v for _, v in time_values]
            + [v for _, v in time_values[: self.INTERPOLATION_MARGIN]]
        )
        return PchipInterpolator(times_seconds, values)

    def _init_normalizer(self, normalize: bool) -> None:
        # quick dirty implem - must happen after other init
        self.normalizer = np.vectorize(lambda x: x)
        if normalize:
            # init to make use of _sample_at
            time_points = np.array(
                [
                    datetime(2020, 1, 1)
                    + i
                    * timedelta(
                        seconds=self._seconds_in_period() / self.NORMALIZATION_POINTS
                    )
                    for i in range(self.NORMALIZATION_POINTS)
                ]
            )
            values = self._sample_at(time_points)
            self.normalizer = np.vectorize(
                lambda x: 1 + (x - values.mean()) / values.mean()
            )

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a daily seasonality signal."""
        return self.normalizer(
            self.interpolation(
                self.vectorized_seconds_of_period_from_datetime(time_points)
            )
        )
