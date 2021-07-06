from datetime import datetime, timedelta
from numbers import Number
from typing import Callable, Iterable, Mapping

import numpy as np
from scipy.interpolate import PchipInterpolator

from mockseries.seasonality.seasonality import Seasonality


class DailySeasonality(Seasonality):
    """Realistic daily seasonality from a set of time/value constraints.

    Maximum precision for interpolation is seconds.
    Maximum granularity for generation is microseconds.
    The interpolation method is [PCHIP](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html#scipy-interpolate-pchipinterpolator).

    Args:
    time_value_constraints: A dict of `{time: value}` constraints. The curve will pass through these points.
    Pass time as a timedelta between `0:00:00` and `23:59:59.999999`. For instance, `{timedelta(hours=3): 4.2}`
    utc_offset: The offset from UTC of the time. For instance, if you give constraints with GMT+2 times in mind, pass `timedelta(hours=2)`.
    Default behavior considers times are passed as UTC.

    Examples:
        ```python
        from datetime import timedelta, datetime
        from mockseries.seasonality import DailySeasonality
        from mockseries.utils import plot_timeseries
        timeseries = DailySeasonality({timedelta(hours=0): 1.,timedelta(hours=12): 2,timedelta(hours=18): 3})
        ts_index = [datetime(2021, 10, d, h) for d in range(1,4) for h in range(0,24,1)]
        ts_values = timeseries.generate(ts_index)
        plot_timeseries(ts_index, ts_values)
        ```
    """

    DAY_SECONDS = 86400
    SECONDS_OF_DAY_FROM_DATETIME: Callable[[datetime], float] = (
        lambda dt: dt.hour * 3600 + dt.second + dt.microsecond * 1e-06
    )
    VECTORIZED_SECONDS_OF_DAY_FROM_DATETIME = np.vectorize(SECONDS_OF_DAY_FROM_DATETIME)
    # ensure the seasonality loop is smooth - the bigger the better
    INTERPOLATION_MARGIN = 100

    def __init__(
        self,
        time_value_constraints: Mapping[timedelta, Number],
        utc_offset: timedelta = timedelta(0),
    ) -> None:
        super().__init__()
        self._validate_keys(time_value_constraints.keys())
        self._validate_values(time_value_constraints.values())
        self._validate_utc_offset(utc_offset)
        self.utc_offset = utc_offset
        self.time_value_constraints = time_value_constraints
        self.interpolation = self._get_interpolation()

    def _validate_keys(self, time_constraints: Iterable[timedelta]) -> None:
        invalid_keys = [
            e
            for e in time_constraints
            if (
                not isinstance(e, timedelta)
                or not (timedelta(hours=0) <= e < timedelta(hours=24))
            )
        ]
        if invalid_keys:
            raise ValueError(
                "Invalid keys in time_value_constraints: {}. Timedeltas must be strictly smaller than 24 hours.".format(
                    invalid_keys
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

    def _get_interpolation(self) -> Callable[[np.ndarray], np.ndarray]:
        time_values = sorted(
            self._get_utc_constraints().items(), key=lambda x: x[0].seconds
        )
        times_seconds = (
            [
                t.seconds - self.DAY_SECONDS
                for t, _ in time_values[-self.INTERPOLATION_MARGIN :]
            ]
            + [t.seconds for t, _ in time_values]
            + [
                t.seconds + self.DAY_SECONDS
                for t, _ in time_values[: self.INTERPOLATION_MARGIN]
            ]
        )
        values = (
            [v for _, v in time_values[-self.INTERPOLATION_MARGIN :]]
            + [v for _, v in time_values]
            + [v for _, v in time_values[: self.INTERPOLATION_MARGIN]]
        )
        # return InterpolatedUnivariateSpline(times_seconds, values, k=3, ext=2)
        return PchipInterpolator(times_seconds, values)

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a daily seasonality signal."""
        return self.interpolation(
            self.VECTORIZED_SECONDS_OF_DAY_FROM_DATETIME(time_points)
        )
