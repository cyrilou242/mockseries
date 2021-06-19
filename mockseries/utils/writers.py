from datetime import datetime
from typing import Collection, List, Union

import numpy as np


def write_csv(
    time_points: Collection[datetime],
    timeseries: Union[np.ndarray, List[np.ndarray]],
    filepath: str,
    sep: str = ";",
    datetime_format: str = "%s",
    float_format: str = "%s",
) -> None:
    """Writes timeseries to a csv file.

    Args:
        time_points: The timeseries index. A list of datetimes.
        timeseries: A timeseries or a list of timeseries.
        filepath: addres
        sep: Separator to use for the csv-like file.
        datetime_format: Numpy write format for the timeseries index.
        float_format: Numpy write format for the timeseries values.

    """
    if isinstance(timeseries, list):
        vertical_ts = np.transpose(
            [np.array(time_points)] + [e.astype(np.object) for e in timeseries]
        )
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
