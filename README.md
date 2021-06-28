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

#### Define a timeseries

```python
from datetime import timedelta
from mockseries.trend import LinearTrend
from mockseries.seasonality import SinusoidalSeasonality
from mockseries.noise import RedNoise

trend = LinearTrend(coefficient=2, time_unit=timedelta(days=4), flat_base=100)
seasonality = SinusoidalSeasonality(amplitude=20, period=timedelta(days=7)) \
              + SinusoidalSeasonality(amplitude=4, period=timedelta(days=1))
noise = RedNoise(mean=0, std=3, correlation=0.5)

timeseries = trend + seasonality + noise
```

#### Generate values

``` 
from datetime import datetime
from mockseries.utils import datetime_range

ts_index = datetime_range(
    granularity=timedelta(hours=1),
    start_time=datetime(2021, 5, 31),
    end_time=datetime(2021, 8, 30),
)
ts_values = timeseries.generate(ts_index)
```

#### Plot or write to csv
```python
from mockseries.utils import plot_timeseries, write_csv

print(ts_index, ts_values)
plot_timeseries(ts_index, ts_values, save_path="hello_mockseries.png")
write_csv(ts_index, ts_values, "hello_mockseries.csv")
```

### References
- J. R. Maat, A. Malali, and P. Protopapas, “TimeSynth: A Multipurpose Library for Synthetic Time Series in Python,” 2017. [Online]. Available: http://github.com/TimeSynth/TimeSynth.
- TStimulus. Available: https://github.com/cetic/TSimulus.
