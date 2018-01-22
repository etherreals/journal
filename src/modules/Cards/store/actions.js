const CardsActionTypes = {
  GET_ALL_CARDS_REQUEST: 'GET_ALL_CARDS_REQUEST',
  ALL_CARDS_UPDATED_SUCCESS: 'ALL_CARDS_UPDATED_SUCCESS',
  ALL_CARDS_UPDATED_FAILURE: 'ALL_CARDS_UPDATED_FAILURE',
  SORT_CARDS: 'SORT_CARDS',
  ADD_CARD_REQUEST: 'ADD_CARD_REQUEST',
  ADD_CARD_SUCCESS: 'ADD_CARD_SUCCESS',
  ADD_CARD_FAILURE: 'ADD_CARD_FAILURE',
  TOGGLE_ADD_CARD_MODAL: 'TOGGLE_ADD_CARD_MODAL',
};

export const getAllCardsRequest = () => ({
  type: CardsActionTypes.GET_ALL_CARDS_REQUEST,
  payload: {
    isLoading: true,
  },
});

export const allCardsUpdatedSuccess = cards => ({
  type: CardsActionTypes.ALL_CARDS_UPDATED_SUCCESS,
  payload: {
    cards,
    isLoading: false,
  },
});

export const sortCards = (orderingField, order) => ({
  type: CardsActionTypes.SORT_CARDS,
  payload: {
    orderingField,
    order,
  },
});

export const addCardRequest = card => ({
  type: CardsActionTypes.ADD_CARD_REQUEST,
  payload: {
    card,
  },
});

export const addCardSuccess = () => ({
  type: CardsActionTypes.ADD_CARD_SUCCESS,
});

export const addCardFailure = error => ({
  type: CardsActionTypes.ADD_CARD_FAILURE,
  payload: {
    error,
  },
});

export const openAddCardModal = () => ({
  type: CardsActionTypes.TOGGLE_ADD_CARD_MODAL,
  payload: {
    isAddCardModalShown: true,
  },
});

export const closeAddCardModal = () => ({
  type: CardsActionTypes.TOGGLE_ADD_CARD_MODAL,
  payload: {
    isAddCardModalShown: false,
  },
});

export default CardsActionTypes;
