import { put, takeEvery, call } from 'redux-saga/effects';
import CardsActionTypes, { getAllCardsSuccess, addCardSuccess, addCardFailure } from './actions';
import { firebaseDB } from '../../../store/firebase';
import * as CardService from '../../../services/CardService';


function* getCards() {
  const querySnapshot = yield firebaseDB.collection('cards').get();
  const cards = yield querySnapshot.docs.map((cardData) => {
    const card = cardData.data();
    card.id = cardData.id;
    return card;
  });
  yield put(getAllCardsSuccess(cards));
}

function* addCard(action) {
  try {
    yield call(CardService.addCard, action.payload.card);
    yield put(addCardSuccess());
  } catch (error) {
    yield put(addCardFailure(error));
  }
}


export default function* cardsFlow() {
  yield takeEvery(CardsActionTypes.GET_ALL_CARDS_REQUEST, getCards);
  yield takeEvery(CardsActionTypes.ADD_CARD_REQUEST, addCard);
}
