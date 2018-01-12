import { fork } from 'redux-saga/effects';
import authSaga from './modules/Auth/store/sagas';
import cardsSaga from './modules/Cards/store/sagas';

function* rootSaga() {
  yield fork(authSaga);
  yield fork(cardsSaga);
}

export default rootSaga;
