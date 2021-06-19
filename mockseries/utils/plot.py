from datetime import datetime
from typing import Collection, List, Union

import numpy as np


def plot_timeseries(
    time_points: Collection[datetime], timeseries: Union[np.ndarray, List[np.ndarray]]
) -> None:
    if isinstance(timeseries, list):
        vertical_ts = np.transpose(np.array(timeseries))
    else:
        vertical_ts = np.transpose
