from datetime import datetime
from typing import Collection, List, Optional, Union

import numpy as np

try:
    import matplotlib as mpl
    import matplotlib.pyplot as plt
except ModuleNotFoundError:
    raise ModuleNotFoundError(
        "No module named 'matplotlib'.\n"
        "Matplotlib is not installed by the mockseries package, but is required to use the plot utils.\n"
        "Please install matplotlib."
    )


def plot_timeseries(
    time_points: Collection[datetime],
    timeseries: Union[np.ndarray, List[np.ndarray]],
    titles: Optional[Union[str, List[str]]] = None,
) -> None:
    """Plots timeseries.

    Args:
        time_points: The timeseries index. A list of datetimes.
        timeseries: A timeseries or a list of timeseries.
        titles: A title or a list of titles. If not passed, timeseries are numbered by order.
    """

    if not isinstance(timeseries, list):
        timeseries = [timeseries]
    if not titles:
        titles = ["Line {}".format(i) for i in range(1, len(timeseries) + 1)]
    elif isinstance(titles, str):
        titles = [titles]

    with plt.style.context("bmh"):
        mpl.rcParams["axes.facecolor"] = "white"
        for values, title in zip(timeseries, titles):
            plt.plot(time_points, values, label=title)

        plt.legend(title="Timeseries")
        plt.xticks(rotation=45)
        plt.show()
