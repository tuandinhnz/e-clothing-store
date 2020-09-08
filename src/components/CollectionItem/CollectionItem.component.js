import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
    <CustomButton onClick={(e) => addItem(item)} inverted>
      ADD TO CART
    </CustomButton>
  </div>
);

export default connect(null, { addItem })(CollectionItem);
