import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CheckoutButton,
} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const linkTo = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CheckoutButton onClick={linkTo}>GO TO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
