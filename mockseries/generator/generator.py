from datetime import datetime
from typing import List

import numpy as np


class Generator(object):
    """Generator interface."""

    def generate(self, times: List[datetime]) -> np.ndarray:
        """Generate the values."""
        raise NotImplementedError()
