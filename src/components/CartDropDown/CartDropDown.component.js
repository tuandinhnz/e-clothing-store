import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../CartItem/CartItem.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  const renderedCartItems = cartItems.map((item) => <CartItem item={item} />);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderedCartItems}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};
export default connect(mapStateToProps, null)(CartDropdown);
