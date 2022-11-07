import axios from "./axios";

const productApi = {
  getProducts: () => {
    const url = "/products/getProductList";
    return axios.get(url);
  },
  filterProducts: (category, sort, page) => {
    const url = `/products/filterProduct?Category=${category}&Sort=${sort}&page=${page}`;
    return axios.get(url);
  },
  searchProducts: async (keyword, page) => {
    const url = `/products/searchProduct?Keyword=${keyword}&page=${page}`;
    return axios.get(url);
  },
  getProductById: (productId) => {
    const url = `/products/getProductById?Id=${productId}`;
    return axios.get(url, productId);
  },
  //TODO từ đây xuống là chưa làm
  getProductBySlug: (slug) => {
    const url = `/product/${slug}`;
    return axios.get(url);
  },
  getProductsByCategorySlug: (slug) => {
    const url = `/product/${slug}/category`;
    return axios.get(url);
  },
  addProductReview: (review) => {
    const url = "/product/addProductReview";
    return axios.post(url, review);
  },
  deleteProductById: (productId) => {
    const url = "/product/deleteProductById";
    return axios.post(url, productId);
  },
  updateProduct: (product) => {
    const url = "/product/update";
    return axios.post(url, product);
  },
  addProduct: (product) => {
    const url = "/product/add";
    return axios.post(url, product);
  },
  searchByProductName: (text) => {
    const url = "/product/searchByProductName";
    return axios.post(url, { text });
  },
};

export default productApi;
