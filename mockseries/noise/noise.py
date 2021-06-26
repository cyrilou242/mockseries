from typing import Optional

from mockseries.signal.signal import Signal


class Noise(Signal):
    """Noise interface."""

    def __init__(self, random_seed: Optional[int]):
        self.random_seed = random_seed
