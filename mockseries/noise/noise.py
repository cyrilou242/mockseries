from typing import Optional

import numpy as np

from mockseries.interaction.interaction import Interaction


class Noise:
    """Noise interface."""

    def __init__(self, interaction: Interaction, random_seed: Optional[int]):
        self.interaction = interaction
        self.random_seed = random_seed

    def sample(self, trend_components: np.ndarray) -> np.ndarray:
        """Sample the noise component."""
        if self.random_seed:
            np.random.seed(self.random_seed)
        samples = self._sample(trend_components)
        return self.interaction.generate_component(samples, trend_components)

    def _sample(self, trend_components: np.ndarray) -> np.ndarray:
        """Main logic too implement."""
        raise NotImplementedError
