import React from 'react';
import { Row } from '../../shared';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsTotalAmount,
} from '../../reducers/cart.selectors';

import CheckoutItem from '../../components/CheckOutItem/CheckoutItem.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalAmount }) => {
  return (
    <Row>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem item={cartItem} />
        ))}

        <div className="total">
          <span>TOTAL: {totalAmount}</span>
        </div>
      </div>
    </Row>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectCartItemsTotalAmount,
});
export default connect(mapStateToProps, null)(CheckoutPage);
