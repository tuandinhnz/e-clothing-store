import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { Container, Button } from '../../shared';

const MenuItemContainer = styled(Container)`
  background-color: purple;
  background-image: url(${(props) => props.imageUrl});
  ${(props) => {
    switch (props.size) {
      case 'medium':
        return 'width: 100%; height: 300px; grid-column: span 2';
      case 'large':
        return 'width: 100%; height: 450px; grid-column: span 3';
      default:
        return 'width: auto';
    }
  }};
  display: flex;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const ItemTitleContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 20px 20px;
  text-transform: uppercase;
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  cursor: pointer;
`;

const MenuItem = ({ section, history, match }) => {
  return (
    <MenuItemContainer size={section.imageSize} imageUrl={section.imageUrl}>
      {/* <img src={section.imageUrl} alt={section.id} /> */}
      <ItemTitleContainer
        onClick={() => history.push(`${match.url}${section.linkUrl}`)}
      >
        <h1>{section.title}</h1>
        <Button as="a">SHOP NOW</Button>
      </ItemTitleContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
