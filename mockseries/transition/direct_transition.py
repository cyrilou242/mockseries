from datetime import timedelta

from mockseries.transition.lambda_transition import LambdaTransition


class DirectTransition(LambdaTransition):
    """Direct transition.

    The transition from the base value to the switch value is instant.
    """

    def __init__(self) -> None:
        super(DirectTransition, self).__init__(
            transition_window=timedelta(microseconds=0),
            transition_function=lambda x: 0 if x == 0 else 1,
        )
