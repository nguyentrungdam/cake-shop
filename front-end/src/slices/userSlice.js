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

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
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
  },
});

export default userSlice.reducer;
