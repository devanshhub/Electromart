
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice.js'; // Add your slices here
import cartReducer from '../features/cart/cartSlice.js';
import wishlistReducer from '../features/wishlist/wishlistSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer, // Register your reducers here
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
