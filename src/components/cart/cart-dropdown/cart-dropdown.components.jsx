import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../../form/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
