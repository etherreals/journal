import AuthActionsTypes from './actions';

const handleGoogleLoginRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  error: null,
});

const handleLoginRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
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

const handleLogoutSuccess = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  user: action.payload.user,
  error: null,
});

const handleEmailAndPasswordLoginRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
});


const handlers = {
  [AuthActionsTypes.GOOGLE_LOGIN_REQUEST]: handleGoogleLoginRequest,
  [AuthActionsTypes.EMAIL_AND_PASSWORD_LOGIN_REQUEST]: handleEmailAndPasswordLoginRequest,
  [AuthActionsTypes.LOGIN_REQUEST]: handleLoginRequest,
  [AuthActionsTypes.LOGIN_SUCCESS]: handleLoginSuccess,
  [AuthActionsTypes.LOGIN_FAILURE]: handleLoginFailure,
  [AuthActionsTypes.LOGOUT_SUCCESS]: handleLogoutSuccess,
};

function authReducer(state = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
