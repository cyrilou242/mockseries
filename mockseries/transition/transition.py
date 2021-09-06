from datetime import datetime

import numpy as np


class Transition(object):
    """Base class for transition.

    Transitions are used to defined behaviors during switches.
    """

    def get_mask(
        self, time_points: np.ndarray, start_time: datetime, stop_time: datetime
    ) -> np.ndarray:
        """Returns the transition mask."""
        raise NotImplementedError
