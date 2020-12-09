import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdownContainer from '../../components/cart-dropdown/cart-dropdown.container';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden || <CartDropdownContainer />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
