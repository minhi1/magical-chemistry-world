import React from 'react';
import Home from './Pages/Home';
import ChemistryGame from './Pages/Game/ChemistryGame';
import { Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';

export default function App() {
  return (
    <GameProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<ChemistryGame />} />
      </Routes>
    </GameProvider>
  );
}