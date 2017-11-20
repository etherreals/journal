import firebase from '../store/firebase';

const firebaseAuth = firebase.auth();
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
