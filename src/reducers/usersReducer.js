import {
  UsersActionTypes,
} from '../actions/types';

const handleGetAllUsers = (state, action) => ({
  ...state,
  users: action.payload.users,
});

const handlers = {
  [UsersActionTypes.GET_ALL_USERS]: handleGetAllUsers,
};

function authReducer(state = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
