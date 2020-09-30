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
// create a user in the Firestore database function with userAuth returned from Firebase Authentication
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // to make sure all documents are added to the Firestore successfully, we need to add them to a batch. If the creating process fails halfway for some reasons, the whole batch will fail and we have to start the creating again. We don't want only half of the documents are added to Firestore.
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(`${obj.id}`);
    batch.set(newDocRef, obj);
  });

  // for (let i=0; i < objectsToAdd.length; i++) {
  //   const newDocRef = collectionRef.doc();
  //   batch.set(newDocRef, objectsToAdd[i]);
  // }

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // convert the transformedCollections into an object using reduce method
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// utils to check if user is signed in
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unscribe = auth.onAuthStateChanged((userAuth) => {
      unscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
