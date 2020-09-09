import { createSelector } from 'reselect';

//input selectors. Select a piece of the state
const selectCart = (state) => state.cart;

//out put selectors that is created from the input selectors
export const selectCartItems = createSelector(
  // the fist argument is an array of input selectors, the second argument is a function that return the value we want out of the selector
  [selectCart],
  (cart) => cart.cartItems
);

//Make the itemCount selector

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuatity, cartItem) => accumulatedQuatity + cartItem.quantity,
      0
    )
);
