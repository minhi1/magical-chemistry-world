import React, { useState } from 'react';
import diceRollImg from '../assets/dice-roll.png';

import dice1 from '../assets/dice/1.png';
import dice2 from '../assets/dice/2.png';
import dice3 from '../assets/dice/3.png';
import dice4 from '../assets/dice/4.png';
import dice5 from '../assets/dice/5.png';
import dice6 from '../assets/dice/6.png';

import confirmButtonImg from '../assets/confirm-button.png'; // nút xác nhận

const diceFaces = [null, dice1, dice2, dice3, dice4, dice5, dice6];

const DiceRoller = ({ onRoll, disabled }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [currentValue, setCurrentValue] = useState(null); // giá trị đã tung xong, đang hiển thị

  const rollDice = () => {
    if (disabled || isRolling) return;

    setIsRolling(true);
    // ẩn kết quả cũ trong lúc tung
    setCurrentValue(null);

    // delay nhẹ cho cảm giác tung xúc xắc
    setTimeout(() => {
      const finalValue = Math.floor(Math.random() * 6) + 1;
      setCurrentValue(finalValue); // chỉ hiển thị, CHƯA gọi onRoll
      setIsRolling(false);
    }, 600);
  };

  const handleConfirm = () => {
    if (!currentValue) return;
    onRoll(currentValue); // gọi onRoll để board xử lý số bước và di chuyển
    setCurrentValue(null); // ẩn kết quả sau khi confirm
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          onClick={rollDice}
          disabled={disabled || isRolling}
          className={`relative transition-all duration-200 ${
            disabled || isRolling
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110 cursor-pointer active:scale-95'
          }`}
        >
          <img
            src={diceRollImg}
            alt="Roll Dice"
            className="w-32 h-32 drop-shadow-2xl"
          />
        </button>
      </div>

      {/* Full-screen overlay hiển thị kết quả lớn */}
      {currentValue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative">
            <img
              src={diceFaces[currentValue]}
              alt={`Kết quả ${currentValue}`}
              className="w-[300px] h-[300px] md:w-[560px] md:h-[560px] object-contain drop-shadow-2xl select-none"
            />
            <button
              type="button"
              onClick={handleConfirm}
              className="absolute top-4 right-4 hover:scale-110 transition-transform"
            >
              <img
                src={confirmButtonImg}
                alt="Xác nhận bước đi"
                className="w-12 h-12"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiceRoller;
