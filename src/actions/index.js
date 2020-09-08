import createUserProfileDocument from '../firebase/firebase.utils';
import { SET_CURRENT_USER, TOGGLE_CART_HIDDEN } from './actions.type';
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
