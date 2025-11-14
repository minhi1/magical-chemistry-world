import React from 'react';

const DarkArtsModal = ({ darkArts, onApply }) => {
  if (!darkArts) return null;

  const getCardColor = () => {
    switch (darkArts.id) {
      case 'everte-statum':
        return 'from-orange-900 to-red-900';
      case 'forbidden-forest':
        return 'from-green-900 to-gray-900';
      case 'azkaban':
        return 'from-gray-900 to-black';
      default:
        return 'from-purple-900 to-black';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className={`bg-gradient-to-br ${getCardColor()} rounded-2xl shadow-2xl max-w-md w-full border-4 border-red-600`}>
        {/* Skull Header */}
        <div className="bg-red-900 text-white p-4 rounded-t-xl border-b-4 border-red-600">
          <h2 className="text-3xl font-bold text-center">
            ☠️ DARK ARTS ☠️
          </h2>
        </div>

        {/* Card Content */}
        <div className="p-8 text-white text-center">
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-red-400 mb-4">
              {darkArts.name}
            </h3>
            <div className="text-8xl mb-4">
              {darkArts.id === 'everte-statum' && '⚡'}
              {darkArts.id === 'forbidden-forest' && '🌲'}
              {darkArts.id === 'azkaban' && '🏰'}
            </div>
            <p className="text-xl leading-relaxed">
              {darkArts.description}
            </p>
          </div>

          {/* Warning Message */}
          <div className="bg-red-950 bg-opacity-50 rounded-lg p-4 border-2 border-red-500 mb-6">
            <p className="text-yellow-300 font-bold">
              ⚠️ Bạn đã kích hoạt lá bài Dark Arts! ⚠️
            </p>
          </div>

          {/* Apply Button */}
          <button
            onClick={onApply}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Chấp nhận hình phạt
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkArtsModal;
