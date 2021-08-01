from datetime import timedelta

import numpy as np

from mockseries.signal.signal import Signal
from mockseries.utils.dates import delta_from_start


class LinearTrend(Signal):
    """y=ax+b."""

    def __init__(
        self, coefficient: float, time_unit: timedelta, flat_base: float = 0
    ) -> None:
        self.coefficient = coefficient
        self.time_unit = time_unit
        self.flat_base = flat_base

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Sample the trend components."""
        return self.flat_base + (
            self.coefficient * (delta_from_start(time_points) / self.time_unit)
        )
