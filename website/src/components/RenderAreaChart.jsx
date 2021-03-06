import React from 'react';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const RenderAreaChart = ({data}) => {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" /><Tooltip />
    </AreaChart>
  );
};

export default RenderAreaChart;