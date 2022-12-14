import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../apis/userApi";

export const getUsers = createAsyncThunk(
  "accounts/getAccountList",
  async (rejectWithValue) => {
    try {
      const response = await userApi.getUsers();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getUsersDisable = createAsyncThunk(
  "accounts/getAccountDisableList",
  async (rejectWithValue) => {
    try {
      const response = await userApi.getUsersDisable();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  "accounts/deleteAccount",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const response = await userApi.deleteUserById(userId);
      await dispatch(getUsers());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const enableUserById = createAsyncThunk(
  "accounts/enableAccount",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const response = await userApi.enableUserById(userId);
      await dispatch(getUsers());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    usersdisable: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload.data.Account;
    },
    [getUsersDisable.pending]: (state) => {
      state.loading = true;
    },
    [getUsersDisable.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getUsersDisable.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersdisable = action.payload.data.Account;
    },
    [deleteUserById.pending]: (state) => {
      state.loading = true;
    },
    [deleteUserById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteUserById.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload.data.Account;
    },
    [enableUserById.pending]: (state) => {
      state.loading = true;
    },
    [enableUserById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [enableUserById.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
