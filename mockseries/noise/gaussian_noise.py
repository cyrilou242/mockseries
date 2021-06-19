from typing import Optional

import numpy as np

from mockseries.interaction.interaction import Interaction
from mockseries.noise.noise import Noise


# todo add minimum and maximum
class GaussianNoise(Noise):
    """Gaussian noise generator.

    This class adds uncorrelated, additive white noise to your signal.

    Args:
        mean: mean of the noise
    std : float
        standard deviation of the noise

    Notes:
        https://rts-gen.readthedocs.io/en/latest/generators.html#gaussian-noise-generator
    """

    def __init__(
        self,
        mean: float,
        std: float,
        interaction: Interaction,
        random_seed: Optional[int],
    ) -> None:
        super().__init__(interaction, random_seed)
        self.mean = mean
        self.std = std

    def _sample(self, trend_components: np.ndarray) -> np.ndarray:
        return np.random.normal(
            loc=self.mean, scale=self.std, size=len(trend_components)
        )
