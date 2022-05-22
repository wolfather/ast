import { useState, useEffect, useCallback } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Weather } from '../../entity/weather.interface';
import { convertToDate } from '../../utils/converttodate';
import { groupBy } from '../../utils/group';

const _useChartData = () => {
  const [weatherHistory, setWeatherHistory] = useState<Weather[]>([]);
  const [status, setStatus] = useState<string>('');
  const [chartData, setChartData] = useState<any>([]);

  const { lastMessage, readyState } = useWebSocket('ws://localhost:8999/', {
    shouldReconnect: (closeEvent) => true,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const poolingMessage = useCallback(() => {
    if (lastMessage) {
      const _weatherData = JSON.parse(lastMessage?.data)
        .map((weather: Weather) => {
          let _data = undefined;

          if(weather.data < 100) {
            _data = weather.data;
          }

          return {...weather, data: _data};
        });

      setWeatherHistory(prev => [...prev, ..._weatherData]);
    }
  }, [lastMessage, setWeatherHistory]);

  const getChartData = useCallback(() => {
    const datasets = Object
      .values(groupBy(weatherHistory, 'id'))
      .map((histories: any, index: number) => {
        const data = histories.map((history: any) => {
          return {
            category: index === 0 ? 'ID 1' : 'ID 2',
            value: history.data !== undefined ? history.data : 0,
            temperature: history.temperature,
            timestamp: convertToDate(history.timestamp),
          }
        });
        
        return {
          name: index === 0 ? 'ID 1' : 'ID 2',
          data,
          borderColor: index === 0 ? 'rgb(255, 99, 132)' : 'rgb(53, 162, 235)',
          backgroundColor: index === 0 ? 'rgba(255, 99, 132, 0.5)' : 'rgba(53, 162, 235, 0.5)',
        };
    });

    return {
      name: Object.keys(groupBy(weatherHistory, 'id')),
      datasets
    };
  }, [weatherHistory]);

  useEffect(() => {
    
    if(connectionStatus === 'Open' || 'Closed') {
        poolingMessage();
        setStatus(connectionStatus);
      }
      
      if(getChartData().datasets.length) {
        setChartData(getChartData);
      }

  }, [poolingMessage, connectionStatus, setChartData, getChartData]);

  return { weatherHistory, status, chartData };
}


export const useChartData = _useChartData;