// Game configuration and constants

export const SQUARE_SIZE = 114;
export const COLS = 8;
export const ROWS = 6;
export const BOARD_WIDTH = SQUARE_SIZE * COLS;
export const BOARD_HEIGHT = SQUARE_SIZE * ROWS;

// Square types
export const SQUARE_TYPES = {
  START: 'start',
  DESTINATION: 'destination',
  OWL: 'OWL',           // Easy difficulty
  NEWT: 'NEWT',         // Medium difficulty
  WOMBAT: 'WOMBAT',     // Hard difficulty
  ACCIO: 'ACCIO',       // Move forward 1
  DEPULSO: 'DEPULSO',   // Move backward 1
  LOCOMOTOR: 'LOCOMOTOR' // Skip turn
};

// Square configuration - maps position to square type
export const SQUARE_CONFIG = {
  1: { type: SQUARE_TYPES.START, name: 'Argus Filch', description: 'Ô khởi đầu trò chơi' },
  2: { type: SQUARE_TYPES.OWL, name: 'O.W.L', description: 'Câu hỏi dễ' },
  3: { type: SQUARE_TYPES.OWL, name: 'O.W.L', description: 'Câu hỏi dễ' },
  4: { type: SQUARE_TYPES.NEWT, name: 'N.E.W.T', description: 'Câu hỏi trung bình' },
  5: { type: SQUARE_TYPES.OWL, name: 'O.W.L', description: 'Câu hỏi dễ' },
  6: { type: SQUARE_TYPES.NEWT, name: 'N.E.W.T', description: 'Câu hỏi trung bình' },
  7: { type: SQUARE_TYPES.OWL, name: 'O.W.L', description: 'Câu hỏi dễ' },
  8: { type: SQUARE_TYPES.DEPULSO, name: 'Depulso', description: 'Lùi 1 ô' },
  9: { type: SQUARE_TYPES.WOMBAT, name: 'W.O.M.B.A.T', description: 'Câu hỏi khó' },
  10: { type: SQUARE_TYPES.ACCIO, name: 'Accio', description: 'Tiến 1 ô' },
  11: { type: SQUARE_TYPES.NEWT, name: 'N.E.W.T', description: 'Câu hỏi trung bình' },
  12: { type: SQUARE_TYPES.LOCOMOTOR, name: 'Locomotor Mortis', description: 'Mất lượt' },
  13: { type: SQUARE_TYPES.WOMBAT, name: 'W.O.M.B.A.T', description: 'Câu hỏi khó' },
  14: { type: SQUARE_TYPES.WOMBAT, name: 'W.O.M.B.A.T', description: 'Câu hỏi khó' },
  15: { type: SQUARE_TYPES.ACCIO, name: 'Accio', description: 'Tiến 1 ô' },
  16: { type: SQUARE_TYPES.NEWT, name: 'N.E.W.T', description: 'Câu hỏi trung bình' },
  17: { type: SQUARE_TYPES.DEPULSO, name: 'Depulso', description: 'Lùi 1 ô' },
  18: { type: SQUARE_TYPES.WOMBAT, name: 'W.O.M.B.A.T', description: 'Câu hỏi khó' },
  19: { type: SQUARE_TYPES.DESTINATION, name: 'Albus Dumbledore', description: 'Đích đến' }
};

// Dark Arts Cards (penalties)
export const DARK_ARTS_CARDS = [
  {
    id: 'everte-statum',
    name: 'Everte Statum',
    description: 'Người chơi phải lùi 2 ô',
    effect: 'MOVE_BACK_2'
  },
  {
    id: 'forbidden-forest',
    name: 'The Forbidden Forest',
    description: 'Người chơi bị mất 2 lượt liên tiếp và mất 1 token',
    effect: 'SKIP_2_TURNS_LOSE_TOKEN'
  },
  {
    id: 'azkaban',
    name: 'Azkaban',
    description: 'Quay lại điểm xuất phát, mất toàn bộ Token đang có',
    effect: 'RESET_TO_START'
  }
];

// Token rewards based on difficulty
export const TOKEN_REWARDS = {
  OWL: 1,
  NEWT: 2,
  WOMBAT: 3
};

// Game phases
export const GAME_PHASES = {
  SETUP: 'setup',           // Initial setup
  ROLL_DICE: 'roll_dice',   // Player needs to roll dice
  MOVING: 'moving',         // Player piece is moving
  QUESTION: 'question',     // Showing question modal
  DARK_ARTS: 'dark_arts',   // Dark Arts penalty
  WIN: 'win'                // Game won
};

// Lessons available
export const LESSONS = [
  { id: 2, name: 'Bài 2: Nguyên Tử', nameEn: 'Atoms' },
  { id: 3, name: 'Bài 3: Nguyên Tố Hóa Học', nameEn: 'Chemical Elements' },
  { id: 4, name: 'Bài 4: Bảng Tuần Hoàn', nameEn: 'Periodic Table' },
  { id: 5, name: 'Bài 5: Phân Tử - Đơn Chất - Hợp Chất', nameEn: 'Molecules - Elements - Compounds' },
  { id: 6, name: 'Bài 6: Liên Kết Hóa Học', nameEn: 'Chemical Bonds' },
  { id: 7, name: 'Bài 7: Hóa Trị & Công Thức Hóa Học', nameEn: 'Valence & Chemical Formulas' }
];

// Dice configuration
export const DICE_MIN = 1;
export const DICE_MAX = 6;

// Win condition
export const WIN_POSITION = 19;
export const START_POSITION = 1;
