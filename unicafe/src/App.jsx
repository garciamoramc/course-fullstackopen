import React, { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      {(good || neutral || bad) > 0 ? (
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average} 
        positive={positive} 
      />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
