import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GameModeSelection from '../Components/GameModeSelection.jsx';

const GameModeSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const lesson = location.state?.lesson || 2;
  const classNum = location.state?.class || 7;

  const handleSelectMode = (mode) => {
    if (mode === 'single') {
      navigate('/game', { state: { lesson, class: classNum, mode } });
    } else {
      alert('Chế độ nhóm sắp ra mắt!');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <GameModeSelection 
      onSelectMode={handleSelectMode} 
      onBack={handleBack}
    />
  );
};

export default GameModeSelectionPage;
