from datetime import datetime
from typing import Optional

import numpy as np

from mockseries.signal.signal import Signal
from mockseries.transition import DirectTransition
from mockseries.transition.transition import Transition


class Switch(Signal):
    """A flat signal for which the value changes at a given time.

    Used to create signals with events happening at a given time. For instance: anomalies.

    Args:
        start_time: Time at which the signal value changes.
        base_value: Original value. Defaults to 0.
        switch_value: New value at switch time. Defaults to 1.
        stop_time: Time at which the signal changes back to the original value. If not set, the signal never changes back.
        transition: The type of transition. See [Transition](../transition/transition) object. Defaults to a [DirectTransition](../transition/direct_transition).
    """

    def __init__(
        self,
        start_time: datetime,
        base_value: float = 0.0,
        switch_value: float = 1.0,
        stop_time: Optional[datetime] = None,
        transition: Optional[Transition] = None,
    ) -> None:
        self.start_time = start_time
        self.base_value = base_value
        self.switch_value = switch_value
        self.stop_time = stop_time if stop_time else datetime.max
        self.transition = transition if transition else DirectTransition()

    def _sample_at(self, time_points: np.ndarray) -> np.ndarray:
        """Sample the trend components."""

        mask = self.transition.get_mask(
            time_points=time_points,
            start_time=self.start_time,
            stop_time=self.stop_time,
        )

        switch_with_transition = self.switch_value * mask + self.base_value * (1 - mask)

        return switch_with_transition
