import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import { GameSquare, SQUARE_SIZE } from "../../Components/GameSquare";
import DiceRoller from "../../Components/DiceRoller";
import QuestionModal from "../../Components/QuestionModal";
import DarkArtsModal from "../../Components/DarkArtsModal";
import WinModal from "../../Components/WinModal";

import boardBg from "../../assets/game-background.svg";
import placeholderSquare from "../../assets/fence.png";
import accioImg from "../../assets/accio.png";
import albusDumbledoreImg from "../../assets/albus-dumbledore.png";
import argusFilchImg from "../../assets/argus-filch.png";
import depulsoImg from "../../assets/depulso.png";
import locomotorMortisImg from "../../assets/locomotor-mortis.png";
import owlImg from "../../assets/owl.png";
import newtImg from "../../assets/newt.png";
import wombatImg from "../../assets/wombat.png";
import titleImg from "../../assets/title.png";
import questionMarkImg from "../../assets/question-mark.png"; // 

import {
  COLS,
  ROWS,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  GAME_PHASES,
  SQUARE_CONFIG,
  SQUARE_TYPES,
  DARK_ARTS_CARDS,
  LESSONS,
} from "../../data/gameConfig";
import { getQuestionByLessonAndSquare } from "../../data/questions";

// Store the source and positions for each type of image
const imgInfo = {
  accio: { src: accioImg, positions: [10, 15] },
  albusDumbledore: { src: albusDumbledoreImg, positions: [19] },
  argusFilch: { src: argusFilchImg, positions: [1] },
  depulso: { src: depulsoImg, positions: [8, 17] },
  locomotorMortis: { src: locomotorMortisImg, positions: [12] },
  owl: { src: owlImg, positions: [2, 3, 5, 7] },
  newtImg: { src: newtImg, positions: [4, 6, 11, 16] },
  wombatImg: { src: wombatImg, positions: [9, 13, 14, 18] },
};

const ChemistryGame = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useGame();
  const [animatingMove, setAnimatingMove] = useState(false);

  const lesson = location.state?.lesson || 2;
  const mode = location.state?.mode || "single";

  useEffect(() => {
    if (state.gamePhase === GAME_PHASES.SETUP) {
      dispatch({
        type: "START_GAME",
        payload: { lesson, mode },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgsByPosition = [];
  for (let i = 0; i < COLS * 2 + 3; ++i) {
    imgsByPosition.push(placeholderSquare);
  }

  for (const key in imgInfo) {
    const info = imgInfo[key];
    info.positions.forEach((pos) => {
      imgsByPosition[pos - 1] = info.src;
    });
  }

  const getPositionById = (id) => {
    const [side, index] = id.split("-");
    if (side === "top") {
      const c = parseInt(index, 10);
      return COLS + 2 + c;
    } else if (side === "bottom") {
      const c = parseInt(index, 10);
      return COLS - c - 1;
    } else if (side === "left") {
      const r = parseInt(index, 10);
      return COLS + (r - 1);
    } else if (side === "right") {
      return COLS * 2 + 2;
    }
    return -1;
  };

  const getSquareIdFromPosition = (position) => {
    if (position >= 1 && position <= 8) {
      return `bottom-${8 - position}`;
    }
    if (position === 9) return "left-3";
    if (position === 10) return "left-2";
    if (position >= 11 && position <= 18) {
      return `top-${position - 11}`;
    }
    if (position === 19) return "right-2";
    return null;
  };

  const squares = [];

  for (let c = 0; c < COLS; c++) {
    squares.push({
      id: `top-${c}`,
      left: c * SQUARE_SIZE,
      top: SQUARE_SIZE,
      role: "top",
    });
  }

  for (let c = 0; c < COLS; c++) {
    const isStart = c === COLS - 1;
    squares.push({
      id: `bottom-${c}`,
      left: c * SQUARE_SIZE,
      top: (ROWS - 2) * SQUARE_SIZE,
      role: isStart ? "start" : "bottom",
    });
  }

  for (let r = 2; r <= 3; r++) {
    squares.push({
      id: `left-${r}`,
      left: 0,
      top: r * SQUARE_SIZE,
      role: "left",
    });
  }

  const rightRow = 2;
  squares.push({
    id: `right-${rightRow}`,
    left: (COLS - 1) * SQUARE_SIZE,
    top: rightRow * SQUARE_SIZE,
    role: "destination",
  });

  const handleDiceRoll = (value) => {
    if (state.turnsToSkip > 0) {
      dispatch({
        type: "SET_MESSAGE",
        payload: `🚫 Bạn bị mất lượt! Còn ${state.turnsToSkip - 1} lượt nữa.`,
      });
      dispatch({ type: "SKIP_QUESTION" });
      return;
    }

    dispatch({ type: "ROLL_DICE", payload: value });

    setTimeout(() => {
      movePlayer(value);
    }, 500);
  };

  const movePlayer = (steps, isFromForcedMove = false) => {
    setAnimatingMove(true);
    let newPosition = state.currentPosition + steps;

    if (newPosition > 19) newPosition = 19;
    if (newPosition < 1) newPosition = 1;

    dispatch({ type: "MOVE_TO_POSITION", payload: newPosition });

    setTimeout(() => {
      setAnimatingMove(false);
      handleSquareEffect(newPosition, isFromForcedMove);
    }, 800);
  };

  const handleSquareEffect = (position, isFromForcedMove = false) => {
    const squareConfig = SQUARE_CONFIG[position];

    if (
      [SQUARE_TYPES.OWL, SQUARE_TYPES.NEWT, SQUARE_TYPES.WOMBAT].includes(
        squareConfig.type
      )
    ) {
      const question = getQuestionByLessonAndSquare(
        state.selectedLesson,
        position
      );

      if (question) {
        dispatch({ type: "SET_CURRENT_QUESTION", payload: question });
        dispatch({ type: "HANDLE_SQUARE_EFFECT", payload: { position } });
      } else {
        dispatch({
          type: "SET_MESSAGE",
          payload: "Không có câu hỏi cho ô này.",
        });
        dispatch({ type: "HANDLE_SQUARE_EFFECT", payload: { position } });
      }
    } else if (squareConfig.type === SQUARE_TYPES.ACCIO && !isFromForcedMove) {
      dispatch({ type: "HANDLE_SQUARE_EFFECT", payload: { position } });
      setTimeout(() => {
        const newPos = Math.min(19, position + 1);
        dispatch({ type: "MOVE_TO_POSITION", payload: newPos });
        setTimeout(() => {
          handleSquareEffect(newPos, true);
        }, 800);
      }, 1000);
    } else if (
      squareConfig.type === SQUARE_TYPES.DEPULSO &&
      !isFromForcedMove
    ) {
      dispatch({ type: "HANDLE_SQUARE_EFFECT", payload: { position } });
      setTimeout(() => {
        const newPos = Math.max(1, position - 1);
        dispatch({ type: "MOVE_TO_POSITION", payload: newPos });
        setTimeout(() => {
          handleSquareEffect(newPos, true);
        }, 800);
      }, 1000);
    } else if (squareConfig.type === SQUARE_TYPES.LOCOMOTOR) {
      dispatch({ type: "HANDLE_SQUARE_EFFECT", payload: { position } });
    } else {
      dispatch({ type: "HANDLE_SQUARE_EFFECT", payload: { position } });
    }
  };

  const handleAnswerQuestion = (isCorrect, difficulty) => {
    dispatch({
      type: "ANSWER_QUESTION",
      payload: { isCorrect, difficulty },
    });

    if (!isCorrect) {
      const randomIndex = Math.floor(Math.random() * 3);
      const selectedCard = DARK_ARTS_CARDS[randomIndex];

      setTimeout(() => {
        dispatch({ type: "TRIGGER_DARK_ARTS", payload: selectedCard });
      }, 500);
    }
  };

  const handleApplyDarkArts = () => {
    const darkArts = state.currentDarkArts;
    dispatch({ type: "APPLY_DARK_ARTS" });

    setTimeout(() => {
      const effect = darkArts.effect;
      if (effect === "MOVE_BACK_2" || effect === "RESET_TO_START") {
        let newPos = state.currentPosition;
        if (effect === "MOVE_BACK_2") newPos = Math.max(1, newPos - 2);
        else if (effect === "RESET_TO_START") newPos = 1;

        handleSquareEffect(newPos, false);
      }
    }, 100);
  };

  const handleRestart = () => {
    dispatch({ type: "RESET_GAME" });
    navigate("/");
  };

  const boardStyle = {
    position: "relative",
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    backgroundImage: `url(${boardBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
    boxSizing: "content-box",
  };

  const wrapperStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    pointerEvents: "none",
  };

  const diceRollStyle = {
    position: "absolute",
    left: (COLS / 2) * SQUARE_SIZE - SQUARE_SIZE / 2,
    top: SQUARE_SIZE * 3 - SQUARE_SIZE / 4,
  };

  const titleStyle = {
    position: "absolute",
    left: (COLS / 4) * SQUARE_SIZE + SQUARE_SIZE / 2,
    top: SQUARE_SIZE * 2 - SQUARE_SIZE / 4,
  };

  const getPlayerPieceStyle = () => {
    const squareId = getSquareIdFromPosition(state.currentPosition);
    if (!squareId) return { display: "none" };

    const square = squares.find((sq) => sq.id === squareId);
    if (!square) return { display: "none" };

    return {
      position: "absolute",
      left: square.left + SQUARE_SIZE / 2 - 20,
      top: square.top + SQUARE_SIZE / 2 - 20,
      width: 40,
      height: 40,
      transition: animatingMove ? "all 0.8s ease-in-out" : "none",
      zIndex: 10,
      pointerEvents: "none",
    };
  };

  const lessonObj =
    LESSONS.find((l) => l.id === state.selectedLesson) || {
      name: `Bài ${state.selectedLesson}`,
    };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10">
      <div
        className="relative"
        style={{ width: BOARD_WIDTH, height: BOARD_HEIGHT }}
      >
        <div style={boardStyle} className="rounded-xl overflow-hidden shadow-2xl">
          {/* Top-left: class / lesson */}
          <div
            className="absolute top-4 left-4 px-8 py-3 rounded-full text-white text-xl font-bold shadow-md"
            style={{
              backgroundColor: "#5b21b6",
              fontFamily: "Montserrat Bold, sans-serif",
            }}
          >
            LỚP {location.state?.class || 7} - {lessonObj.name.toUpperCase()}
          </div>

          {/* Top-right: score + settings */}
          <div className="absolute top-4 right-4 flex items-center gap-4">
            <div
              className="rounded-full px-10 py-3 text-xl font-bold shadow-md flex items-center"
              style={{
                backgroundColor: "#fde047",
                fontFamily: "Montserrat Bold, sans-serif",
              }}
            >
              <span className="mr-2">SỐ ĐIỂM:</span>
              <span>{state.tokens}</span>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-3xl hover:scale-110 transition-transform"
              title="Cài đặt"
            >
              ⚙️
            </button>
          </div>

          {/* Squares + player */}
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

            {state.currentPosition > 0 && (
              <div style={getPlayerPieceStyle()}>
                <div className="text-5xl animate-bounce">🧙‍♂️</div>
              </div>
            )}
          </div>

          {/* Center dice */}
          <div style={diceRollStyle}>
            <DiceRoller
              onRoll={handleDiceRoll}
              disabled={
                state.gamePhase !== GAME_PHASES.ROLL_DICE || animatingMove
              }
            />
          </div>

          {/* Center title */}
          <div style={titleStyle}>
            <GameSquare
              imageSource={titleImg}
              onClick={() => {}}
              alterHeight={120}
              alterWidth={400}
            />
          </div>

          {/* Bottom-left button */}
          <div className="absolute bottom-4 left-4 flex flex-col items-start gap-2">
            <div className="text-red-600 text-4xl font-bold tracking-wider">
              &lt;&lt;&lt;&lt;&lt;
            </div>
            <button
              onClick={handleRestart}
              className="bg-red-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow hover:scale-105 transition-transform"
              style={{ fontFamily: "Montserrat Bold, sans-serif" }}
            >
              THOÁT KHỎI GAME
            </button>
          </div>

          {/* Bottom-right button */}
          <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2">
            <div className="text-gray-400 text-4xl font-bold tracking-wider">
              &gt;&gt;&gt;&gt;&gt;
            </div>
            <button
              disabled
              className="bg-gray-400 text-white font-bold px-8 py-3 rounded-full text-lg shadow cursor-not-allowed"
              style={{ fontFamily: "Montserrat Bold, sans-serif" }}
            >
              BÀI TIẾP THEO
            </button>
          </div>

          {/* Bottom-center question mark  <<< */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <button
              onClick={() => {
                // TODO: implement instructions modal here
              }}
              className="hover:scale-105 transition-transform"
            >
              <img
                src={questionMarkImg}
                alt="Hướng dẫn"
                className="w-12 h-12 object-contain"
              />
            </button>
          </div>
        </div>
      </div>

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
          tokens={state.tokens}
          moves={state.moveHistory.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default ChemistryGame;
