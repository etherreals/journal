import CardsActionTypes from './actions';

const initialState = {
  isLoading: false,
  cards: [],
  error: null,
  orderBy: '',
  order: '',
  isAddCardModalShown: false,
};

const handleGetAllCardsRequest = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
});

const handleAllCardsUpdatedSuccess = (state, action) => ({
  ...state,
  cards: action.payload.cards,
  isLoading: action.payload.isLoading,
});

const handleAllUpdatedFailure = (state, action) => ({
  ...state,
  isLoading: action.payload.isLoading,
  error: action.error,
});

const handleSortCards = (state, action) => ({
  ...state,
  orderBy: action.payload.orderingField,
  order: action.payload.order,
});

const handleToggleAddCardModal = (state, action) => ({
  ...state,
  isAddCardModalShown: action.payload.isAddCardModalShown,
});

const handlers = {
  [CardsActionTypes.GET_ALL_CARDS_REQUEST]: handleGetAllCardsRequest,
  [CardsActionTypes.ALL_CARDS_UPDATED_SUCCESS]: handleAllCardsUpdatedSuccess,
  [CardsActionTypes.ALL_CARDS_UPDATED_FAILURE]: handleAllUpdatedFailure,
  [CardsActionTypes.SORT_CARDS]: handleSortCards,
  [CardsActionTypes.TOGGLE_ADD_CARD_MODAL]: handleToggleAddCardModal,
};

function cardsReducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default cardsReducer;
