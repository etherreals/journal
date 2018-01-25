import { fork } from 'redux-saga/effects';
import authSaga from './modules/Auth/store/sagas';
import cardsSaga from './modules/Cards/store/sagas';
import gameSaga from './modules/Game/store/sagas';

function* rootSaga() {
  yield fork(authSaga);
  yield fork(cardsSaga);
  yield fork(gameSaga);
}

export default rootSaga;
