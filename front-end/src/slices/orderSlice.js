import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderApi from "../apis/orderApi";

export const addOrderCOD = createAsyncThunk(
  "orders/paymentOrderByCash",
  async (order, rejectWithValue) => {
    try {
      const response = await orderApi.addOrderCOD(order);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//! don't use
export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (rejectWithValue) => {
    try {
      const response = await orderApi.getAllOrders();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOrdersByUser = createAsyncThunk(
  "order/getOrdersByUser",
  async (rejectWithValue) => {
    try {
      const response = await orderApi.getOrdersByUser();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    order: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [addOrderCOD.pending]: (state) => {
      state.loading = true;
    },
    [addOrderCOD.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addOrderCOD.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data.OrderDetail;
      console.log(state.orders);
    },
    [getOrdersByUser.pending]: (state) => {
      state.loading = true;
    },
    [getOrdersByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getOrdersByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data.orders;
    },
    [getAllOrders.pending]: (state) => {
      state.loading = true;
    },
    [getAllOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data.orders;
    },
  },
});

export default orderSlice.reducer;
