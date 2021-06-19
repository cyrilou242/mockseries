from datetime import datetime, timedelta
from typing import List, Optional

import numpy as np


def datetime_range(
    granularity: timedelta,  # np.timedelta64(1, 'D') or python timedelta
    start_time: datetime,
    end_time: Optional[datetime] = None,
    num_points: Optional[int] = None,
) -> List[datetime]:
    """Generates a range of datetimes with a given granularity.

    You can either use `end_time` or `num_points` to set the end of the range.

    Args:
        granularity: Frequency of the data points. Eg: 1 day, 2 hours.
        start_time: Start of the range.
        end_time: End of the range.
        num_points: Number of data points to generate.

    Returns:
        A list of datetimes.
    """
    if end_time is None and num_points is None:
        raise ValueError(
            "Both `end_time` and `num_points` are not set. One in the two arguments is required."
        )

    if end_time is not None and num_points is not None:
        raise ValueError(
            "Both `end_time` or `num_points` are set. Please use only one."
        )

    if end_time is not None:
        num_points = int((end_time - start_time) / granularity)

    return [start_time + i * granularity for i in range(num_points)]  # type: ignore


def delta_from_start(time_points: np.ndarray) -> np.ndarray:
    """Returns the timedeltas to the first element of the array."""
    # todo move this
    return time_points - np.full(len(time_points), time_points[0])
