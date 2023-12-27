
import React, { useState } from 'react';
import ScoreSystem from './ScoreSystem';
import RollingDice from './RollingDice';

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[error,setError] = useState("");

  const generateRandomNumber = () => Math.floor(Math.random() * 6) + 1;

  const [currentDice, setCurrentDice] = useState(1);

  const handleDiceClick = () => {
    if (!selectedNumber) {
        setError('Select the number first');
        return;
      }
      
      
    const randomNumber = generateRandomNumber();

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    // Set the selected number to undefined for the next round
    setSelectedNumber(undefined);

    // Update the currentDice for the next round
    setCurrentDice(randomNumber);
    setError('');
  };

  const handleNumberSelect = (value) => {
    // Set the selected number for comparison in the handleDiceClick function
    setSelectedNumber(value);
  };
  const resetScore = () => {
    setScore(0);
  }

  

  return (
    <div className='flex flex-col'>
      <ScoreSystem score={score} selected={selectedNumber} onSelect={handleNumberSelect} error={error}/>
      <RollingDice currentDice={currentDice} handle={handleDiceClick} reset = {resetScore}/>
    </div>
  );
};

export default GamePage;
