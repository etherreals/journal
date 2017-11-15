import { push } from 'react-router-redux';
import { AuthActionTypes } from './types';
import * as AuthentificationService from '../services/AuthentificationService';

const requestLogin = () => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: {
    isLoading: true,
    isLoggedIn: false,
  },
});

const receiveLoginSuccess = user => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: {
    isLoading: false,
    isLoggedIn: true,
    user,
  },
});

const receiveLoginFailure = error => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: {
    isLoading: false,
    isLoggedIn: false,
  },
  error,
});

const requestLogout = () => ({
  type: AuthActionTypes.LOGOUT_REQUEST,
  payload: {
    isLoading: true,
    isLoggedIn: false,
    user: null,
  },
});

const receiveLogoutSuccess = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
  payload: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
  },
});

const receiveLogoutError = error => ({
  type: AuthActionTypes.LOGOUT_FAILURE,
  payload: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
  },
  error,
});

export function signInWithEmailAndPassword({ email, password }) {
  return (async (dispatch) => {
    dispatch(requestLogin());
    try {
      const userData = await AuthentificationService.signInWithEmailAndPassword(email, password);
      dispatch(receiveLoginSuccess(userData));
      dispatch(push('/'));
    } catch (error) {
      dispatch(receiveLoginFailure(error));
    }
  });
}

export function signInWithGoogle() {
  return (async (dispatch) => {
    dispatch(requestLogin());
    try {
      const userData = await AuthentificationService.signInWithGoogle();
      dispatch(receiveLoginSuccess(userData));
      dispatch(push('/'));
    } catch (error) {
      dispatch(receiveLoginFailure(error));
    }
  });
}

export function logout() {
  return (async (dispatch) => {
    dispatch(requestLogout());
    try {
      await AuthentificationService.signOut();
      dispatch(receiveLogoutSuccess());
      dispatch(push('/login'));
    } catch (error) {
      dispatch(receiveLogoutError(error));
    }
  });
}
