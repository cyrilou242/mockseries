from datetime import datetime
from typing import Collection, List, Union

import numpy as np


def to_csv(
        time_points: Collection[datetime],
        timeseries: Union[np.ndarray, List[np.ndarray]],
        filepath: str,
        sep=";",
        datetime_format="%s",
        float_format="%s",
):
    if isinstance(timeseries, list):
        vertical_ts = np.transpose([np.array(time_points)] + [e.astype(np.object) for e in timeseries])
        num_timeseries = len(timeseries)
    else:
        vertical_ts = np.transpose([time_points, timeseries])
        num_timeseries = 1

    np.savetxt(
        filepath,
        vertical_ts,
        fmt=[datetime_format] + [float_format] * num_timeseries,
        delimiter=sep,
    )
