from typing import Union

import numpy as np

from mockseries.trend.trend import Trend


class FlatTrend(Trend):
    """y=start_value."""

    def __init__(self, value: float) -> None:
        self.value = value

    def __neg__(self) -> "FlatTrend":
        """Get the opposite of a trend."""
        return FlatTrend(-self.value)

    def __rmul__(self, other: Union[float, int]) -> "FlatTrend":
        """Multiply the value by the scalar."""
        if isinstance(other, int) or isinstance(other, float):
            return FlatTrend(self.value * other)
        raise ValueError("Incompatible type for multiplication.")

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Sample the trend components."""
        return np.full(len(time_points), self.value)
