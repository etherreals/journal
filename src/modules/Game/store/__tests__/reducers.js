import reducer from '../reducers';
import GameActionTypes from '../actions';

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isGameStarted: false,
    });
  });

  it('should handle GAME_SAGA_STARTED', () => {
    expect(reducer({}, {
      type: GameActionTypes.GAME_SAGA_STARTED,
    })).toEqual({});
  });

  it('should handle GAME_STARTED', () => {
    expect(reducer({}, {
      type: GameActionTypes.GAME_STARTED,
      payload: {
        isGameStarted: true,
      },
    })).toEqual({
      isGameStarted: true,
    });
  });

  it('should handle GAME_CANCELED', () => {
    expect(reducer({}, {
      type: GameActionTypes.GAME_CANCELED,
      payload: {
        isGameStarted: false,
      },
    })).toEqual({
      isGameStarted: false,
    });
  });
});
