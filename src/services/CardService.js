import { firebaseDB } from '../store/firebase';


/* eslint no-param-reassign: "error" */
const addDefaultPropsToCard = card => ({
  ...card,
  done: false,
});

const isMyCard = (currentUser, card) =>
  currentUser && card.createdBy && card.createdBy.id === currentUser.uid;


const getMyCardsFromQuerySnapshot = (querySnapshot, currentUser) =>
  querySnapshot.docs.reduce((result, cardData) => {
    const card = cardData.data();
    card.id = cardData.id;
    if (isMyCard(currentUser, card)) {
      card.createdBy = currentUser;
      result.push(card);
    }
    return result;
  }, []);


const getCardsFromQuerySnapshot = querySnapshot => querySnapshot.docs.map((cardData) => {
  const card = cardData.data();
  card.id = cardData.id;
  return card;
});


export function addCard(card) {
  return firebaseDB.collection('cards').add(addDefaultPropsToCard(card)).then(response => response.get());
}

export function subscribeToCardsStore(emitter) {
  return firebaseDB.collection('cards').onSnapshot((querySnapshot) => {
    const cards = getCardsFromQuerySnapshot(querySnapshot);
    emitter(cards);
  });
}

export function subscribeToMyCardsStore(emitter, currentUser) {
  return firebaseDB.collection('cards').onSnapshot((querySnapshot) => {
    const cards = getMyCardsFromQuerySnapshot(querySnapshot, currentUser);
    emitter(cards);
  });
}
