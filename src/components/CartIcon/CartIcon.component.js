import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';
import { toggleCartHidden } from '../../actions';
import { selectCartItemsCount } from '../../reducers/cart.selectors';

import './CartIcon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  //the purpose of using selector is to prevent component from re-rendering every time the state object is updated. The component is only rerendered if the value of the state it is using is changed. This it to increase the performance of our application as it does not have to perform unncessary rendering
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
