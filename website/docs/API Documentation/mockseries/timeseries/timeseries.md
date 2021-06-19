---
sidebar_label: timeseries
title: mockseries.timeseries.timeseries
---

Timeseries that can generate all data points independently.

This type of timeseries have T(t) entirely defined without needing to compute T(t-1).
This make the computation of such timeseries and embarrassingly parallel problem,
so the sample is performed with numpy array operations.

## TimeSeries Objects

```python
class TimeSeries(BaseTimeSeries)
```

Timeseries generator.

#### generate

```python
 | generate(time_points: List[datetime], random_seed: Optional[int] = None) -> np.ndarray
```

Generate the timeseries values.

