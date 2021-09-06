from datetime import datetime, timedelta
from typing import List, Optional, Union

import numpy as np

from mockseries.interaction.additive_interaction import AdditiveInteraction
from mockseries.interaction.multiplicative_interaction import MultiplicativeInteraction
from mockseries.utils import datetime_range, plot_timeseries


class Signal:
    """Interface representing any type of signal."""

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a signal from  an array of datetime."""
        raise NotImplementedError

    def generate(self, time_points: Union[List[datetime], np.ndarray]) -> np.ndarray:
        """Generate a signal from a list of times."""
        if isinstance(time_points, np.ndarray):
            return self._sample_at(time_points)
        elif isinstance(time_points, list):
            return self._sample_at(np.array(time_points))

        raise ValueError(
            "Invalid type for time_points: {}. Please pass a list or an array of datetime.".format(
                type(time_points)
            )
        )

    def _preview(
        self,
        granularity: timedelta,
        period: timedelta,
        start_time: Optional[datetime] = None,
    ) -> None:
        start_time = start_time if start_time else datetime.now()
        ts_index = datetime_range(
            granularity=granularity,
            start_time=start_time,
            end_time=start_time + period,
        )
        plot_timeseries(
            ts_index,
            self.generate(ts_index),
            # todo add graph_title once self.name() has been implemented
        )

    def preview_year(
        self, num_years: int = 1, start_time: Optional[datetime] = None
    ) -> None:
        """Plot one year of signal with a day granularity.

        Args:
            num_years: Number of years to plot.
            start_time: Time from which to start. If None, defaults to current datetime.
        """

        self._preview(
            granularity=timedelta(days=1),
            period=num_years * timedelta(days=365.25),
            start_time=start_time,
        )

    def preview_month(
        self, num_months: int = 1, start_time: Optional[datetime] = None
    ) -> None:
        """Plot one month of signal with an hour granularity.

        Args:
            num_months: Number of months to plot.
            start_time: Time from which to start. If None, defaults to current datetime.
        """

        self._preview(
            granularity=timedelta(hours=1),
            period=num_months * timedelta(days=31),
            start_time=start_time,
        )

    def preview_week(
        self, num_weeks: int = 1, start_time: Optional[datetime] = None
    ) -> None:
        """Plot one week of signal with an hour granularity.

        Args:
            num_weeks: Number of weeks to plot.
            start_time: Time from which to start. If None, defaults to current datetime.
        """

        self._preview(
            granularity=timedelta(hours=1),
            period=num_weeks * timedelta(days=7),
            start_time=start_time,
        )

    def preview_day(
        self, num_days: int = 1, start_time: Optional[datetime] = None
    ) -> None:
        """Plot one day of signal with a minute granularity.

        Args:
            num_days: Number of days to plot.
            start_time: Time from which to start. If None, defaults to current datetime.
        """

        self._preview(
            granularity=timedelta(minutes=1),
            period=num_days * timedelta(days=1),
            start_time=start_time,
        )

    def preview_hour(
        self, num_hours: int = 1, start_time: Optional[datetime] = None
    ) -> None:
        """Plot one hour of signal with a second granularity.

        Args:
            num_hours: Number of hours to plot.
            start_time: Time from which to start. If None, defaults to current datetime.
        """

        self._preview(
            granularity=timedelta(seconds=1),
            period=num_hours * timedelta(hours=1),
            start_time=start_time,
        )

    def preview_minute(
        self, num_minutes: int = 1, start_time: Optional[datetime] = None
    ) -> None:
        """Plot one minute of signal with a centisecond granularity.

        Args:
            num_minutes: Number of hours to plot.
            start_time: Time from which to start. If None, defaults to current datetime.
        """

        self._preview(
            granularity=timedelta(milliseconds=10),
            period=num_minutes * timedelta(minutes=1),
            start_time=start_time,
        )

    def __add__(self, other: Union["Signal", int, float]) -> "Signal":
        """Add two signals."""
        if isinstance(other, int) or isinstance(other, float):
            return self.__radd__(other)
        return ComposedSignal(AdditiveInteraction(), self, other)

    def __mul__(self, other: Union["Signal", int, float]) -> "Signal":
        """Multiply two signals."""
        if isinstance(other, int) or isinstance(other, float):
            return self.__rmul__(other)
        return ComposedSignal(MultiplicativeInteraction(), self, other)

    def __sub__(self, other: Union["Signal", int, float]) -> "Signal":
        """Subtract one signal from another."""
        if isinstance(other, int) or isinstance(other, float):
            return self.__radd__(-other)
        return ComposedSignal(AdditiveInteraction(), self, -other)

    def __neg__(self) -> "Signal":
        """Get the opposite of a signal."""
        return ComposedSignal(MultiplicativeInteraction(), self, FlatTrend(-1))

    def __rmul__(self, other: Union[float, int]) -> "Signal":
        """Multiplies by a constant."""
        if isinstance(other, int) or isinstance(other, float):
            return ComposedSignal(MultiplicativeInteraction(), self, FlatTrend(other))
        raise ValueError("Incompatible type for addition.")

    def __radd__(self, other: Union[float, int]) -> "Signal":
        """Adds a flat component."""
        if isinstance(other, int) or isinstance(other, float):
            return ComposedSignal(AdditiveInteraction(), self, FlatTrend(other))
        raise ValueError("Incompatible type for addition.")


from mockseries.signal.composed_signal import ComposedSignal  # noqa: E402
from mockseries.trend.flat_trend import FlatTrend  # noqa: E402
