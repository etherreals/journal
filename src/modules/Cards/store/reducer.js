import CardsActionTypes from './types';

const initialState = {
  isLoading: false,
  cards: [],
  error: null,
  orderBy: '',
  order: '',
};

const handleGetAllCardsRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
});

const handleGetAllCardsSuccess = (state, action) => ({
  ...state,
  cards: action.payload.cards,
  isLoading: action.payload.isLoading,
});

const handleGetAllCardsFailure = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  error: action.error,
});

const handleSortCards = (state, action) => ({
  ...state,
  orderBy: action.payload.orderingField,
  order: action.payload.order,
});

const handlers = {
  [CardsActionTypes.GET_ALL_CARDS_REQUEST]: handleGetAllCardsRequest,
  [CardsActionTypes.GET_ALL_CARDS_SUCCESS]: handleGetAllCardsSuccess,
  [CardsActionTypes.GET_ALL_CARDS_FAILURE]: handleGetAllCardsFailure,
  [CardsActionTypes.SORT_CARDS]: handleSortCards,
};

function authReducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default authReducer;
