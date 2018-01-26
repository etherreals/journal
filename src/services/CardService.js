import { firebaseDB } from '../store/firebase';


/* eslint no-param-reassign: "error" */
const addDefaultPropsToCard = card => ({
  ...card,
  done: false,
});

export function addCard(card) {
  return firebaseDB.collection('cards').add(addDefaultPropsToCard(card)).then(response => response.get());
}

export function updateCard() {
  console.log('updated'); /* eslint no-console: ["error", { allow: ["log", "error"] }] */
}
