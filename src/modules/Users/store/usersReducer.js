import UsersActionTypes from './userActionTypes';

const initialState = {
  isLoading: false,
  users: [],
  error: null,
  orderBy: '',
  order: '',
  gradeFilter: '',
  fullNameFilter: '',
  genderFilter: '',
};

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

const handleFilterUsersByGrade = (state, action) => ({
  ...state,
  gradeFilter: action.payload.gradeFilter,
});

const handleFilterUsersByFullName = (state, action) => ({
  ...state,
  fullNameFilter: action.payload.fullNameFilter,
});

const handleFilterUsersByGender = (state, action) => ({
  ...state,
  genderFilter: action.payload.genderFilter,
});

const handlers = {
  [UsersActionTypes.GET_ALL_USERS_REQUEST]: handleGetAllUsersRequest,
  [UsersActionTypes.GET_ALL_USERS_SUCCESS]: handleGetAllUsersSuccess,
  [UsersActionTypes.GET_ALL_USERS_FAILURE]: handleGetAllUsersFailure,
  [UsersActionTypes.SORT_USERS]: handleSortUsers,
  [UsersActionTypes.FILTER_USERS_BY_GRADE]: handleFilterUsersByGrade,
  [UsersActionTypes.FILTER_USERS_BY_FULL_NAME]: handleFilterUsersByFullName,
  [UsersActionTypes.FILTER_USERS_BY_GENDER]: handleFilterUsersByGender,
};

function authReducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
