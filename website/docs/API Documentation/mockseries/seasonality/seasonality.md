---
sidebar_label: seasonality
title: mockseries.seasonality.seasonality
---

## Seasonality Objects

```python
class Seasonality()
```

Seasonality interface.

#### sample\_at

```python
 | sample_at(time_points: np.ndarray, trend_components: np.ndarray) -> np.ndarray
```

Samples the seasonality components of the timeseries.

