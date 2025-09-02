import { createSlice } from '@reduxjs/toolkit';

// A helper function to update totals and save to localStorage
const updateStateAndLocalStorage = (state) => {
  state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  // CHANGED: Use `item.price` instead of `item.currentPrice`
  state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
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
    addItem: (state, action) => {
      const newItem = action.payload.item; // This is the full product object from the DB
      const quantity = action.payload.quantity || 1;
      
      // CHANGED: Find existing item by '_id'
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        // NOTE: We are creating a smaller, cleaner object to store in the cart
        // This keeps the cart state lean and focused.
        const cartItem = {
          _id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          // Use the first image from the array as the cart image
          imageUrl: (newItem.imageUrls && newItem.imageUrls.length > 0) ? newItem.imageUrls[0] : '/image/placeholder.png',
          quantity: quantity,
        };
        state.items.push(cartItem);
      }
      updateStateAndLocalStorage(state);
    },

    removeItem: (state, action) => {
      // CHANGED: The payload is now the '_id' string
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item._id !== idToRemove);
      updateStateAndLocalStorage(state);
    },

    updateQuantity: (state, action) => {
      // CHANGED: The payload now contains '_id'
      const { _id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item._id === _id);

      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          // If quantity is 0 or less, remove the item
          state.items = state.items.filter((item) => item._id !== _id);
        }
      }
      updateStateAndLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem('cart');
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;