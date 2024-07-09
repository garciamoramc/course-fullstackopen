import React from 'react';
import StatisticLine from './StatisticLine';


const Statistics = (props) => {
  const { good, neutral, bad, total, average, positive } = props;

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average.toFixed(1)} />
      <StatisticLine text="positive" value={`${positive.toFixed(1)}%`} />
    </div>
  );
};

export default Statistics