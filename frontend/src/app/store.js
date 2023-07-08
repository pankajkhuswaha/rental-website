import { configureStore } from '@reduxjs/toolkit';
import { cartSlicevalue } from '../pages/cart/CartSlice';


export const store = configureStore({
  reducer: {
    cart: cartSlicevalue,
  },
});