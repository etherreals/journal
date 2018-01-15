const CardsActionTypes = {
  GET_ALL_CARDS_REQUEST: 'GET_ALL_CARDS_REQUEST',
  GET_ALL_CARDS_SUCCESS: 'GET_ALL_CARDS_SUCCESS',
  GET_ALL_CARDS_FAILURE: 'GET_ALL_CARDS_FAILURE',
  SORT_CARDS: 'SORT_CARDS',
  ADD_CARD_REQUEST: 'ADD_CARD_REQUEST',
  ADD_CARD_SUCCESS: 'ADD_CARD_SUCCESS',
  ADD_CARD_FAILURE: 'ADD_CARD_FAILURE',
};

export const getAllCardsRequest = () => ({
  type: CardsActionTypes.GET_ALL_CARDS_REQUEST,
  payload: {
    isLoading: true,
  },
});

export const getAllCardsSuccess = cards => ({
  type: CardsActionTypes.GET_ALL_CARDS_SUCCESS,
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

export default CardsActionTypes;
