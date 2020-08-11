import React from 'react';

import './checkout.styles.scss';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = () => {
  const headerBlocks = [
    'Product',
    'Description',
    'Quantity',
    'Price',
    'Remove',
  ];

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {headerBlocks.map((item, idx) => (
          <div key={idx} className="header-block">
            <span>{item}</span>
          </div>
        ))}
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
