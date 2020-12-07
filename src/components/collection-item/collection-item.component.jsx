import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addItemToCart = () => addItem(item);

  return (
    <CollectionItemContainer>
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={addItemToCart}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addItem }, dispatch);

export default connect(null, mapDispatchToProps)(CollectionItem);
