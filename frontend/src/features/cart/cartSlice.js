// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// A helper function to update totals and save to localStorage
const updateStateAndLocalStorage = (state) => {
  // Recalculate total quantity
  state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  // Recalculate total price
  state.totalPrice = state.items.reduce((total, item) => total + (item.currentPrice * item.quantity), 0);
  // Save the entire cart state to localStorage
  localStorage.setItem('cart', JSON.stringify(state));
};

// Load the initial state from localStorage, or use a default empty state
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds an item to the cart, or increases its quantity if it already exists
    addItem: (state, action) => {
      const newItem = action.payload.item;
      const quantity = action.payload.quantity || 1;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        // Push a clean version of the item, ensuring quantity is set
        state.items.push({ ...newItem, quantity: quantity });
      }
      updateStateAndLocalStorage(state);
    },

    // Removes an entire item line (e.g., all 5 units of a product) from the cart
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
      updateStateAndLocalStorage(state);
    },

    // Sets the quantity for a specific item, used by the +/- buttons
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          // If quantity is 0 or less, remove the item
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
      updateStateAndLocalStorage(state);
    },

    // Clears the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      // Also clear from localStorage
      localStorage.removeItem('cart');
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;