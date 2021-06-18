import numpy as np


class BaseTrend(object):
    """Trend interface."""

    def sample_at(self, time_points: np.ndarray, start_level: float) -> np.ndarray:
        """Sample the trend components."""
        raise NotImplementedError
