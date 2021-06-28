import numpy as np

from mockseries.interaction.interaction import Interaction


class MultiplicativeInteraction(Interaction):
    """Implementation of the multiplication relation for timeseries."""

    BASE_VALUE = 1.0

    def interact(self, *component: np.ndarray) -> np.ndarray:
        """Compute the multiplicative interaction of 2 components."""
        return np.multiply.reduce(component, initial=self.BASE_VALUE)
