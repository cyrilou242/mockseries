from datetime import datetime, timedelta
from typing import Callable, Optional

import numpy as np

from mockseries.transition.transition import Transition


class LambdaTransition(Transition):
    """Transition from any transition function.

    The transition from the base value to the switch value takes a given time: a transition window.
    On this given time, the change follows a given transition function.
    A transition function is defined on 0-1 and represent the change behaviour
    (eg linear, exponential, etc...).

    If not provided, the stop window is considered 0, and the change is direct.
    If a stop window is provided without stop function,
    the stop function is defaulted to the symmetric of the transition function.

    Args:
        transition_window: Time taken to transition.
        transition_function: Transition function defined on 0-1, with `t(0)=0` and `t(1)=1`.
        stop_window: Time taken to stop, ie transition to original value.
        stop_function: Stop transition function defined on 0-1, with `s(0)=0` and `s(1)=1`.

    Examples:
    ```python
    from datetime import datetime, timedelta
    from mockseries.transition import LambdaTransition

    square = lambda x: x * x
    linear = lambda x: x

    transition = LambdaTransition(
        transition_window=timedelta(hours=12),
        transition_function=square,
        stop_window=timedelta(hours=24),
        stop_function=linear,
        )
    ```
    """

    def __init__(
        self,
        transition_window: timedelta,
        transition_function: Callable,
        stop_window: Optional[timedelta] = None,
        stop_function: Optional[Callable] = None,
    ):
        self._check_transitions_functions(transition_function, stop_function)
        self.transition_window = transition_window
        self.stop_window = stop_window if stop_window else transition_window

        stop_function = (
            stop_function if stop_function else lambda x: 1 - transition_function(1 - x)
        )
        self.transition_function = self._get_vectorized_transition(
            transition_function, stop_function
        )

    def _check_transitions_functions(
        self, transition_function: Callable, stop_function: Optional[Callable]
    ) -> None:
        transition_start_valid = transition_function(0) == 0
        transition_end_valid = transition_function(1) == 1
        if not (transition_start_valid and transition_end_valid):
            raise ValueError(
                "Transition function is not valid. Value in 0 must be 0. Value in 1 must be 1."
            )
        stop_start_valid = stop_function is None or stop_function(0) == 0
        stop_end_valid = stop_function is None or stop_function(1) == 1
        if not (stop_start_valid and stop_end_valid):
            raise ValueError(
                "Stop function is not valid. Value in 0 must be 0. Value in 1 must be 0."
            )

    def _get_vectorized_transition(
        self, transition_function: Callable, stop_function: Callable
    ) -> Callable:
        def _transition_function(
            time_point: datetime, start_time: datetime, stop_time: datetime
        ) -> float:
            # avoid overflow
            if start_time > (datetime.max - self.transition_window):
                start_time_plus_transition_window = datetime.max
            else:
                start_time_plus_transition_window = start_time + self.transition_window

            if stop_time > (datetime.max - self.stop_window):
                stop_time_plus_stop_window = datetime.max
            else:
                stop_time_plus_stop_window = stop_time + self.stop_window

            if time_point >= stop_time_plus_stop_window:
                return 0
            elif time_point >= stop_time:
                return 1 - stop_function((time_point - stop_time) / self.stop_window)
            elif time_point >= start_time_plus_transition_window:
                return 1
            elif time_point >= start_time:
                return transition_function(
                    (time_point - start_time) / self.transition_window
                )
            else:
                return 0

        return np.vectorize(_transition_function, otypes=[float])

    def get_mask(
        self, time_points: np.ndarray, start_time: datetime, stop_time: datetime
    ) -> np.ndarray:
        """Returns the transition mask."""
        switch_values = self.transition_function(time_points, start_time, stop_time)

        return switch_values
