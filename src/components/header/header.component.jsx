import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.components';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartHidden = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin/">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden || <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
