import { put, takeEvery } from 'redux-saga/effects';
import { getAllCardsSuccess } from './actions';
import CardsActionTypes from './types';
import { firebaseDB } from '../../../store/firebase';


function* getCards() {
  const querySnapshot = yield firebaseDB.collection('cards').get();
  const cards = yield querySnapshot.docs.map((cardData) => {
    const card = cardData.data();
    card.id = cardData.id;
    return card;
  });
  yield put(getAllCardsSuccess(cards));
}


export default function* cardsFlow() {
  yield takeEvery(CardsActionTypes.GET_ALL_CARDS_REQUEST, getCards);
}
