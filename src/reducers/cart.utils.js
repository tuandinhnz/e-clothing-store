export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If item is already existed in cart, increase its quatity by one.
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // If the item is not existed, add the quatity property to the item and set the base quantity to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
