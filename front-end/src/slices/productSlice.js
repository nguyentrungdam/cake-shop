import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../apis/productApi";
// TODO Đã có
export const getProducts = createAsyncThunk(
  "products/getProductList",
  async (obj, rejectWithValue) => {
    try {
      const response = await productApi.getProducts(obj.page);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const filterProducts = createAsyncThunk(
  "products/filterProduct",
  async (obj, rejectWithValue) => {
    try {
      const response = await productApi.filterProducts(
        obj.category,
        obj.sortName,
        obj.page
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const searchProducts = createAsyncThunk(
  "products/searchProduct",
  async (obj, rejectWithValue) => {
    try {
      const response = await productApi.searchProducts(obj.keyword, obj.page);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId, rejectWithValue) => {
    try {
      const response = await productApi.getProductById(productId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteProductById = createAsyncThunk(
  "/products/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await productApi.deleteProductById(productId);
      // await thunkAPI.dispatch(getProducts());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const disableProductById = createAsyncThunk(
  "/products/disableProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await productApi.disableProductById(productId);
      console.log(response);
      // await thunkAPI.dispatch(getProducts());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const enableProductById = createAsyncThunk(
  "/products/enableProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await productApi.enableProductById(productId);
      console.log(response);
      // await thunkAPI.dispatch(getProducts());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getDisableProductList = createAsyncThunk(
  "products/getProductDisableList",
  async (obj, rejectWithValue) => {
    try {
      const response = await productApi.getDisableProductList(obj.page);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// TODO chưa có
export const getProductBySlug = createAsyncThunk(
  "product/getProductBySlug",
  async (slug, rejectWithValue) => {
    try {
      const response = await productApi.getProductBySlug(slug);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductsByCategorySlug = createAsyncThunk(
  "product/getProductsByCategorySlug",
  async (slug, rejectWithValue) => {
    try {
      const response = await productApi.getProductsByCategorySlug(slug);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProductReview = createAsyncThunk(
  "product/addProductReview",
  async (review, { rejectWithValue }) => {
    try {
      const response = await productApi.addProductReview(review);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (product, { rejectWithValue }) => {
    try {
      const response = await productApi.updateProduct(product);
      // await thunkAPI.dispatch(getProducts());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/add",
  async (product, { rejectWithValue }) => {
    try {
      const response = await productApi.addProduct(product);
      // await thunkAPI.dispatch(getProducts());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductsSearched = createAsyncThunk(
  "product/searchByProductName",
  async (text, rejectWithValue) => {
    try {
      const response = await productApi.searchByProductName(text);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productDetail: {},
    search: [],
    loading: false,
    error: null,
    data: {},
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.Product;
      state.data = action.payload.data;
    },
    [filterProducts.pending]: (state) => {
      state.loading = true;
    },
    [filterProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [filterProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.Product;
      state.data = action.payload.data;
    },
    [searchProducts.pending]: (state) => {
      state.loading = true;
    },
    [searchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [searchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.Product;
      state.data = action.payload.data;
    },
    [getProductById.pending]: (state) => {
      state.loading = true;
    },
    [getProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload.data.Product;
    },
    [deleteProductById.pending]: (state) => {
      state.loading = true;
    },
    [deleteProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteProductById.fulfilled]: (state) => {
      state.loading = false;
    },
    [disableProductById.pending]: (state) => {
      state.loading = true;
    },
    [disableProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [disableProductById.fulfilled]: (state) => {
      state.loading = false;
    },
    [enableProductById.pending]: (state) => {
      state.loading = true;
    },
    [enableProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [enableProductById.fulfilled]: (state) => {
      state.loading = false;
    },
    [getDisableProductList.pending]: (state) => {
      state.loading = true;
    },
    [getDisableProductList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getDisableProductList.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.Product;
      state.data = action.payload.data;
    },
    // TODO bên dưới chưa dùng
    [getProductBySlug.pending]: (state) => {
      state.loading = true;
    },
    [getProductBySlug.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProductBySlug.fulfilled]: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload.data.product;
    },
    [getProductsByCategorySlug.pending]: (state) => {
      state.loading = true;
    },
    [getProductsByCategorySlug.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProductsByCategorySlug.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.products;
    },
    [addProductReview.pending]: (state) => {
      state.loading = true;
    },
    [addProductReview.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addProductReview.fulfilled]: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload.data.product;
    },
    [updateProduct.pending]: (state) => {
      state.loading = true;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.products;
    },
    [addProduct.pending]: (state) => {
      state.loading = true;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.products;
    },
    [getProductsSearched.pending]: (state) => {
      state.loading = true;
    },
    [getProductsSearched.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProductsSearched.fulfilled]: (state, action) => {
      state.loading = false;
      state.search = action.payload.data.products;
    },
  },
});

export default productSlice.reducer;
