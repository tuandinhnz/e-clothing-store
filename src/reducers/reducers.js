import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { shopDataReducer } from './shopReducer';
// the import below tell redux-persist that we want to use the local storage of the window object of the browser. We can also use the session storage if we want by importing the sessionstorage
import storage from 'redux-persist/lib/storage';
import {
  SET_CURRENT_USER,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from '../actions/actions.type';
import { addItemToCart, removeItemFromCart } from '../utils/cart.utils';
import { sections } from '../assets/data/directory.data';

//define a persist config, a JSON object represent configuration that we want Redux Persist to use

const persistConfig = {
  key: 'root',
  storage,
  // the whitelist contains the state that we want to persist. In thid case we only want to persist the cart as the user has been stored on the Firestore so there is no need to store the users locally
  whitelist: ['cart'],
};

const USER_INITIAL_STATE = {
  currentUser: null,
};

const CART_INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const DIRECTORY_INITIAL_STATE = sections;

const directoryReducer = (state = DIRECTORY_INITIAL_STATE) => {
  return state;
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
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem !== action.payload
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
