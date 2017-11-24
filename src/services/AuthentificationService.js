import { firebase, firebaseAuth } from '../store/firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export function signInWithEmailAndPassword(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return firebaseAuth.signOut();
}

export function signInWithGoogle() {
  return firebaseAuth.signInWithPopup(googleProvider);
}

export function getCurrentUser() {
  return firebaseAuth.currentUser;
}
