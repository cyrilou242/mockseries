from datetime import datetime
from typing import List, Union

import numpy as np

from mockseries.interaction.additive_interaction import AdditiveInteraction
from mockseries.interaction.multiplicative_interaction import MultiplicativeInteraction


class Signal:
    """Interface representing any type of signal."""

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Samples a signal from  an array of datetime."""
        raise NotImplementedError

    def generate(self, time_points: Union[List[datetime], np.ndarray]) -> np.ndarray:
        """Generate a signal from a list of times."""
        if isinstance(time_points, np.ndarray):
            return self._sample_at(time_points)
        elif isinstance(time_points, list):
            return self._sample_at(np.array(time_points))

        raise ValueError(
            "Invalid type for time_points: {}. Please pass a list or an array of datetime.".format(
                type(time_points)
            )
        )

    def __add__(self, other: Union["Signal", int, float]) -> "Signal":
        """Add two signals."""
        if isinstance(other, int) or isinstance(other, float):
            return self.__radd__(other)
        return ComposedSignal(AdditiveInteraction(), self, other)

    def __mul__(self, other: Union["Signal", int, float]) -> "Signal":
        """Multiply two signals."""
        if isinstance(other, int) or isinstance(other, float):
            return self.__rmul__(other)
        return ComposedSignal(MultiplicativeInteraction(), self, other)

    def __sub__(self, other: Union["Signal", int, float]) -> "Signal":
        """Multiply two signals."""
        if isinstance(other, int) or isinstance(other, float):
            return self.__radd__(-other)
        return ComposedSignal(AdditiveInteraction(), self, -other)

    def __neg__(self) -> "Signal":
        """Get the opposite of a signal."""
        raise NotImplementedError

    def __rmul__(self, other: Union[float, int]) -> "Signal":
        """Multiplies by a constant."""
        if isinstance(other, int) or isinstance(other, float):
            return ComposedSignal(MultiplicativeInteraction(), self, FlatTrend(other))
        raise ValueError("Incompatible type for addition.")

    def __radd__(self, other: Union[float, int]) -> "Signal":
        """Adds a flat component."""
        if isinstance(other, int) or isinstance(other, float):
            return ComposedSignal(AdditiveInteraction(), self, FlatTrend(other))
        raise ValueError("Incompatible type for addition.")


from mockseries.signal.composed_signal import ComposedSignal  # noqa: E402
from mockseries.trend.flat_trend import FlatTrend  # noqa: E402
