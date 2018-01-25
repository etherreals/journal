import { createSelector } from 'reselect';
import _orderBy from 'lodash/orderBy';
import { formValueSelector } from 'redux-form';

const formSelector = formValueSelector('cardsFilters');

const descriptionSelector = store => (
  formSelector(store, 'descriptionFilter') ? formSelector(store, 'descriptionFilter') : ''
);
const difficultySelector = store => (
  formSelector(store, 'difficultyFilter') ? formSelector(store, 'difficultyFilter') : ''
);

export const orderSelector = store => store.cards.order;
export const orderBySelector = store => store.cards.orderBy;
export const cardsSelector = store => store.cards.cards;
export const isLoadingSelector = store => store.cards.isLoading;
export const isAddCardModalShownSelector = store => store.cards.isAddCardModalShown;
export const visibleCardsSelector = createSelector(
  cardsSelector,
  descriptionSelector,
  difficultySelector,
  orderBySelector,
  orderSelector,
  (
    cards,
    descriptionFilter,
    difficultyFilter,
    orderBy,
    order,
  ) => {
    const filteredCards = cards.filter((card) => {
      const difficulty = ['All', ''].includes(difficultyFilter) ? card.difficulty : Number(difficultyFilter);
      return card.description.toLowerCase().indexOf(descriptionFilter.toLowerCase()) !== -1
      && card.difficulty === difficulty;
    });
    const sortedCards = _orderBy(filteredCards, card => card[orderBy], [order]);
    return sortedCards;
  },
);

