import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={editItem('remove')}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={editItem('add')}>&#10095;</div>
      </QuantityContainer>
      <TextContainer className="price">{price}</TextContainer>
      <RemoveButtonContainer onClick={clearItem}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clearItemFromCart, addItem, removeItem }, dispatch);

export default connect(null, mapDispatchToProps)(CheckoutItem);
