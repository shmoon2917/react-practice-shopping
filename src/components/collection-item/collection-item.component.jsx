import React from 'react';
import './collection-item.styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addItemToCart = () => addItem(item);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={addItemToCart}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addItem }, dispatch);

export default connect(null, mapDispatchToProps)(CollectionItem);
