import firebase from '../store/firebase';

const firebaseAuth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function signInWithEmailAndPassword(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password);
}

function signOut() {
  return firebaseAuth.signOut();
}

function signInWithGoogle() {
  return firebaseAuth.signInWithPopup(googleProvider);
}

export {
  signInWithEmailAndPassword,
  signInWithGoogle,
  signOut,
};
