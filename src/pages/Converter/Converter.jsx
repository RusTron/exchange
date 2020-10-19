import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import './Converter.scss';

const data = [
  { argument: -1, value: 0 },
  { argument: 1, value: 26 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

export const Converter = () => {
  return (
    <Paper>
      <Chart
        data={data}
      >
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
    </Paper>
  )
}