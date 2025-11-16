import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { 
  GAME_PHASES, 
  START_POSITION, 
  WIN_POSITION,
  SQUARE_CONFIG,
  SQUARE_TYPES,
  TOKEN_REWARDS,
  DARK_ARTS_CARDS 
} from '../data/gameConfig';

const GameContext = createContext();

const initialState = {
  // Game settings
  selectedLesson: 2, // Default to lesson 2
  gameMode: 'single', // 'single' or 'group'
  
  // Game state
  gamePhase: GAME_PHASES.SETUP,
  currentPosition: START_POSITION,
  tokens: 0,
  diceValue: null,
  
  // Turn management
  turnsToSkip: 0,
  answeredQuestions: [], // Track answered question squares
  
  // Current question
  currentQuestion: null,
  
  // Dark Arts
  currentDarkArts: null,
  
  // History
  moveHistory: [],
  
  // UI state
  showQuestionModal: false,
  showDarkArtsModal: false,
  showWinModal: false,
  message: ''
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        selectedLesson: action.payload.lesson,
        gameMode: action.payload.mode || 'single',
        gamePhase: GAME_PHASES.ROLL_DICE,
        currentPosition: START_POSITION,
        tokens: 0,
        answeredQuestions: [],
        moveHistory: [],
        message: 'Hãy tung xúc xắc để bắt đầu!'
      };
      
    case 'ROLL_DICE':
      return {
        ...state,
        diceValue: action.payload,
        gamePhase: GAME_PHASES.MOVING,
        message: `Bạn tung được ${action.payload}!`
      };
      
    case 'MOVE_TO_POSITION':
      const newPosition = action.payload;
      const squareConfig = SQUARE_CONFIG[newPosition];
      
      return {
        ...state,
        currentPosition: newPosition,
        moveHistory: [...state.moveHistory, { from: state.currentPosition, to: newPosition, dice: state.diceValue }]
      };
      
    case 'HANDLE_SQUARE_EFFECT':
      const { position } = action.payload;
      const square = SQUARE_CONFIG[position];
      
      // Check if reached destination
      if (position === WIN_POSITION) {
        return {
          ...state,
          gamePhase: GAME_PHASES.WIN,
          showWinModal: true,
          message: '🎉 Chúc mừng! Bạn đã hoàn thành trò chơi!'
        };
      }
      
      // Handle different square types
      switch (square.type) {
        case SQUARE_TYPES.OWL:
        case SQUARE_TYPES.NEWT:
        case SQUARE_TYPES.WOMBAT:
          return {
            ...state,
            gamePhase: GAME_PHASES.QUESTION,
            showQuestionModal: true,
            message: `Trả lời câu hỏi ${square.name}!`
          };
          
        case SQUARE_TYPES.ACCIO:
          return {
            ...state,
            gamePhase: GAME_PHASES.ROLL_DICE,
            message: '✨ Accio! Bạn tiến thêm 1 ô!'
          };
          
        case SQUARE_TYPES.DEPULSO:
          return {
            ...state,
            gamePhase: GAME_PHASES.ROLL_DICE,
            message: '⚡ Depulso! Bạn lùi 1 ô!'
          };
          
        case SQUARE_TYPES.LOCOMOTOR:
          return {
            ...state,
            turnsToSkip: 1,
            gamePhase: GAME_PHASES.ROLL_DICE,
            message: '🚫 Locomotor Mortis! Bạn mất lượt tiếp theo!'
          };
          
        default:
          return {
            ...state,
            gamePhase: GAME_PHASES.ROLL_DICE,
            message: 'Tung xúc xắc để tiếp tục!'
          };
      }
      
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload
      };
      
    case 'ANSWER_QUESTION':
      const { isCorrect, difficulty } = action.payload;
      const tokensEarned = isCorrect ? TOKEN_REWARDS[difficulty] : 0;
      
      return {
        ...state,
        tokens: state.tokens + tokensEarned,
        answeredQuestions: [...state.answeredQuestions, state.currentPosition],
        showQuestionModal: false,
        currentQuestion: null,
        gamePhase: GAME_PHASES.ROLL_DICE,
        message: isCorrect 
          ? `✅ Đúng rồi! +${tokensEarned} token!` 
          : '❌ Sai rồi! Cố gắng lần sau nhé!'
      };
      
    case 'SKIP_QUESTION':
      return {
        ...state,
        showQuestionModal: false,
        currentQuestion: null,
        turnsToSkip: state.turnsToSkip - 1,
        gamePhase: GAME_PHASES.ROLL_DICE,
        message: 'Bạn đã bị Locomotor Mortis! Mất lượt này!'
      };
      
    case 'TRIGGER_DARK_ARTS':
      return {
        ...state,
        currentDarkArts: action.payload,
        gamePhase: GAME_PHASES.DARK_ARTS,
        showDarkArtsModal: true
      };
      
    case 'APPLY_DARK_ARTS':
      const darkArts = state.currentDarkArts;
      let updates = {
        showDarkArtsModal: false,
        currentDarkArts: null,
        gamePhase: GAME_PHASES.ROLL_DICE
      };
      
      switch (darkArts.effect) {
        case 'MOVE_BACK_2':
          updates.currentPosition = Math.max(START_POSITION, state.currentPosition - 2);
          updates.message = `${darkArts.name}! Bạn lùi 2 ô!`;
          break;
          
        case 'SKIP_2_TURNS_LOSE_TOKEN':
          updates.turnsToSkip = 2;
          updates.tokens = Math.max(0, state.tokens - 1);
          updates.message = `${darkArts.name}! Mất 2 lượt và 1 token!`;
          break;
          
        case 'RESET_TO_START':
          updates.currentPosition = START_POSITION;
          updates.tokens = 0;
          updates.message = `${darkArts.name}! Quay về điểm xuất phát!`;
          break;
      }
      
      return { ...state, ...updates };
      
    case 'CLOSE_MODAL':
      return {
        ...state,
        showQuestionModal: false,
        showDarkArtsModal: false,
        showWinModal: false,
        currentQuestion: null,
        currentDarkArts: null
      };
      
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.payload
      };
      
    case 'RESET_GAME':
      return initialState;
      
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};
