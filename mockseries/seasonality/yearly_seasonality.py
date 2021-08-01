import calendar
from datetime import datetime, timedelta
from numbers import Number
from typing import Mapping

from mockseries.seasonality.period_seasonality import PeriodSeasonality


class YearlySeasonality(PeriodSeasonality):
    """Realistic yearly seasonality from a set of time/value constraints.

    Finest granularity for constraints and generation is microseconds.
    The interpolation method is [PCHIP](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html#scipy-interpolate-pchipinterpolator).

    Args:
    time_value_constraints: A dict of `{time: value}` constraints. The curve will pass through these points.
    Pass time as a timedelta between `0 days 00:00:00 and `364 days 23:59:59`. For instance, `{timedelta(days=55): 4.2}`
    If generation is performed on a leap year, February 29 is approximated as the mean between February 28 and March 1.
    Ie timdedelta(days=59) always corresponds to March 1 for fitting.
    utc_offset: The offset from UTC of the time. For instance, if you give constraints with GMT-8 times in mind, pass `timedelta(hours=-8)`.
    Default behavior considers times are passed as UTC.
    normalize: transform constraints to a multiplication factor for easy use in multiplicative interactions. Eg: [5, 10, 15] --> [0.5, 1, 1.5].

    Examples:
    ```python
    from datetime import timedelta, datetime
    from mockseries.seasonality import YearlySeasonality

    timeseries = YearlySeasonality({timedelta(days=15): 0.7, timedelta(days=45): 0.8, timedelta(days=75): 0.9, timedelta(days=105): 1.1, timedelta(days=200): 1.4, timedelta(days=340): 2})
    timeseries.preview_year(num_years=4)
    ```
    """

    # normal year
    YEAR_SECONDS = 31_536_000
    FEBRUARY_MONTH = 2

    def __init__(
        self,
        time_value_constraints: Mapping[timedelta, Number],
        utc_offset: timedelta = timedelta(0),
        normalize: bool = False,
    ) -> None:
        super().__init__(time_value_constraints, utc_offset, normalize)

    def _seconds_of_period_from_datetime(self, dt: datetime) -> float:
        """Returns the number of seconds since the start of the year for a datetime.

        Manages leap year by compressing February 28 and 29 in a single day.
        """
        corrected_dt = dt
        if calendar.isleap(dt.year):
            # compress 2 days in 1 - maybe compress on n days
            if dt.month == 2 and (dt.day == 28 or dt.day == 29):
                corrected_dt = (
                    datetime(corrected_dt.year, 2, 28)
                    + (corrected_dt - datetime(corrected_dt.year, 2, 28)) / 2
                )
            elif dt.month >= 3:
                corrected_dt = corrected_dt - timedelta(days=1)

        return self._seconds_of_period_from_timedelta(
            corrected_dt - datetime(dt.year, 1, 1)
        )

    def _seconds_in_period(self) -> int:
        """Return the number of seconds in a year."""
        return self.YEAR_SECONDS
