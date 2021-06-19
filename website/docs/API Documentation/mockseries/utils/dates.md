---
sidebar_label: dates
title: mockseries.utils.dates
---

#### datetime\_range

```python
datetime_range(granularity: timedelta, start_time: datetime, end_time: Optional[datetime] = None, num_points: Optional[int] = None) -> List[datetime]
```

Generates a range of datetimes with a given granularity.

You can either use `end_time` or `num_points` to set the end of the range.

**Arguments**:

- `granularity` - Frequency of the data points. Eg: 1 day, 2 hours.
- `start_time` - Start of the range.
- `end_time` - End of the range.
- `num_points` - Number of data points to generate.
  

**Returns**:

  A list of datetimes.

#### delta\_from\_start

```python
delta_from_start(time_points: np.ndarray) -> np.ndarray
```

Returns the timedeltas to the first element of the array.

