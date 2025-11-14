import React, { useState } from 'react';
import { useGame } from '../context/GameContext';

const QuestionModal = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { state } = useGame();

  if (!question) return null;

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === question.answer;
    setShowExplanation(true);
    
    // Wait 2 seconds before closing and applying result
    setTimeout(() => {
      onAnswer(isCorrect, question.difficulty);
      setShowExplanation(false);
      setSelectedAnswer(null);
    }, 2500);
  };

  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'OWL':
        return 'bg-green-500';
      case 'NEWT':
        return 'bg-yellow-500';
      case 'WOMBAT':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDifficultyName = () => {
    switch (question.difficulty) {
      case 'OWL':
        return 'O.W.L - Dễ';
      case 'NEWT':
        return 'N.E.W.T - Trung Bình';
      case 'WOMBAT':
        return 'W.O.M.B.A.T - Khó';
      default:
        return question.difficulty;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-2xl max-w-2xl w-full border-4 border-yellow-500 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${getDifficultyColor()} text-white p-4 rounded-t-xl`}>
          <h2 className="text-2xl font-bold text-center">
            {getDifficultyName()}
          </h2>
          <p className="text-center text-sm mt-1">Ô số {question.square}</p>
        </div>

        {/* Question */}
        <div className="p-6 text-white">
          <p className="text-lg mb-6 font-semibold leading-relaxed">
            {question.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const optionLetter = option.charAt(0);
              const isSelected = selectedAnswer === optionLetter;
              const isCorrect = optionLetter === question.answer;
              
              let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
              
              if (showExplanation) {
                if (isCorrect) {
                  buttonClass += 'bg-green-600 border-green-400 text-white';
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'bg-red-600 border-red-400 text-white';
                } else {
                  buttonClass += 'bg-gray-700 border-gray-600 text-gray-300';
                }
              } else {
                if (isSelected) {
                  buttonClass += 'bg-yellow-500 border-yellow-300 text-gray-900 font-bold shadow-lg scale-105';
                } else {
                  buttonClass += 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-yellow-400';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && setSelectedAnswer(optionLetter)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  {option}
                  {showExplanation && isCorrect && (
                    <span className="ml-2">✅</span>
                  )}
                  {showExplanation && isSelected && !isCorrect && (
                    <span className="ml-2">❌</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-50 rounded-lg border-2 border-blue-400">
              <h3 className="font-bold text-yellow-300 mb-2">📚 Giải thích:</h3>
              <p className="text-sm leading-relaxed">{question.explanation}</p>
              
              <div className="mt-4 text-center">
                {selectedAnswer === question.answer ? (
                  <p className="text-green-400 font-bold text-xl">
                    🎉 Chính xác! Bạn nhận được {question.difficulty === 'OWL' ? 1 : question.difficulty === 'NEWT' ? 2 : 3} token!
                  </p>
                ) : (
                  <p className="text-red-400 font-bold text-xl">
                    😔 Sai rồi! Đáp án đúng là {question.answer}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          {!showExplanation && (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`w-full mt-6 py-3 px-6 rounded-lg font-bold text-lg transition-all duration-200 ${
                selectedAnswer === null
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {selectedAnswer === null ? 'Chọn đáp án' : 'Xác nhận'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
