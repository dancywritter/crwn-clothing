import { addItemToCart } from './cart.utils';

const { cartActionTypes } = require('./cart.types');

const initialState = {
  hidden: true,
  cartItems: [],
  cartItemCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
