import GameActionTypes from './actions';

const initialState = {
  isGameStarted: false,
};

const handleGameStarted = (state, action) => ({
  ...state,
  isGameStarted: action.payload.isGameStarted,
});

const handleGameCanceled = (state, action) => ({
  ...state,
  isGameStarted: action.payload.isGameStarted,
});

const handlers = {
  [GameActionTypes.GAME_STARTED]: handleGameStarted,
  [GameActionTypes.GAME_CANCELED]: handleGameCanceled,
};

function gameReducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default gameReducer;
