import axios from "./axios";

const OrderApi = {
  addOrder: (order) => {
    const url = "/orders/createOrder";
    return axios.post(url, order);
  },
  //! don't use
  getOrdersByUser: () => {
    const url = "/order/getOrdersByUser";
    return axios.post(url);
  },
  getAllOrders: () => {
    const url = "/order/getAllOrders";
    return axios.post(url);
  },
};

export default OrderApi;
