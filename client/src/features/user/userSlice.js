import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 
const API_URL = 'http://localhost:3000/api/users/';

// --- EXISTING: loginUser async thunk (no changes) ---
export const loginUser = createAsyncThunk('user/login', async (userData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL + 'login', userData);
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      const message = (error.response?.data?.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
});

// --- NEW: registerUser async thunk ---
export const registerUser = createAsyncThunk('user/register', async (userData, thunkAPI) => {
    try {
      // Make API call to the registration endpoint
      const response = await axios.post(API_URL + 'register', userData);
      // On successful registration, the backend should log the user in automatically
      // and return the same data as the login endpoint (user object + token).
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      const message = (error.response?.data?.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
});


const userData = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: userData ? userData.user : null,
  token: userData ? userData.token : null,
  isLoggedIn: !!userData,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('user');
    },
    updateUser: (state, action) => {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem('user', JSON.stringify({ user: state.user, token: state.token }));
    },
  },
  // --- UPDATED: extraReducers now handles both login and register ---
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.status = 'loading'; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      // Add cases for registerUser (they are identical to loginUser)
      .addCase(registerUser.pending, (state) => { state.status = 'loading'; })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const { logOut, updateUser } = userSlice.actions;

export default userSlice.reducer;