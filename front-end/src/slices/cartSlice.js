import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../apis/cartApi";

export const getProductInCart = createAsyncThunk(
  "orders/getProductInCart",
  async () => {
    const response = await cartApi.getProductInCart();
    return response;
  }
);

export const addToCart = createAsyncThunk(
  "orders/addToCart",
  async (cartItems, thunkAPI) => {
    const response = await cartApi.addToCart(cartItems);
    await thunkAPI.dispatch(getProductInCart());
    console.log(response);
    return response;
  }
);

export const removeItemCart = createAsyncThunk(
  "orders/removeItemCart",
  async (cartItemId, thunkAPI) => {
    const response = await cartApi.removeItemCart(cartItemId);
    await thunkAPI.dispatch(getProductInCart());
    return response;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.loading = true;
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.data.LogOrderDetail;
      state.data = action.payload.data.total;
    },
    [getProductInCart.pending]: (state) => {
      state.loading = true;
    },
    [getProductInCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProductInCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.data.LogOrderDetail;
    },
    [removeItemCart.pending]: (state) => {
      state.loading = true;
    },
    [removeItemCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [removeItemCart.fulfilled]: (state) => {
      state.loading = false;
    },
  },
});

export default cartSlice.reducer;
