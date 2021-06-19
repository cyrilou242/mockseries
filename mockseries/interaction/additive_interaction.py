import numpy as np

from mockseries.interaction.interaction import Interaction


class AdditiveInteraction(Interaction):
    """Implementation of the additive relation for timeseries."""

    def generate_component(
        self, samples: np.ndarray, trend_components: np.ndarray
    ) -> np.ndarray:
        """Compute components for an additive relationship."""
        # additive does not depend on current trend values
        return samples
