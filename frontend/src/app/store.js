
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice.js'; // Add your slices here
import cartReducer from '../features/cart/cartSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer, // Register your reducers here
    cart: cartReducer,
  },
});

export default store;
