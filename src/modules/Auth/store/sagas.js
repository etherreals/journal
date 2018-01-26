import { push } from 'react-router-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as AuthenticationService from '../../../services/AuthenticationService';
import AuthActionsTypes, { loginSuccess, loginFailure, logoutSuccess } from './actions';


function* logout() {
  try {
    yield AuthenticationService.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutSuccess());
    throw new Error(error);
  }
}

function* saveUser(userData) {
  const isUserExistsInDb = yield call(AuthenticationService.checkIfUserExistInDb, userData.uid);
  if (!isUserExistsInDb) {
    const user = {
      id: userData.uid,
      email: userData.email,
    };
    AuthenticationService.saveUserToDb(user);
  }
  yield put(loginSuccess(userData));
  yield put(push('/cards'));
}

function* loginWithGoogle() {
  try {
    const userData = yield call(AuthenticationService.signInWithGoogle);
    yield call(saveUser, userData.user);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* loginWithEmailAndPassword(action) {
  const { email, password } = action.payload.credentials;
  try {
    const userData = yield call(AuthenticationService.signInWithEmailAndPassword, email, password);
    yield call(saveUser, userData);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* authFlow() {
  yield takeEvery(AuthActionsTypes.GOOGLE_LOGIN_REQUEST, loginWithGoogle);
  yield takeEvery(AuthActionsTypes.EMAIL_AND_PASSWORD_LOGIN_REQUEST, loginWithEmailAndPassword);
  yield takeEvery(AuthActionsTypes.LOGOUT_REQUEST, logout);
}

export default function* authFlowStart() {
  yield takeEvery(AuthActionsTypes.AUTH_FLOW_START, authFlow);
}
