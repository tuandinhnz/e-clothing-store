import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropDown/CartDropDown.component';
import {
  selectCurrentUser,
  selectCartHidden,
} from '../../selectors/user.selectors';

import { signOutStart } from '../../actions';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './Header.styles';

const Header = ({ currentUser, cartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="#">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => signOutStart()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {cartHidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});
export default connect(mapStateToProps, { signOutStart })(Header);
