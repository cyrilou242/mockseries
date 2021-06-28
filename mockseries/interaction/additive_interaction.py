import numpy as np

from mockseries.interaction.interaction import Interaction


class AdditiveInteraction(Interaction):
    """Implementation of the additive relation for timeseries."""

    BASE_VALUE = 0.0

    def interact(self, *component: np.ndarray) -> np.ndarray:
        """Compute the additive interaction of multiple components."""
        return np.add.reduce(component, initial=self.BASE_VALUE)
