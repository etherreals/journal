import * as firebase from 'firebase';
import 'firebase/firestore';


const config = {
  apiKey: 'AIzaSyCZnFF2_BSQA3BNsyTsHff7nMCvIx7VLm4',
  authDomain: 'journal-2d79a.firebaseapp.com',
  databaseURL: 'https://journal-2d79a.firebaseio.com',
  projectId: 'journal-2d79a',
  storageBucket: 'journal-2d79a.appspot.com',
  messagingSenderId: '369606322455',
};
firebase.initializeApp(config);
const firebaseDB = firebase.firestore();
const firebaseAuth = firebase.auth();

export { firebase, firebaseAuth, firebaseDB };
