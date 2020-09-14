import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsTotalAmount,
} from '../../selectors/cart.selectors';

import CheckoutItem from '../../components/CheckOutItem/CheckoutItem.component';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton.component';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, totalAmount }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem item={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: {totalAmount}</span>
      </TotalContainer>
      <StripeCheckoutButton price={totalAmount} />
    </CheckoutPageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectCartItemsTotalAmount,
});
export default connect(mapStateToProps, null)(CheckoutPage);
