import { push } from 'react-router-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import AuthActionTypes from './authActionTypes';
import * as AuthenticationService from '../../../services/AuthenticationService';

const loginSuccess = user => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: {
    isLoading: false,
    isLoggedIn: true,
    user,
  },
});

const loginFailure = error => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: {
    isLoading: false,
    isLoggedIn: false,
  },
  error,
});

const logoutSuccess = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
  payload: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
  },
});

function* logout() {
  try {
    yield AuthenticationService.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutSuccess());
    throw new Error(error);
  }
}

function* loginWithGoogle() {
  try {
    const userData = yield call(AuthenticationService.signInWithGoogle);
    yield put(loginSuccess(userData));
    yield put(push('/'));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* loginWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const userData = yield AuthenticationService.signInWithEmailAndPassword(email, password);
    yield put(loginSuccess(userData));
    yield put(push('/'));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* authFlow() {
  yield takeEvery(AuthActionTypes.GOOGLE_LOGIN_REQUEST, loginWithGoogle);
  yield takeEvery(AuthActionTypes.EMAIL_AND_PASSWORD_LOGIN_REQUEST, loginWithEmailAndPassword);
  yield takeEvery(AuthActionTypes.LOGOUT_REQUEST, logout);
}

export default function* authFlowStart() {
  yield takeEvery(AuthActionTypes.AUTH_FLOW_START, authFlow);
}
