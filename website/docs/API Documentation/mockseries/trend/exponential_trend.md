---
sidebar_label: exponential_trend
title: mockseries.trend.exponential_trend
---

## ExponentialTrend Objects

```python
class ExponentialTrend(BaseTrend)
```

y=start_value*(a**t).

#### sample\_at

```python
 | sample_at(time_points: np.ndarray, start_level: float) -> np.ndarray
```

Sample the trend components.

