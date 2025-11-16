import React, { useState } from 'react';
import { LESSONS } from '../data/gameConfig';

const GameSetup = ({ onStart }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedLesson, setSelectedLesson] = useState(2);

  const handleStart = () => {
    if (!playerName.trim()) {
      alert('Vui lòng nhập tên của bạn!');
      return;
    }
    onStart(playerName.trim(), selectedLesson);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl max-w-2xl w-full border-4 border-yellow-500 p-8 my-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400 mb-2">
            🧙‍♂️ Magical Chemistry World
          </h1>
          <p className="text-xl text-gray-300">
            Hành trình khám phá hóa học kỳ diệu
          </p>
        </div>

        {/* Player Name Input */}
        <div className="mb-6">
          <label className="block text-white text-lg font-bold mb-2">
            👤 Tên của bạn:
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Nhập tên của bạn..."
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-gray-600 focus:border-yellow-400 focus:outline-none text-lg"
            maxLength={20}
          />
        </div>

        {/* Lesson Selection */}
        <div className="mb-8">
          <label className="block text-white text-lg font-bold mb-3">
            📚 Chọn bài học:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {LESSONS.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedLesson === lesson.id
                    ? 'bg-yellow-500 border-yellow-300 text-gray-900 font-bold shadow-lg scale-105'
                    : 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-yellow-400'
                }`}
              >
                <div className="font-bold text-lg">{lesson.name}</div>
                <div className="text-sm opacity-80">{lesson.nameEn}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Game Rules */}
        <div className="mb-6 bg-indigo-900 bg-opacity-50 rounded-lg p-4 border-2 border-indigo-400">
          <h3 className="text-yellow-300 font-bold text-lg mb-2">📜 Luật chơi:</h3>
          <ul className="text-white text-sm space-y-1">
            <li>🎲 Tung xúc xắc để di chuyển trên bàn cờ</li>
            <li>❓ Trả lời câu hỏi hóa học để kiếm token</li>
            <li>🦉 O.W.L (dễ): 1 token | 🦎 N.E.W.T (TB): 2 tokens | 🦡 W.O.M.B.A.T (khó): 3 tokens</li>
            <li>✨ Accio: Tiến 1 ô | ⚡ Depulso: Lùi 1 ô</li>
            <li>🚫 Locomotor Mortis: Mất lượt</li>
            <li>🎯 Mục tiêu: Đến ô 19 (Albus Dumbledore) để thắng!</li>
          </ul>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-gray-900 font-bold py-4 px-6 rounded-lg text-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          🚀 Bắt đầu trò chơi!
        </button>
      </div>
    </div>
  );
};

export default GameSetup;
