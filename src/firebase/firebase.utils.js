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
// create a user in the Firestore database function
export const createUserProfileDocument = async (userAuth, addtionalData) => {
  //checl if user is currently signed in.
  if (!userAuth) return;
  //check if user is already exist in the Firestore database using user Auth object uid parameter
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
