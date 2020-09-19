import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  SET_CURRENT_USER,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from './actions.type';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const clearItem = (item) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};
