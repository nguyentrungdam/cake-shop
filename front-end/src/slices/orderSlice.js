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

export const addOrderPaypal = createAsyncThunk(
  "orders/paymentOrderByOnline",
  async (order, rejectWithValue) => {
    try {
      const response = await orderApi.addOrderPaypal(order);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getOrdersByUser = createAsyncThunk(
  "orders/getOrderByAccount",
  async (rejectWithValue) => {
    try {
      const response = await orderApi.getOrdersByUser();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getOrdersById = createAsyncThunk(
  "orders/getOrderById",
  async (orderId, rejectWithValue) => {
    try {
      const response = await orderApi.getOrdersById(orderId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAllOrders = createAsyncThunk(
  "orders/getOrderList",
  async (rejectWithValue) => {
    try {
      const response = await orderApi.getAllOrders();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateOrdersStatus = createAsyncThunk(
  "orders/updateOrder",
  async (orderId, rejectWithValue, dispatch) => {
    try {
      const response = await orderApi.updateOrdersStatus(orderId);
      await dispatch(getAllOrders());
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
    ordersDetail: [],
    order: {},
    link: "",
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
      state.orders = action.payload.data.Order;
    },
    [addOrderPaypal.pending]: (state) => {
      state.loading = true;
    },
    [addOrderPaypal.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addOrderPaypal.fulfilled]: (state, action) => {
      state.loading = false;
      state.link = action.payload.data.redirect;
      console.log(state.link);
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
      state.orders = action.payload.data.Order;
      state.ordersDetail = action.payload.data.Order.products;
    },
    [getOrdersById.pending]: (state) => {
      state.loading = true;
    },
    [getOrdersById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getOrdersById.fulfilled]: (state, action) => {
      state.loading = false;
      state.ordersDetail = action.payload.data.Order.products;
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
      state.orders = action.payload.data.Order;
    },

    [updateOrdersStatus.pending]: (state) => {
      state.loading = true;
    },
    [updateOrdersStatus.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [updateOrdersStatus.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data.Order;
    },
  },
});

export default orderSlice.reducer;
