import React from 'react';
import './Chart.scss';
import ChartBar from './ChartBar';

const Chart = ({dataPoints}) => {
  const totalMaximum = dataPoints.reduce((total, monthlyExpense) => total + monthlyExpense.value, 0);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
