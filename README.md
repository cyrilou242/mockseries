<p align="center">
  <img src="https://github.com/cyrilou242/mockseries/blob/main/website/static/img/mockingbird200.png">
</p>

# mockseries
**mockseries** is and easy to use and intuitive  Python package that helps generate synthetic (**mock**) time**series**.

[-> Documentation website](https://mockseries.catheu.tech/docs/intro).


## Installation  
    
    #python >=3.6.6 
    pip install mockseries
    
## Contributing
Contributions are welcome!   
Standards, objectives and process not defined yet.
    
## Quick Run

#### Define a generator

```python
from mockseries.generator import TimeSeries
from mockseries.interaction import ADDITIVE
from mockseries.noise import RedNoise
from mockseries.seasonality import SinusoidalSeasonality
from mockseries.trend.linear_trend import LinearTrend

ts_generator = TimeSeries(
    start_level=100,
    trend=LinearTrend(coefficient=2, time_unit=timedelta(days=4)),
    seasonalities=[
        SinusoidalSeasonality(
            amplitude=20, period=timedelta(days=7), interaction=ADDITIVE
        ),
        SinusoidalSeasonality(
            amplitude=4, period=timedelta(days=1), interaction=ADDITIVE
        ),
    ],
    noise=RedNoise(mean=0, std=3, correlation=0.5, interaction=ADDITIVE),
)
```

#### Generate

``` 
from datetime import datetime
from mockseries.utils import datetime_range

ts_index = datetime_range(
    granularity=timedelta(hours=1),
    start_time=datetime(2021, 5, 31),
    end_time=datetime(2021, 8, 30),
)
ts_values = ts_generator.generate(ts_index)
```

#### Plot or write to csv
```python
from mockseries.utils import plot_timeseries, write_csv

print(ts_index, ts_values)
plot_timeseries(ts_index, ts_values, save_path="hello_mockseries.png")
write_csv(ts_index, ts_values, "hello_mockseries.csv")
```

