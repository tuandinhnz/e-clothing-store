import createUserProfileDocument from '../firebase/firebase.utils';
import {
  SET_CURRENT_USER,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
} from './actions.type';
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
