// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to get initial state from localStorage
const getInitialState = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      // No user data in localStorage, return the default logged-out state
      return { user: null, token: null, loggedIn: false };
    }
    const userData = JSON.parse(serializedState);
    // Return the loaded data, ensuring the loggedIn status is correct
    return { ...userData, loggedIn: !!userData.token };
  } catch (err) {
    console.error("Could not load user state from localStorage", err);
    return { user: null, token: null, loggedIn: false };
  }
};

const initialState = getInitialState();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Renamed from setUser for clarity. This is called after a successful login API call.
    logIn: (state, action) => {
      const { user, token } = action.payload;
      
      state.user = user; // e.g., { name: 'John Doe', email: 'john@example.com' }
      state.token = token; // The token received from your backend
      state.loggedIn = true;

      // CRITICAL: We do NOT store the password.

      // Save the user session to localStorage for persistence
      localStorage.setItem('user', JSON.stringify({ user, token }));
    },
    // This reducer remains largely the same but also clears localStorage
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.loggedIn = false;

      // Remove the user session from localStorage
      localStorage.removeItem('user');
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;