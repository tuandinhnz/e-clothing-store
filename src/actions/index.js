import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  SET_CURRENT_USER,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  CLEAR_CART,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './actions.type';

// set current user action

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// cart actions
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

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

//fetch collections actions

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

// sign in actions

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const signInSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

// checkUserSesstion action

export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION,
  };
};

// sign out actions

export const signOutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signOutSuccess = (user) => {
  return {
    type: SIGN_OUT_SUCCESS,
    payload: user,
  };
};

export const signOutFailure = (error) => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error,
  };
};

// Sign Up actions

export const signUpStart = (emailPasswordAndDisplayname) => {
  return {
    type: SIGN_UP_START,
    payload: emailPasswordAndDisplayname,
  };
};

export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

export const signUpFailure = (error) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};
