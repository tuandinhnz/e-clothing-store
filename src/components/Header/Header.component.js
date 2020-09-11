import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
import { Header, Row } from '../../shared';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropDown/CartDropDown.component';
import {
  selectCurrentUser,
  selectCartHidden,
} from '../../reducers/user.selectors';

const NavBar = styled(Row)`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: lightgrey;

  ul {
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    list-style: none;
    justify-content: space-between;

    li {
      margin: 0 3rem;
      a,
      div {
        color: midnightblue;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: all 0.5s ease-out;
        &:hover {
          border-bottom: 2px solid midnightblue;
        }
      }
    }
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const NavigationBar = ({ currentUser, cartHidden }) => {
  return (
    <Header>
      <NavBar>
        <Link to="/">
          <Logo>
            <img
              src={require('../../assets/img/Royal-Logo.png')}
              alt="logo"
              width="100%"
              height="100%"
            />
          </Logo>
        </Link>
        <div style={{ marginLeft: 'auto' }}>
          <ul>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/shop">CONTACT</Link>
            </li>
            <li>
              {currentUser ? (
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => auth.signOut()}
                >
                  SIGN OUT
                </div>
              ) : (
                <Link to="/signin">SIGN IN</Link>
              )}
            </li>
          </ul>
        </div>
        <CartIcon />
      </NavBar>
      {cartHidden ? null : <CartDropdown />}
    </Header>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});
export default connect(mapStateToProps, null)(NavigationBar);
