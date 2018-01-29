import { push } from 'react-router-redux';
import { put, takeEvery, call } from 'redux-saga/effects';
import GameActionsTypes, { startGame } from './actions';


function* cancelGameFlow() {
  yield put(push('/cards'));
}

function* startGameFlow() {
  yield put(startGame());
  yield put(push('/game'));
}

function* gameFlow() {
  yield call(startGameFlow);
  yield takeEvery(GameActionsTypes.GAME_CANCELED, cancelGameFlow);
}

export default function* watchGame() {
  yield takeEvery(GameActionsTypes.GAME_SAGA_STARTED, gameFlow);
}
