const GameActionTypes = {
  GAME_STARTED: 'GAME_STARTED',
  GAME_CANCELED: 'GAME_CANCELED',
};

export const startGame = () => ({
  type: GameActionTypes.GAME_STARTED,
  payload: {
    isGameStarted: true,
  },
});

export const cancelGame = () => ({
  type: GameActionTypes.GAME_CANCELED,
  payload: {
    isGameStarted: false,
  },
});

export default GameActionTypes;
