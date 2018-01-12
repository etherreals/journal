import CardsActionTypes from './types';

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
