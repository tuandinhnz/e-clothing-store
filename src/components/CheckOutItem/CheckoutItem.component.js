import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>

      <span className="quantity">
        <div onClick={() => removeItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div onClick={() => addItem(item)} className="arrow">
          &#10095;
        </div>
      </span>

      <span className="price">{item.price}</span>
      <div onClick={() => clearItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { addItem, removeItem, clearItem })(CheckoutItem);
