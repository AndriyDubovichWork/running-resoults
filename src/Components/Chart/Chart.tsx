import React from 'react';
import LineChart from './LineChart';

const Chart = ({ UserData }: any) => {
  return (
    <div style={{}}>
      <LineChart chartData={UserData} />
    </div>
  );
};

export default Chart;
