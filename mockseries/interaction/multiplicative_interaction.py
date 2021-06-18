import numpy as np

from mockseries.interaction.interaction import Interaction


class MultiplicativeInteraction(Interaction):
    """Implementation of the multiplication relation for timeseries."""

    def generate_component(
        self, samples: np.ndarray, trend_components: np.ndarray
    ) -> np.ndarray:
        """Compute components for a multiplicative relationship."""
        return trend_components * samples
