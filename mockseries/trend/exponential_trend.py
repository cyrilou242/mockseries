from datetime import timedelta

import numpy as np

from mockseries.trend.trend import Trend
from mockseries.utils.dates import delta_from_start


class ExponentialTrend(Trend):
    """y=base_value+(a**t)."""

    def __init__(self, factor: float, time_unit: timedelta, base: float = 1) -> None:
        self.factor = factor
        self.time_unit = time_unit
        self.base = base

    def __neg__(self) -> "ExponentialTrend":
        """Get the opposite of a trend."""
        return ExponentialTrend(self.factor, self.time_unit, -self.base)

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Sample the trend components."""
        return self.base * self.factor ** (
            delta_from_start(time_points) / self.time_unit
        )
