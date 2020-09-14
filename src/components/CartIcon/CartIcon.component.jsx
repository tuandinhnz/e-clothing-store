import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../actions';
import { selectCartItemsCount } from '../../selectors/cart.selectors';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CartIcon.styles';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};
const mapStateToProps = (state) => ({
  //the purpose of using selector is to prevent component from re-rendering every time the state object is updated. The component is only rerendered if the value of the state it is using is changed. This it to increase the performance of our application as it does not have to perform unncessary rendering
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
