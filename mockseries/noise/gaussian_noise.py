from typing import Optional

import numpy as np

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
        https://math.stackexchange.com/questions/1923924/normal-variables-adding-and-multiplying-by-constant/1923932
        Let 𝑋∼(𝑎,𝑏). Let 𝑐>0. Then, 𝑋+𝑐∼(𝑎+𝑐,𝑏) and 𝑐𝑋∼(𝑐𝑎,𝑐2𝑏).
    """

    def __init__(
        self,
        mean: float = 0.0,
        std: float = 1.0,
        random_seed: Optional[int] = None,
    ) -> None:
        super().__init__(random_seed)
        self.mean = mean
        self.std = std

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a gaussian noise."""
        if self.random_seed:
            np.random.seed(self.random_seed)
        return np.random.normal(loc=self.mean, scale=self.std, size=len(time_points))
