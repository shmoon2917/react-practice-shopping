import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './checkout-item.styles.scss';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItem = () => {
    clearItemFromCart(cartItem);
  };

  const editItem = (type) => () => {
    type === 'add' ? addItem(cartItem) : removeItem(cartItem);
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={editItem('remove')}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={editItem('add')}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItem}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clearItemFromCart, addItem, removeItem }, dispatch);

export default connect(null, mapDispatchToProps)(CheckoutItem);
