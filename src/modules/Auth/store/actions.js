const AuthActionsTypes = {
  AUTH_FLOW_START: 'AUTH_FLOW_START',
  GOOGLE_LOGIN_REQUEST: 'GOOGLE_LOGIN_REQUEST',
  EMAIL_AND_PASSWORD_LOGIN_REQUEST: 'EMAIL_AND_PASSWORD_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

export const googleLoginRequest = () => ({
  type: AuthActionsTypes.GOOGLE_LOGIN_REQUEST,
  payload: {
    isLoading: true,
  },
});

export const emailAndPasswordLoginRequest = () => ({
  type: AuthActionsTypes.EMAIL_AND_PASSWORD_LOGIN_REQUEST,
  payload: {
    isLoading: true,
  },
});

export const loginSuccess = user => ({
  type: AuthActionsTypes.LOGIN_SUCCESS,
  payload: {
    isLoading: false,
    isLoggedIn: true,
    user,
  },
});

export const loginFailure = error => ({
  type: AuthActionsTypes.LOGIN_FAILURE,
  payload: {
    isLoading: false,
    isLoggedIn: false,
  },
  error,
});

export const logoutRequest = () => ({
  type: AuthActionsTypes.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: AuthActionsTypes.LOGOUT_SUCCESS,
  payload: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
  },
});

export const loginWithEmailAndPasswordRequest = credentials => ({
  type: AuthActionsTypes.EMAIL_AND_PASSWORD_LOGIN_REQUEST,
  payload: {
    isLoading: true,
    credentials,
  },
});

export default AuthActionsTypes;

