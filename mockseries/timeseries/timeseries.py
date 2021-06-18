"""Timeseries that can generate all data points independently.

This type of timeseries have T(t) entirely defined without needing to compute T(t-1).
This make the computation of such timeseries and embarrassingly parallel problem,
so the sample is performed with numpy array operations.
"""
from datetime import datetime
from typing import List, Optional, Union

import numpy as np

from mockseries.noise.noise import Noise
from mockseries.seasonality.seasonality import Seasonality
from mockseries.timeseries.base_timeseries import BaseTimeSeries
from mockseries.trend.base_trend import BaseTrend


class TimeSeries(BaseTimeSeries):
    """Timeseries generator."""

    def __init__(
        self,
        start_level: float,
        trend: BaseTrend,
        seasonalities: Optional[Union[Seasonality, List[Seasonality]]] = None,
        noise: Optional[Noise] = None,
    ):
        self.start_level = start_level
        self.level = start_level
        self.trend = trend
        # parse list or not
        if seasonalities is None or isinstance(seasonalities, list):
            self.seasonalities = seasonalities
        else:
            self.seasonalities = [seasonalities]
        self.noise = noise

    def generate(
        self, time_points: List[datetime], random_seed: Optional[int] = None
    ) -> np.ndarray:
        """Generate the timeseries values."""
        if random_seed:
            np.random.seed(random_seed)
        time_points = np.array(time_points)
        trend_components = self.trend.sample_at(time_points, self.start_level)

        seasonality_components = np.zeros(len(time_points))
        if self.seasonalities:
            # assumes seasonalities are independent, ie draw from trend_components for value based and multiplicative seasonalities
            for seasonality in self.seasonalities:
                seasonality_components += seasonality.sample_at(
                    time_points, trend_components
                )

        noise_components = np.zeros(len(time_points))
        # assumes noise is independent from seasonalities, ie draw from trend_components for value based and multiplicative components
        if self.noise:
            noise_components = self.noise.sample(trend_components)

        return trend_components + seasonality_components + noise_components
