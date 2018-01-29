import { firebase, firebaseAuth, firebaseDB } from '../store/firebase';

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
  return new Promise((resolve, reject) =>
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(user);
      }
    }));
}

export function checkIfUserExistInDb(id) {
  return firebaseDB.collection('users').doc(id).get().then(doc => doc.exists);
}

export function saveUserToDb(currentUser) {
  return firebaseDB.collection('users').doc(currentUser.id).set(currentUser);
}
