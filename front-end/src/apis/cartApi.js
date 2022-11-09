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
  removeItemCart: (cartItemId) => {
    const url = `/orders/removeItemCart?itemCartId=${cartItemId}`;
    return axios.get(url, cartItemId);
  },
};

export default cartApi;
