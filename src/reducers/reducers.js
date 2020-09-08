import { combineReducers } from 'redux';
import { SET_CURRENT_USER, TOGGLE_CART_HIDDEN } from '../actions/actions.type';

const INITIAL_STATE = {
  currentUser: null,
};

const CART_INITIAL_STATE = {
  hidden: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
