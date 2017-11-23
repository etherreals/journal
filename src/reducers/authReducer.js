import {
  AuthActionTypes,
} from '../actions/types';

const handleLoginRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLoginSuccess = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLoginFailure = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: action.error,
});

const handleLogoutRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLogoutSuccess = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLogoutFailure = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: action.error,
});

const handlers = {
  [AuthActionTypes.LOGIN_REQUEST]: handleLoginRequest,
  [AuthActionTypes.LOGIN_SUCCESS]: handleLoginSuccess,
  [AuthActionTypes.LOGIN_FAILURE]: handleLoginFailure,
  [AuthActionTypes.LOGOUT_REQUEST]: handleLogoutRequest,
  [AuthActionTypes.LOGOUT_SUCCESS]: handleLogoutSuccess,
  [AuthActionTypes.LOGOUT_FAILURE]: handleLogoutFailure,
};

function authReducer(state = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
