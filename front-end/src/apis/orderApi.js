import axios from "./axios";

const OrderApi = {
  addOrderCOD: (order) => {
    const url = "/orders/paymentOrderByCash";
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
