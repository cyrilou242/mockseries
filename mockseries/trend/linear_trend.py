from datetime import timedelta

import numpy as np

from mockseries.trend.base_trend import BaseTrend
from mockseries.utils.dates import delta_from_start


class LinearTrend(BaseTrend):
    """y=start_value+at."""

    def __init__(self, coefficient: float, time_unit: timedelta) -> None:
        self.coefficient = coefficient
        self.time_unit = time_unit

    def sample_at(self, time_points: np.ndarray, start_level: float) -> np.ndarray:
        """Sample the trend components."""
        return (
            start_level
            + self.coefficient * delta_from_start(time_points) / self.time_unit
        )
