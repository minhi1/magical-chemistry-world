import React, { useState } from 'react';
import diceRollImg from '../assets/dice-roll.png';

const DiceRoller = ({ onRoll, disabled }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  const rollDice = () => {
    if (disabled || isRolling) return;

    setIsRolling(true);
    
    // Animate dice roll
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setCurrentValue(Math.floor(Math.random() * 6) + 1);
      rollCount++;
      
      if (rollCount >= 10) {
        clearInterval(rollInterval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setCurrentValue(finalValue);
        setIsRolling(false);
        onRoll(finalValue);
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={rollDice}
        disabled={disabled || isRolling}
        className={`relative transition-all duration-300 ${
          disabled || isRolling
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:scale-110 cursor-pointer active:scale-95'
        } ${isRolling ? 'animate-bounce' : ''}`}
      >
        <img
          src={diceRollImg}
          alt="Roll Dice"
          className="w-32 h-32 drop-shadow-2xl"
        />
        
        {/* Dice Value Display */}
        {currentValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-6xl font-bold ${isRolling ? 'animate-spin' : 'animate-pulse'}`}>
              {currentValue}
            </div>
          </div>
        )}
      </button>
      
      {/* <p className="mt-2 text-white font-bold text-lg">
        {isRolling ? '🎲 Đang tung...' : disabled ? '⏸️ Chờ đợi...' : '🎲 Tung xúc xắc'}
      </p> */}
    </div>
  );
};

export default DiceRoller;
