import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../selectors/cart.selectors';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem.component';

import { toggleCartHidden } from '../../actions';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './CartDropDown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const renderedCartItems = cartItems.length ? (
    cartItems.map((item) => <CartItem item={item} />)
  ) : (
    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
  );
  return (
    <CartDropdownContainer>
      <CartItemsContainer>{renderedCartItems}</CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};
const mapStateToProps = (state) => {
  return { cartItems: selectCartItems(state) };
};
export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
