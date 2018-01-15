import { firebaseDB } from '../store/firebase';

export function addCard(card) {
  return firebaseDB.collection('cards').add(card).then(response => response.get());
}

export function updateCard() {
  console.log('updated'); /* eslint no-console: ["error", { allow: ["log", "error"] }] */
}
