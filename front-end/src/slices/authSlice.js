import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../apis/authApi";
import { getCartItems } from "./cartSlice";

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, { rejectWithValue }) => {
    try {
      const response = await authApi.signin(user);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const response = await authApi.signup(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const isUserLoggedIn = createAsyncThunk(
  "auth/isUserLoggedIn",
  async (user, { rejectWithValue }) => {
    try {
      const response = await authApi.isUserLoggedIn(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const response = await authApi.updateUserInfo(user);
      await dispatch(isUserLoggedIn());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendOtpToEmail = createAsyncThunk(
  "auth/sendOtpToEmail",
  async (user, { rejectWithValue }) => {
    try {
      const response = await authApi.sendOtpToEmail(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (user, { rejectWithValue }) => {
    try {
      const response = await authApi.verifyOtp(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: "",
    loading: false,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    signout: (state, action) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true;
    },
    [signin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.data.token);
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [isUserLoggedIn.pending]: (state) => {
      state.loading = true;
    },
    [isUserLoggedIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [isUserLoggedIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
      state.isAuthenticated = true;
    },
  },
});
export const { signout } = authSlice.actions;
export default authSlice.reducer;
