import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer>
    <BackgroundImage className="image" imageUrl={item.imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{item.name}</NameContainer>
      <PriceContainer>{item.price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton onClick={(e) => addItem(item)} inverted>
      ADD TO CART
    </AddButton>
  </CollectionItemContainer>
);

export default connect(null, { addItem })(CollectionItem);
