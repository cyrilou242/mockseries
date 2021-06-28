"""Timeseries that can generate all data points independently.

This type of timeseries have T(t) entirely defined without needing to compute T(t-1).
This make the computation of such timeseries and embarrassingly parallel problem,
so the sample is performed with numpy array operations.
"""
from datetime import datetime
from typing import List, Optional

import numpy as np

from mockseries.interaction.interaction import Interaction
from mockseries.noise.noise import Noise
from mockseries.seasonality.seasonality import Seasonality
from mockseries.trend.trend import Trend


class TimeSeries:
    """Timeseries generator."""

    def __init__(
        self,
        interaction: Interaction,
        trend: Optional[Trend],
        seasonality: Optional[Seasonality] = None,
        noise: Optional[Noise] = None,
    ):
        self.interaction = interaction
        self.trend = trend
        self.seasonality = seasonality
        self.noise = noise

    def generate(
        self, time_points: List[datetime], random_seed: Optional[int] = None
    ) -> np.ndarray:
        """Generate the timeseries values."""
        if random_seed:
            np.random.seed(random_seed)

        time_points = np.array(time_points)
        components = []
        if self.trend:
            trend_component = self.trend._sample_at(time_points)
            components.append(trend_component)

        if self.seasonality:
            seasonality_component = self.seasonality._sample_at(time_points)
            components.append(seasonality_component)

        if self.noise:
            noise_component = self.noise._sample_at(time_points)
            components.append(noise_component)

        # TODO give a way to return separated components
        return self.interaction.interact(*components)
