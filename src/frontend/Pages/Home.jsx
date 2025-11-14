import React, { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";
import { GameSquare, SQUARE_SIZE } from "../Components/GameSquare";
import PlayerPanel from "../Components/PlayerPanel";
import DiceRoller from "../Components/DiceRoller";
import QuestionModal from "../Components/QuestionModal";
import DarkArtsModal from "../Components/DarkArtsModal";
import WinModal from "../Components/WinModal";
import GameSetup from "../Components/GameSetup";

import boardBg from "../assets/game-background.svg";
import placeholderSquare from "../assets/fence.png";
import accioImg from "../assets/accio.png";
import albusDumbledoreImg from "../assets/albus-dumbledore.png";
import argusFilchImg from "../assets/argus-filch.png";
import depulsoImg from "../assets/depulso.png";
import locomotorMortisImg from "../assets/locomotor-mortis.png";
import owlImg from "../assets/owl.png";
import newtImg from "../assets/newt.png";
import wombatImg from "../assets/wombat.png";
import diceRollImg from "../assets/dice-roll.png";
import titleImg from "../assets/title.png";

import { COLS, ROWS, BOARD_WIDTH, BOARD_HEIGHT, GAME_PHASES, SQUARE_CONFIG, SQUARE_TYPES, DARK_ARTS_CARDS } from "../data/gameConfig";
import { getQuestionByLessonAndSquare } from "../data/questions";

// Store the source and positions for each type of image
const imgInfo = {
  accio: { src: accioImg, positions: [10,15] },
  albusDumbledore: { src: albusDumbledoreImg, positions: [19] },
  argusFilch: { src: argusFilchImg, positions: [1] },
  depulso: { src: depulsoImg, positions: [8,17] },
  locomotorMortis: { src: locomotorMortisImg, positions: [12] },
  owl: { src: owlImg, positions: [2,3,5,7] },
  newtImg: { src: newtImg, positions: [4,6,11,16] },
  wombatImg: { src: wombatImg, positions: [9,13,14,18] },
};

const Home = () => {
  const { state, dispatch } = useGame();
  const [animatingMove, setAnimatingMove] = useState(false);

  // Prepare images by position array for quick lookup
  const imgsByPosition = [];
  for (var i = 0; i < COLS * 2 + 3; ++i) {
    imgsByPosition.push(placeholderSquare);  
  }

  for (const key in imgInfo) {
    const info = imgInfo[key];
    info.positions.forEach((pos) => {
      imgsByPosition[pos - 1] = info.src;
    });
  }

  // Helper function to transform square id to corresponding position index
  const getPositionById = (id) => {
    const [side, index] = id.split("-");
    if (side === "top") {
      var c = parseInt(index, 10);
      return COLS + 2 + c;
    } else if (side === "bottom") {
      var c = parseInt(index, 10);
      return COLS - c - 1;
    } else if (side === "left") {
      var r = parseInt(index, 10);
      return COLS + (r - 1);
    } else if (side === "right") {
      return COLS * 2 + 2;
    }
    return -1;
  };

  // Get square ID from position number
  const getSquareIdFromPosition = (position) => {
    // Bottom row (right to left): positions 1-8
    // Position 1 is bottom-right (start), position 8 is bottom-left (corner)
    if (position >= 1 && position <= 8) {
      return `bottom-${8 - position}`;
    }
    // Left column (bottom to top): positions 9-10
    // Position 9 is lower-left, position 10 is upper-left
    if (position === 9) return "left-3";  // Lower left square (row 3)
    if (position === 10) return "left-2"; // Upper left square (row 2)
    // Top row (left to right): positions 11-18
    // Position 11 is top-left (corner), position 18 is top-right (corner)
    if (position >= 11 && position <= 18) {
      return `top-${position - 11}`;
    }
    // Right destination: position 19
    if (position === 19) return "right-2";
    return null;
  };

  // Contains all the squares to render
  const squares = [];

  // top row (row 1)
  for (let c = 0; c < COLS; c++) {
    squares.push({
      id: `top-${c}`,
      left: c * SQUARE_SIZE,
      top: SQUARE_SIZE,
      role: "top",
    });
  }

  // bottom row (row 4)
  for (let c = 0; c < COLS; c++) {
    const isStart = c === COLS - 1; // rightmost bottom square is the start
    squares.push({
      id: `bottom-${c}`,
      left: c * SQUARE_SIZE,
      top: (ROWS - 2) * SQUARE_SIZE,
      role: isStart ? "start" : "bottom",
    });
  }

  // left side: two squares in the left column at row 2 and row 3
  for (let r = 2; r <= 3; r++) {
    squares.push({
      id: `left-${r}`,
      left: 0,
      top: r * SQUARE_SIZE,
      role: "left",
    });
  }

  // right side: single square in right column between top and bottom (choose row 2 here)
  const rightRow = 2; // you can change to 1 if you prefer it higher
  squares.push({
    id: `right-${rightRow}`,
    left: (COLS - 1) * SQUARE_SIZE,
    top: rightRow * SQUARE_SIZE,
    role: "destination",
  });

  // Handle game start
  const handleGameStart = (playerName, lesson) => {
    dispatch({
      type: 'START_GAME',
      payload: { playerName, lesson }
    });
  };

  // Handle dice roll
  const handleDiceRoll = (value) => {
    if (state.turnsToSkip > 0) {
      dispatch({ type: 'SET_MESSAGE', payload: `🚫 Bạn bị mất lượt! Còn ${state.turnsToSkip - 1} lượt nữa.` });
      dispatch({ type: 'SKIP_QUESTION' });
      return;
    }

    dispatch({ type: 'ROLL_DICE', payload: value });
    
    // Calculate new position
    setTimeout(() => {
      movePlayer(value);
    }, 500);
  };

  // Move player
  const movePlayer = (steps, isFromForcedMove = false) => {
    setAnimatingMove(true);
    let newPosition = state.currentPosition + steps;
    
    // Don't go past the end
    if (newPosition > 19) {
      newPosition = 19;
    }
    
    // Don't go below start
    if (newPosition < 1) {
      newPosition = 1;
    }

    dispatch({ type: 'MOVE_TO_POSITION', payload: newPosition });

    // After moving, handle the square effect
    setTimeout(() => {
      setAnimatingMove(false);
      handleSquareEffect(newPosition, isFromForcedMove);
    }, 800);
  };

  // Handle square effects
  const handleSquareEffect = (position, isFromForcedMove = false) => {
    const squareConfig = SQUARE_CONFIG[position];
    
    // Check if it's a question square
    if ([SQUARE_TYPES.OWL, SQUARE_TYPES.NEWT, SQUARE_TYPES.WOMBAT].includes(squareConfig.type)) {
      // Load question for this square and lesson
      const question = getQuestionByLessonAndSquare(state.selectedLesson, position);
      
      if (question) {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: question });
        dispatch({ type: 'HANDLE_SQUARE_EFFECT', payload: { position } });
      } else {
        // No question found, just continue
        dispatch({ type: 'SET_MESSAGE', payload: 'Không có câu hỏi cho ô này.' });
        dispatch({ type: 'HANDLE_SQUARE_EFFECT', payload: { position } });
      }
    } else if (squareConfig.type === SQUARE_TYPES.ACCIO && !isFromForcedMove) {
      // Move forward 1 (only if not already from a forced move)
      dispatch({ type: 'HANDLE_SQUARE_EFFECT', payload: { position } });
      setTimeout(() => {
        const newPos = Math.min(19, position + 1);
        dispatch({ type: 'MOVE_TO_POSITION', payload: newPos });
        setTimeout(() => {
          handleSquareEffect(newPos, true);
        }, 800);
      }, 1000);
    } else if (squareConfig.type === SQUARE_TYPES.DEPULSO && !isFromForcedMove) {
      // Move backward 1 (only if not already from a forced move)
      dispatch({ type: 'HANDLE_SQUARE_EFFECT', payload: { position } });
      setTimeout(() => {
        const newPos = Math.max(1, position - 1);
        dispatch({ type: 'MOVE_TO_POSITION', payload: newPos });
        setTimeout(() => {
          handleSquareEffect(newPos, true);
        }, 800);
      }, 1000);
    } else if (squareConfig.type === SQUARE_TYPES.LOCOMOTOR) {
      // Skip turn
      dispatch({ type: 'HANDLE_SQUARE_EFFECT', payload: { position } });
    } else {
      // Regular square or start/destination (including ACCIO/DEPULSO when from forced move)
      dispatch({ type: 'HANDLE_SQUARE_EFFECT', payload: { position } });
    }
  };

  // Handle question answer
  const handleAnswerQuestion = (isCorrect, difficulty) => {
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: { isCorrect, difficulty }
    });

    // Trigger Dark Arts card when answer is wrong
    if (!isCorrect) {
      // Randomly select 1 out of 3 Dark Arts cards
      const randomIndex = Math.floor(Math.random() * 3);
      const selectedCard = DARK_ARTS_CARDS[randomIndex];
      
      setTimeout(() => {
        dispatch({ type: 'TRIGGER_DARK_ARTS', payload: selectedCard });
      }, 500); // Show right after question modal closes
    }
  };

  // Handle Dark Arts penalty
  const handleApplyDarkArts = () => {
    const darkArts = state.currentDarkArts;
    dispatch({ type: 'APPLY_DARK_ARTS' });
    
    // After Dark Arts is applied, check if position changed and trigger square effect
    setTimeout(() => {
      const effect = darkArts.effect;
      if (effect === 'MOVE_BACK_2' || effect === 'RESET_TO_START') {
        // Get the new position after Dark Arts effect
        let newPos = state.currentPosition;
        if (effect === 'MOVE_BACK_2') {
          newPos = Math.max(1, state.currentPosition - 2);
        } else if (effect === 'RESET_TO_START') {
          newPos = 1;
        }
        // Trigger the square effect at the new position
        handleSquareEffect(newPos, false);
      }
    }, 100);
  };

  // Handle game restart
  const handleRestart = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  // Board style
  const boardStyle = {
    position: "relative",
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    backgroundImage: `url(${boardBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
    // ensure squares are inside the visible background area
    boxSizing: "content-box",
  };

  // Wrap for all play squares
  const wrapperStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    pointerEvents: "none", // allow clicks only on squares (they will enable pointer events)
  };

  // Dice roll style
  const diceRollStyle = {
    position: "absolute",
    left: (COLS / 2) * SQUARE_SIZE - (SQUARE_SIZE / 2),
    top: SQUARE_SIZE * 3 - SQUARE_SIZE / 4
  };

  // Title style
  const titleStyle = {
    position: "absolute",
    left: (COLS / 4) * SQUARE_SIZE + SQUARE_SIZE / 2,
    top: SQUARE_SIZE * 2 - SQUARE_SIZE / 4
  };

  // Player piece style
  const getPlayerPieceStyle = () => {
    const squareId = getSquareIdFromPosition(state.currentPosition);
    if (!squareId) return { display: 'none' };

    const square = squares.find(sq => sq.id === squareId);
    if (!square) return { display: 'none' };

    return {
      position: "absolute",
      left: square.left + SQUARE_SIZE / 2 - 20,
      top: square.top + SQUARE_SIZE / 2 - 20,
      width: 40,
      height: 40,
      transition: animatingMove ? 'all 0.8s ease-in-out' : 'none',
      zIndex: 10,
      pointerEvents: 'none'
    };
  };

  // Show setup screen if game hasn't started
  if (state.gamePhase === GAME_PHASES.SETUP) {
    return <GameSetup onStart={handleGameStart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 overflow-y-auto overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Player Panel */}
          <div className="lg:col-span-1">
            <PlayerPanel />
          </div>

          {/* Game Board */}
          <div className="lg:col-span-3 overflow-x-auto">
            <div style={boardStyle}>
              <div style={wrapperStyle}>
                {squares.map((sq) => (
                  <div
                    key={sq.id}
                    style={{
                      position: "absolute",
                      left: sq.left,
                      top: sq.top,
                      width: SQUARE_SIZE,
                      height: SQUARE_SIZE,
                      pointerEvents: "auto",
                    }}
                  >
                    <GameSquare
                      imageSource={imgsByPosition[getPositionById(sq.id)]}
                      onClick={() => {}}
                    />
                  </div>
                ))}

                {/* Player Piece */}
                {state.currentPosition > 0 && (
                  <div style={getPlayerPieceStyle()}>
                    <div className="text-4xl animate-bounce">
                      🧙‍♂️
                    </div>
                  </div>
                )}
              </div>

              {/* Dice in center */}
              <div style={diceRollStyle}>
                <DiceRoller
                  onRoll={handleDiceRoll}
                  disabled={state.gamePhase !== GAME_PHASES.ROLL_DICE || animatingMove}
                />
              </div>

              {/* Title */}
              <div style={titleStyle}>
                <GameSquare
                  imageSource={titleImg}
                  onClick={() => {}}
                  alterHeight={120}
                  alterWidth={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {state.showQuestionModal && state.currentQuestion && (
        <QuestionModal
          question={state.currentQuestion}
          onAnswer={handleAnswerQuestion}
        />
      )}

      {state.showDarkArtsModal && state.currentDarkArts && (
        <DarkArtsModal
          darkArts={state.currentDarkArts}
          onApply={handleApplyDarkArts}
        />
      )}

      {state.showWinModal && (
        <WinModal
          playerName={state.playerName}
          tokens={state.tokens}
          moves={state.moveHistory.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Home;