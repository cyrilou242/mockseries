import numpy as np

from mockseries.interaction.interaction import Interaction


class Seasonality:
    """Seasonality interface."""

    def __init__(self, interaction: Interaction):
        self.interaction = interaction

    def sample_at(
        self, time_points: np.ndarray, trend_components: np.ndarray
    ) -> np.ndarray:
        """Samples the seasonality components of the timeseries."""
        samples = self._sample(time_points, trend_components)
        return self.interaction.generate_component(samples, trend_components)

    def _sample(
        self, time_points: np.ndarray, trend_components: np.ndarray
    ) -> np.ndarray:
        raise NotImplementedError
