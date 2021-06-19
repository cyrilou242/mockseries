from datetime import timedelta

import numpy as np

from mockseries.interaction.interaction import Interaction
from mockseries.seasonality.seasonality import Seasonality
from mockseries.utils.dates import delta_from_start


class SinusoidalSeasonality(Seasonality):
    """Sinusoidal seasonality."""

    def __init__(
        self,
        amplitude: float,
        period: timedelta,
        interaction: Interaction,
        offset: timedelta = timedelta(microseconds=0),
    ):
        super().__init__(interaction)
        self.amplitude = amplitude
        self.period = period
        self.offset = offset

    def _sample(
        self, time_points: np.ndarray, trend_components: np.ndarray
    ) -> np.ndarray:
        return self.amplitude * np.sin(
            2.0
            * np.pi
            * ((delta_from_start(time_points) + self.offset) / self.period).astype(
                np.float_
            )
        )
