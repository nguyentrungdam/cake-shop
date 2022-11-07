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
    console.log(cartItems);
    const response = await cartApi.addToCart(cartItems);
    await thunkAPI.dispatch(getProductInCart());
    return response;
  }
);

export const removeCartItem = createAsyncThunk(
  "orders/removeCartItem",
  async (cartItem, thunkAPI) => {
    const response = await cartApi.removeCartItem(cartItem);
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
      state.cartItems = action.payload.LogOrderDetail;
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
      state.cartItems = action.payload.LogOrderDetailedOrder;
    },
    [removeCartItem.pending]: (state) => {
      state.loading = true;
    },
    [removeCartItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [removeCartItem.fulfilled]: (state) => {
      state.loading = false;
    },
  },
});

export default cartSlice.reducer;
