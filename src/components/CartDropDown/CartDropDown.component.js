import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../reducers/cart.selectors';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../CartItem/CartItem.component';
import { toggleCartHidden } from '../../actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const renderedCartItems = cartItems.length ? (
    cartItems.map((item) => <CartItem item={item} />)
  ) : (
    <span className="empty-message">Your cart is empty</span>
  );
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderedCartItems}</div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cartItems: selectCartItems(state) };
};
export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
