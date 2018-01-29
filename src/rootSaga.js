import { all } from 'redux-saga/effects';
import watchAuth from './modules/Auth/store/sagas';
import watchCards from './modules/Cards/store/sagas';
import watchGame from './modules/Game/store/sagas';

function* rootSaga() {
  yield all([
    watchAuth(),
    watchCards(),
    watchGame(),
  ]);
}

export default rootSaga;
