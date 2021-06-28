import numpy as np

from mockseries.trend.trend import Trend


class FlatTrend(Trend):
    """y=start_value."""

    def __init__(self, value: float) -> None:
        self.value = value

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Sample the trend components."""
        return np.full(len(time_points), self.value)
