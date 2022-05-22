import { useEffect, useState } from 'react';
import { Chart } from './components/LineChart';

import { Toast } from './components/Toast';
import { WeatherContainer } from './components/WeatherContainer';
import { Weatherdisplay } from './components/Weatherdisplay';
import { WeatherBox } from './entity/weather.interface';
import { useChartData } from './hooks/usechartdata';

function App() {
  const { status, chartData } = useChartData();

  const [weatherData, setWeatherData] = useState<WeatherBox[]>([])

  useEffect(() => {
    if(chartData.datasets) {
      const last = chartData.datasets.map((item: any) => item.data.pop());

      setWeatherData(last);
    }

  }, [chartData]);

  return (
    <div className="App">
      <Toast status={status} />

      <WeatherContainer>
        {weatherData.map(data => (
          <Weatherdisplay
            key={data.category}
            tempId={data.category}
            tempValue={String(data.temperature)} />
        ))}
      </WeatherContainer>

      <Chart data={chartData} />
    </div>
  );
}

export default App;
