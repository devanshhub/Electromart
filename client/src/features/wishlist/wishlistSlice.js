import { createSlice } from '@reduxjs/toolkit';

// --- NEW: Helper function to save the entire state to localStorage ---
const updateStateAndLocalStorage = (state) => {
  localStorage.setItem('wishlist', JSON.stringify(state));
};

// --- NEW: More robust way to load initial state ---
const initialState = localStorage.getItem('wishlist')
  ? JSON.parse(localStorage.getItem('wishlist'))
  : {
      items: [],
    };

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // This single reducer adds an item if it's not present, or removes it if it is.
    toggleWishlist: (state, action) => {
      const newItem = action.payload.item;
      // --- THE CRITICAL FIX: Find item by '_id' instead of 'id' ---
      const existingIndex = state.items.findIndex(
        (item) => item._id === newItem._id
      );

      if (existingIndex >= 0) {
        // Item exists, so remove it from the array
        state.items.splice(existingIndex, 1);
      } else {
        // Item does not exist, so add the full product object.
        // For a wishlist, storing the full object is useful for display.
        state.items.push(newItem);
      }

      // --- Use the helper function to save the updated state ---
      updateStateAndLocalStorage(state);
    },
  },
});

// Export the action creator
export const { toggleWishlist } = wishlistSlice.actions;

// Export the reducer
export default wishlistSlice.reducer;