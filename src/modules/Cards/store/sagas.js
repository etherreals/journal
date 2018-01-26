import { put, takeEvery, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import CardsActionTypes, { allCardsUpdatedSuccess, myCardsUpdatedSuccess, addCardSuccess, addCardFailure, closeAddCardModal } from './actions';
import { openInfoTipModal } from '../../InfoTips/store/actions';
import { firebaseDB } from '../../../store/firebase';
import { getCurrentUser } from '../../../services/AuthenticationService';
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

function myCardsChannel(currentUser) {
  return eventChannel((emit) => {
    const unsubscribe = firebaseDB.collection('cards').onSnapshot((querySnapshot) => {
      const cards = querySnapshot.docs.reduce((result, cardData) => {
        const card = cardData.data();
        if (card.createdBy && card.createdBy.id === currentUser.uid) {
          card.id = cardData.id;
          card.createdBy = currentUser;
          result.push(card);
        }
        return result;
      }, []);
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

function* getMyCards() {
  const currentUser = yield call(getCurrentUser);
  const channel = yield call(myCardsChannel, currentUser);
  try {
    while (true) {
      const cards = yield take(channel);
      yield put(myCardsUpdatedSuccess(cards));
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
  yield takeEvery(CardsActionTypes.GET_MY_CARDS_REQUEST, getMyCards);
  yield takeEvery(CardsActionTypes.ADD_CARD_REQUEST, addCard);
}
