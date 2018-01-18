import { put, takeEvery, call, all } from 'redux-saga/effects';
import CardsActionTypes, { getAllCardsSuccess, addCardSuccess, addCardFailure, closeAddCardModal } from './actions';
import { openInfoTipModal } from '../../InfoTips/store/actions';
import { firebaseDB } from '../../../store/firebase';
import * as CardService from '../../../services/CardService';


function* getCards() {
  const querySnapshot = yield firebaseDB.collection('cards').get();
  const cards = yield all(querySnapshot.docs.map((cardData) => {
    const card = cardData.data();
    card.id = cardData.id;
    return card;
  }));
  yield put(getAllCardsSuccess(cards));
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
  }
}


export default function* cardsFlow() {
  yield takeEvery(CardsActionTypes.GET_ALL_CARDS_REQUEST, getCards);
  yield takeEvery(CardsActionTypes.ADD_CARD_REQUEST, addCard);
}
