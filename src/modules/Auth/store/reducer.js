import AuthActionsTypes from './actions';

const handleLoginRequestActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
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

const handleLogoutSuccessActionCreator = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  isLoggedIn: action.payload.isLoggedIn,
  user: action.payload.user,
  error: null,
});


const handlers = {
  [AuthActionsTypes.LOGIN_REQUEST]: handleLoginRequestActionCreator,
  [AuthActionsTypes.LOGIN_SUCCESS]: handleLoginSuccessActionCreator,
  [AuthActionsTypes.LOGIN_FAILURE]: handleLoginFailureActionCreator,
  [AuthActionsTypes.LOGOUT_SUCCESS]: handleLogoutSuccessActionCreator,
};

function authReducer(state = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
