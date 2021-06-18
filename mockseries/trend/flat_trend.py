import numpy as np

from mockseries.trend.base_trend import BaseTrend


class FlatTrend(BaseTrend):
    """y=start_value."""

    def __init__(self) -> None:
        pass

    def sample_at(self, time_points: np.ndarray, start_level: float) -> np.ndarray:
        """Sample the trend components."""
        return np.full(len(time_points), start_level)
