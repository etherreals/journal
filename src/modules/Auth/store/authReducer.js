import AuthActionTypes from './authActionTypes';

const handleLoginRequestActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLoginSuccessActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLoginFailureActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: action.error,
});

const handleLogoutRequestActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLogoutSuccessActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: null,
});

const handleLogoutFailureActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  error: action.error,
});

const handlers = {
  [AuthActionTypes.LOGIN_REQUEST]: handleLoginRequestActionCreator,
  [AuthActionTypes.LOGIN_SUCCESS]: handleLoginSuccessActionCreator,
  [AuthActionTypes.LOGIN_FAILURE]: handleLoginFailureActionCreator,
  [AuthActionTypes.LOGOUT_REQUEST]: handleLogoutRequestActionCreator,
  [AuthActionTypes.LOGOUT_SUCCESS]: handleLogoutSuccessActionCreator,
  [AuthActionTypes.LOGOUT_FAILURE]: handleLogoutFailureActionCreator,
};

function authReducer(state = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
