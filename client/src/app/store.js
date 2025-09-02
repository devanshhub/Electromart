import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.js';
import userReducer from '../features/user/userSlice.js';
import wishlistReducer from '../features/wishlist/wishlistSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    // This line is the most important part.
    // It tells Redux to create and manage the 'wishlist' state.
    wishlist: wishlistReducer,
  },
});