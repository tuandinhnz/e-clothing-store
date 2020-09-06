import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Header, Row } from '../../shared';
import { ShoppingBag } from '@styled-icons/boxicons-regular';
import { auth } from '../../firebase/firebase.utils';

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
      a {
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

const Icon = styled.div`
  margin-right: 15px;
  margin-left: 25px;
  padding-bottom: 5px;
`;

const NavigationBar = ({ currentUser }) => {
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
                <div onClick={() => auth.signOut()}>SIGN OUT</div>
              ) : (
                <Link to="/signin">SIGN IN</Link>
              )}
            </li>
          </ul>
        </div>
        <Icon>
          <a href="/#">
            <ShoppingBag size="20" title="Shopping Bag" />
          </a>
        </Icon>
      </NavBar>
    </Header>
  );
};

export default NavigationBar;
