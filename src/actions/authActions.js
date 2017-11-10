import { push } from 'react-router-redux';
import { AuthActionTypes } from './types';

export function login() {
  return ((dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_REQUEST,
      payload: {
        isLoading: false,
        isLoggedIn: true,
      },
    });
    dispatch(push('/'));
  });
}

export function logout() {
  console.log('logout');
}
