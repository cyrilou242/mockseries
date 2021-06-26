import numpy as np


class Interaction(object):
    """Components interaction interface."""

    def interact(self, *component: np.ndarray) -> np.ndarray:
        """Implements the interaction. Eg: additive or multiplicative."""
        raise NotImplementedError
