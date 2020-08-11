import React from 'react';

import './checkout.styles.scss';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

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
  const stripePromise = loadStripe(
    'pk_test_51HF0VmGqoQrIWsXCZQQILWFFYUNwsyJ0F15tGg0wd19GfG5Cily39DJaZmQsxS6S7XBjyt12sJFOt7545uOKrcRR00Co2BZZSO'
  );
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
      <div className="test-warning">
        *Please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <Elements stripe={stripePromise}>
        <StripeCheckoutButton price={total} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
