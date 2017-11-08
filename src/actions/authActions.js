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
  });
}

export function logout() {
  console.log('logout');
}
