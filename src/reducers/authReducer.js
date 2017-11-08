import {
  AuthActionTypes,
} from '../actions/types';

const initialState = {};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isLoggedIn: action.payload.isLoggedIn,
        error: action.error,
      };
    default:
      return state;
  }
}

export default authReducer;
