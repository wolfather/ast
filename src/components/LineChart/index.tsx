import { FC, useEffect, memo, useState } from 'react';

import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';

export type PropsChart = {
  data: any;
}

const _Chart: FC<PropsChart> = (props: PropsChart) => {
  const [chart, setChart] = useState([]);
  
  useEffect(() => {
    if(props.data.datasets) {
      setChart(props.data.datasets)
    }
  }, [props.data, chart])
  
  if(!props.data) {
    return <></>
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
    <LineChart>
      <CartesianGrid strokeDasharray="3 5" />
      <XAxis
        dataKey="timestamp"
        allowDuplicatedCategory={true}
        interval="preserveEnd" />
      <YAxis 
        dataKey="value"
        interval="preserveEnd"
        domain={[0, 100]}
        allowDataOverflow={false} />
      <Tooltip />
      <Legend />
      {chart.map((item: any) => (
        <Line 
          stroke={item.backgroundColor} 
          dataKey="value" 
          data={item.data} 
          name={item.name} 
          key={item.name}
          activeDot={true}
          strokeWidth={2} />
      ))}
    </LineChart>
  </ResponsiveContainer>
  )
}

export const Chart = memo(_Chart);