import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './CartItem.styles';

const CartItem = ({ item: { imageUrl, quantity, price, name } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
