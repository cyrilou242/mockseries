from datetime import timedelta
from typing import Optional

from mockseries.transition.lambda_transition import LambdaTransition


class LinearTransition(LambdaTransition):
    """Linear transition.

    The transition from the base value to the switch value is linear.
    If a stop window is provided, the transition from the switch value
    to the base value is also linear.
    """

    def __init__(
        self,
        transition_window: timedelta,
        stop_window: Optional[timedelta] = None,
    ):
        super().__init__(transition_window, lambda x: x, stop_window)
