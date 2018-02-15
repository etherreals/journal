import GameActionTypes, { startGame, startGameSaga, cancelGame } from '../actions';

describe('actions', () => {
  it('should create an action to start game', () => {
    const expectedAction = {
      type: GameActionTypes.GAME_STARTED,
      payload: {
        isGameStarted: true,
      },
    };
    expect(startGame()).toEqual(expectedAction);
  });

  it('should create an action to cancel game', () => {
    const expectedAction = {
      type: GameActionTypes.GAME_CANCELED,
      payload: {
        isGameStarted: false,
      },
    };
    expect(cancelGame()).toEqual(expectedAction);
  });

  it('should create an action to start game saga', () => {
    const expectedAction = {
      type: GameActionTypes.GAME_SAGA_STARTED,
    };
    expect(startGameSaga()).toEqual(expectedAction);
  });
});

