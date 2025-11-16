import React from 'react';

const WinModal = ({ tokens, moves, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl shadow-2xl max-w-md w-full border-4 border-yellow-300">
        {/* Confetti Header */}
        <div className="bg-yellow-500 text-gray-900 p-6 rounded-t-xl text-center">
          <div className="text-6xl mb-2">🎉</div>
          <h2 className="text-4xl font-bold">
            CHIẾN THẮNG!
          </h2>
        </div>

        {/* Win Content */}
        <div className="p-8 text-center text-white">
          <p className="text-2xl font-bold mb-6">
            Chúc mừng bạn!
          </p>
          
          <p className="text-lg mb-6">
            Bạn đã hoàn thành hành trình học hóa học kỳ diệu và đến được với Giáo sư Dumbledore! 🧙‍♂️
          </p>

          {/* Stats */}
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-4 mb-6 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold">🪙 Tokens thu được:</span>
              <span className="text-2xl font-bold">{tokens}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">🎲 Số lượt đi:</span>
              <span className="text-2xl font-bold">{moves}</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-yellow-200 font-semibold">
              "Học tập không bao giờ là hết, ngay cả đối với những người kỳ diệu nhất!"
            </p>
            <p className="text-sm text-yellow-300 mt-2">- Albus Dumbledore</p>
          </div>

          {/* Restart Button */}
          <button
            onClick={onRestart}
            className="w-full bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold py-4 px-6 rounded-lg text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🔄 Chơi lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
