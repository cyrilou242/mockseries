from datetime import timedelta

import numpy as np

from mockseries.trend.base_trend import BaseTrend
from mockseries.utils.dates import delta_from_start


class ExponentialTrend(BaseTrend):
    """y=start_value*(a**t)."""

    def __init__(self, factor: float, time_unit: timedelta) -> None:
        self.factor = factor
        self.time_unit = time_unit

    def sample_at(self, time_points: np.ndarray, start_level: float) -> np.ndarray:
        """Sample the trend components."""
        return start_level * self.factor ** (
            delta_from_start(time_points) / self.time_unit
        )
