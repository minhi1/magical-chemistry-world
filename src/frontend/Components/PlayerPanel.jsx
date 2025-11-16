import React from 'react';
import { useGame } from '../context/GameContext';

const PlayerPanel = () => {
  const { state } = useGame();

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl shadow-2xl p-6 border-4 border-yellow-500">
      {/* Player Name */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-yellow-300">
          🧙‍♂️ {state.playerName || 'Người chơi'}
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Current Position */}
        <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 border-2 border-blue-400">
          <div className="text-blue-200 text-sm mb-1">Vị trí hiện tại</div>
          <div className="text-3xl font-bold text-white">
            {state.currentPosition}
          </div>
        </div>

        {/* Tokens */}
        <div className="bg-yellow-600 bg-opacity-50 rounded-lg p-4 border-2 border-yellow-400">
          <div className="text-yellow-200 text-sm mb-1">🪙 Tokens</div>
          <div className="text-3xl font-bold text-white">
            {state.tokens}
          </div>
        </div>

        {/* Questions Answered */}
        <div className="bg-green-700 bg-opacity-50 rounded-lg p-4 border-2 border-green-400">
          <div className="text-green-200 text-sm mb-1">✅ Đã trả lời</div>
          <div className="text-3xl font-bold text-white">
            {state.answeredQuestions.length}
          </div>
        </div>

        {/* Turns to Skip */}
        <div className="bg-red-700 bg-opacity-50 rounded-lg p-4 border-2 border-red-400">
          <div className="text-red-200 text-sm mb-1">🚫 Lượt bị mất</div>
          <div className="text-3xl font-bold text-white">
            {state.turnsToSkip}
          </div>
        </div>
      </div>

      {/* Current Lesson */}
      <div className="mt-4 bg-purple-800 bg-opacity-50 rounded-lg p-3 border-2 border-purple-400">
        <div className="text-purple-200 text-sm">📖 Bài học hiện tại</div>
        <div className="text-lg font-bold text-white">
          Bài {state.selectedLesson}
        </div>
      </div>

      {/* Last Dice Roll */}
      {state.diceValue && (
        <div className="mt-4 bg-gray-800 bg-opacity-50 rounded-lg p-3 border-2 border-gray-600">
          <div className="text-gray-300 text-sm">🎲 Lần tung gần nhất</div>
          <div className="text-2xl font-bold text-white">
            {state.diceValue}
          </div>
        </div>
      )}

      {/* Message */}
      {state.message && (
        <div className="mt-4 bg-indigo-800 bg-opacity-50 rounded-lg p-3 border-2 border-indigo-400">
          <p className="text-white text-center font-semibold">
            {state.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default PlayerPanel;
