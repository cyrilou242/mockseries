from datetime import datetime, timedelta
from numbers import Number
from typing import Mapping

from mockseries.seasonality.period_seasonality import PeriodSeasonality


class WeeklySeasonality(PeriodSeasonality):
    """Realistic weekly seasonality from a set of time/value constraints.

    Maximum precision for interpolation is seconds.
    Maximum granularity for generation is microseconds.
    The interpolation method is [PCHIP](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html#scipy-interpolate-pchipinterpolator).

    Args:
    time_value_constraints: A dict of `{time: value}` constraints. The curve will pass through these points.
    Pass time as a timedelta between `0 days 00:00:00 and `6 days 23:59:59`. For instance, `{timedelta(days=3): 4.2}`
    Day 0 corresponds to Monday, day 6 corresponds to Sunday.
    utc_offset: The offset from UTC of the time. For instance, if you give constraints with GMT+2 times in mind, pass `timedelta(hours=2)`.
    Default behavior considers times are passed as UTC.

    Examples:
    ```python
    from datetime import timedelta, datetime
    from mockseries.seasonality import WeeklySeasonality
    from mockseries.utils import plot_timeseries

    timeseries = WeeklySeasonality({timedelta(days=0): 1., timedelta(days=2): 1.8, timedelta(days=4): 1.1, timedelta(days=5): 2.5, timedelta(days=6): 0.6})
    ts_index = [datetime(2021, 10, d, h) for d in range(1, 23) for h in range(1, 24)]
    ts_values = timeseries.generate(ts_index)
    plot_timeseries(ts_index, ts_values, graph_title="Weekly seasonality")
    ```
    """

    MICROSECOND_SECONDS = 1e-06
    HOUR_SECONDS = 3600
    DAY_SECONDS = 86400
    WEEK_SECONDS = 604_800

    def __init__(
        self,
        time_value_constraints: Mapping[timedelta, Number],
        utc_offset: timedelta = timedelta(0),
    ) -> None:
        super().__init__(time_value_constraints, utc_offset)

    def _seconds_of_period_from_datetime(self, dt: datetime) -> float:
        """Returns the number of seconds since the start of the week for a datetime."""
        return (
            dt.weekday() * self.DAY_SECONDS
            + dt.hour * self.HOUR_SECONDS
            + dt.second
            + dt.microsecond * self.MICROSECOND_SECONDS
        )

    def _seconds_in_period(self) -> int:
        """Return the number of seconds in a week."""
        return self.WEEK_SECONDS
