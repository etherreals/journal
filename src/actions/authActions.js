import { push } from 'react-router-redux';
import { AuthActionTypes } from './types';
import firebase from '../store/firebase';

export function login({ email, password }) {
  return ((dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_REQUEST,
      payload: {
        isLoading: true,
        isLoggedIn: false,
      },
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            isLoading: false,
            isLoggedIn: true,
          },
        });
        dispatch(push('/'));
      })
      .catch((error) => {
        dispatch({
          type: AuthActionTypes.LOGIN_FAILURE,
          payload: {
            isLoading: false,
            isLoggedIn: false,
          },
          error,
        });
      });
  });
}


export function logout() {
  return ((dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGOUT_REQUEST,
      payload: {
        isLoading: true,
      },
    });
    firebase.auth().signOut()
      .then((data) => {
        console.log(data);
        dispatch({
          type: AuthActionTypes.LOGOUT_SUCCESS,
          payload: {
            isLoading: false,
            isLoggedIn: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: AuthActionTypes.LOGOUT_FAILURE,
          payload: {
            isLoading: false,
            isLoggedIn: false,
          },
        });
        dispatch(push('/login'));
      });
  });
}
