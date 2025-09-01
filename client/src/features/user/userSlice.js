// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// --- Helper function: load state from localStorage ---
const getInitialState = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return { user: null, token: null, loggedIn: false };
    }
    const userData = JSON.parse(serializedState);
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
    // Called after login
    logIn: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.loggedIn = true;

      localStorage.setItem('user', JSON.stringify({ user, token }));
    },

    // Called to update profile (from Account.jsx -> EditProfile form)
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }; // merge changes

      // Keep token if logged in
      localStorage.setItem(
        'user',
        JSON.stringify({ user: state.user, token: state.token })
      );
    },

    // Called to logout
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.loggedIn = false;

      localStorage.removeItem('user');
    },
  },
});

export const { logIn, updateUser, logOut } = userSlice.actions;

export default userSlice.reducer;
