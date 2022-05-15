import { Chart } from './components/LineChart';

import { Toast } from './components/Toast';
import { WeatherContainer } from './components/WeatherContainer';
import { Weatherdisplay } from './components/Weatherdisplay';
import { useChartData } from './hooks/usechartdata';

function App() {
  
  const { weatherData, status, chartData } = useChartData();

  return (
    <div className="App">
      <Toast status={status} />
      <WeatherContainer>
        {weatherData.map(data => (
          <Weatherdisplay
            key={data.id}
            tempId={data.id}
            tempValue={data.temperature} />
        ))}
      </WeatherContainer>

      <Chart data={chartData} />
    </div>
  );
}

export default App;
