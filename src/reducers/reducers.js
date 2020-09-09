import { combineReducers } from 'redux';
import {
  SET_CURRENT_USER,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/actions.type';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const USER_INITIAL_STATE = {
  currentUser: null,
};

const CART_INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM_TO_CART:
      //add item to an array nested inside an object
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
