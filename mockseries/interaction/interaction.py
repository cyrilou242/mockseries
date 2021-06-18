import numpy as np


class Interaction(object):
    """Components interaction interface."""

    def generate_component(
        self, samples: np.ndarray, trend_components: np.ndarray
    ) -> np.ndarray:
        """Implement as additive or multiplicative."""
        raise NotImplementedError
