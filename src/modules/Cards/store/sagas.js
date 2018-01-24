import { put, takeEvery, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import CardsActionTypes, { allCardsUpdatedSuccess, addCardSuccess, addCardFailure, closeAddCardModal } from './actions';
import { openInfoTipModal } from '../../InfoTips/store/actions';
import { firebaseDB } from '../../../store/firebase';
import * as CardService from '../../../services/CardService';


function cardsChannel() {
  return eventChannel((emit) => {
    const unsubscribe = firebaseDB.collection('cards').onSnapshot((querySnapshot) => {
      const cards = querySnapshot.docs.map((cardData) => {
        const card = cardData.data();
        card.id = cardData.id;
        return card;
      });
      emit(cards);
    });
    return unsubscribe;
  });
}

function* getCards() {
  const channel = yield call(cardsChannel);
  try {
    while (true) {
      const cards = yield take(channel);
      yield put(allCardsUpdatedSuccess(cards));
    }
  } catch (error) {
    throw new Error(error);
  }
}

function* addCard(action) {
  try {
    yield put(closeAddCardModal());
    yield put(openInfoTipModal('Adding'));
    yield call(CardService.addCard, action.payload.card);
    yield put(addCardSuccess());
    yield put(openInfoTipModal('Card was successfully added'));
  } catch (error) {
    yield put(addCardFailure(error));
    yield put(openInfoTipModal('Error, card was\'t added'));
    throw new Error(error);
  }
}


export default function* cardsFlow() {
  yield takeEvery(CardsActionTypes.GET_ALL_CARDS_REQUEST, getCards);
  yield takeEvery(CardsActionTypes.ADD_CARD_REQUEST, addCard);
}
