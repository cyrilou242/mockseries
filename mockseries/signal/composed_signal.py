import numpy as np

from mockseries.interaction.interaction import Interaction
from mockseries.signal.signal import Signal


class ComposedSignal(Signal):
    """Combines multiple signals."""

    def __init__(self, interaction: Interaction, *signal: Signal) -> None:

        self.interaction = interaction
        self.signals = signal

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Sample by composing sub signals."""
        return self.interaction.interact(
            *(signal._sample_at(time_points) for signal in self.signals)
        )
