import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{item.name}</TextContainer>

      <QuantityContainer>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span className="value">{item.quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>

      <TextContainer>{item.price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, { addItem, removeItem, clearItem })(CheckoutItem);
