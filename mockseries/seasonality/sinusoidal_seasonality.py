from datetime import timedelta
from typing import Union

import numpy as np

from mockseries.seasonality.seasonality import Seasonality
from mockseries.utils.dates import delta_from_start


class SinusoidalSeasonality(Seasonality):
    """Sinusoidal seasonality."""

    def __init__(
        self,
        amplitude: float,
        period: timedelta,
        offset: timedelta = timedelta(microseconds=0),
    ):
        super().__init__()
        self.amplitude = amplitude
        self.period = period
        self.offset = offset

    def __neg__(self) -> "SinusoidalSeasonality":
        return SinusoidalSeasonality(-self.amplitude, self.period, self.offset)

    def __rmul__(self, other: Union[float, int]) -> "SinusoidalSeasonality":
        """Multiply the amplitude."""
        if isinstance(other, int) or isinstance(other, float):
            return SinusoidalSeasonality(
                self.amplitude * other, self.period, self.offset
            )
        raise ValueError("Incompatible type for multiplication.")

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a sinusoidal signal."""
        return self.amplitude * np.sin(
            2.0
            * np.pi
            * ((delta_from_start(time_points) + self.offset) / self.period).astype(
                np.float_
            )
        )
