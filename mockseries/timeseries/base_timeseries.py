from datetime import datetime
from typing import List

import numpy as np


class BaseTimeSeries(object):
    """TimeSeries interface."""

    def generate(self, times: List[datetime]) -> np.ndarray:
        """Generate the timeseries values."""
        raise NotImplementedError()
