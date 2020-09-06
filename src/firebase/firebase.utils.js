import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCV4JT4yoVsdSkhF3nKKBa9OXFH3q9qTjU',
  authDomain: 'e-clothing-44e67.firebaseapp.com',
  databaseURL: 'https://e-clothing-44e67.firebaseio.com',
  projectId: 'e-clothing-44e67',
  storageBucket: 'e-clothing-44e67.appspot.com',
  messagingSenderId: '581284366396',
  appId: '1:581284366396:web:bd3d0e0bdfb4072ac5db39',
  measurementId: 'G-W2QP2MM9CV',
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
