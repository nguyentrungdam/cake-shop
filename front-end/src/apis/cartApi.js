import axios from "./axios";

const cartApi = {
  addToCart: (cartItems) => {
    const url = "/orders/addToCart";
    return axios.post(url, cartItems);
  },
  getProductInCart: () => {
    const url = "/orders/getProductInCart";
    return axios.get(url);
  },
  removeCartItem: (cartItem) => {
    const url = "/cart/removeItem";
    return axios.post(url, cartItem);
  },
};

export default cartApi;
