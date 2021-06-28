from typing import Optional

import numpy as np

from mockseries.noise.noise import Noise


class RedNoise(Noise):
    """Gaussian noise generator.

    This class adds uncorrelated, additive white noise to your signal.

    Args:
        mean: mean of the noise
    std : float
        standard deviation of the noise

    Notes:
        https://atmos.washington.edu/~breth/classes/AM582/lect/lect8-notes.pdf
        https://rts-gen.readthedocs.io/en/latest/generators.html#gaussian-noise-generator
    """

    def __init__(
        self,
        mean: float = 0.0,
        std: float = 1.0,
        correlation: float = 0.5,
        random_seed: Optional[int] = None,
    ) -> None:
        super().__init__(random_seed)
        self.mean = mean
        self.std = std
        if not (0 < correlation < 1):
            raise ValueError("Correlation coefficient r has to be between 0 and 1.")
        self.correlation = correlation

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a red noise."""
        # todo optimize
        if self.random_seed:
            np.random.seed(self.random_seed)

        white_noise = np.random.normal(
            loc=self.mean, scale=self.std, size=len(time_points)
        )
        red_noise = np.zeros(len(time_points))
        red_noise[0] = white_noise[0]

        for i in range(1, len(red_noise)):
            red_noise[i] = (
                self.correlation * red_noise[i - 1]
                + np.sqrt((1 - self.correlation * self.correlation)) * white_noise[i]
            )

        return red_noise
