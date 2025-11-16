import React, { useState } from 'react';
import instruction1 from '../assets/instruction-1.png';
import instruction2 from '../assets/instruction-2.png';
import instruction3 from '../assets/instruction-3.png';
import instruction4 from '../assets/instruction-4.png';
import exitIcon from '../assets/exit-icon.png';
import checkIcon from '../assets/check-icon.png';
import nextIcon from '../assets/next-icon.png';
import backIcon from '../assets/back-icon.png';

const pages = [instruction1, instruction2, instruction3, instruction4];

const InstructionModal = ({ onClose }) => {
  const [index, setIndex] = useState(0);
  const isLast = index === pages.length - 1;
  const isFirst = index === 0;

  const goNext = () => {
    if (!isLast) setIndex((i) => i + 1);
  };
  const goPrev = () => {
    if (!isFirst) setIndex((i) => i - 1);
  };

  return (
    // Overlay trong suốt, panel chỉ chiếm 1 phần màn hình
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-52 px-4 bg-transparent">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-auto overflow-hidden border border-gray-200">
        {/* Exit button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 hover:scale-110 transition-transform"
        >
          <img src={exitIcon} alt="Đóng" className="w-10 h-10" />
        </button>

        {/* Check / Finish button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:scale-110 transition-transform"
        >
          <img src={checkIcon} alt="Xong" className="w-10 h-10" />
        </button>

        <div className="flex items-center justify-between px-10 py-8">
          {/* Back */}
          <button
            onClick={goPrev}
            disabled={isFirst}
            className={`transition-transform ${
              isFirst ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
            }`}
          >
            <img src={backIcon} alt="Trang trước" className="w-10 h-10" />
          </button>

          {/* Page image */}
          <div className="flex-1 flex items-center justify-center px-4">
            <img
              src={pages[index]}
              alt={`Hướng dẫn trang ${index + 1}`}
              className="max-h-[40vh] w-full object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={isLast}
            className={`transition-transform ${
              isLast ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
            }`}
          >
            <img src={nextIcon} alt="Trang sau" className="w-10 h-10" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 pb-4">
          {pages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
