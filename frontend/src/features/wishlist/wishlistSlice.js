// src/features/wishlist/wishlistSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Load wishlist from localStorage or start with an empty array
const initialState = {
  items: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // This single reducer will add an item if it's not present, or remove it if it is.
    toggleWishlist: (state, action) => {
      const itemToAddOrRemove = action.payload.item;
      const existingIndex = state.items.findIndex(
        (item) => item.id === itemToAddOrRemove.id
      );

      if (existingIndex >= 0) {
        // Item exists, so remove it
        state.items.splice(existingIndex, 1);
      } else {
        // Item does not exist, so add it
        state.items.push(itemToAddOrRemove);
      }

      // Save the updated wishlist to localStorage
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
  },
});

// Export the action creator
export const { toggleWishlist } = wishlistSlice.actions;

// Export the reducer
export default wishlistSlice.reducer;