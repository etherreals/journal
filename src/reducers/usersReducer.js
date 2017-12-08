import {
  UsersActionTypes,
} from '../actions/types';

const handleGetAllUsersRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
});

const handleGetAllUsersSuccess = (state, action) => ({
  ...state,
  users: action.payload.users,
  isLoading: action.payload.isLoading,
});

const handleGetAllUsersFailure = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  error: action.error,
});

const handleSortUsers = (state, action) => ({
  ...state,
  users: action.payload.users,
  orderBy: action.payload.orderingField,
  order: action.payload.order,
  isLoading: action.payload.isLoading,
});

const handlers = {
  [UsersActionTypes.GET_ALL_USERS_REQUEST]: handleGetAllUsersRequest,
  [UsersActionTypes.GET_ALL_USERS_SUCCESS]: handleGetAllUsersSuccess,
  [UsersActionTypes.GET_ALL_USERS_FAILURE]: handleGetAllUsersFailure,
  [UsersActionTypes.SORT_USERS]: handleSortUsers,
};

function authReducer(state = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
