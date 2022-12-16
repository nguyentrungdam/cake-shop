import axios from "./axios";

const OrderApi = {
  addOrderCOD: (order) => {
    const url = "/orders/paymentOrderByCash";
    return axios.post(url, order);
  },
  addOrderPaypal: (order) => {
    const url = "/orders/paymentOrderByOnline";
    return axios.post(url, order);
  },
  getOrdersByUser: () => {
    const url = "/orders/getOrderByAccount";
    return axios.get(url);
  },
  getOrdersById: (orderId) => {
    const url = `/orders/getOrderById?Id=${orderId}`;
    return axios.get(url);
  },
  getAllOrders: () => {
    const url = "/orders/getOrderList";
    return axios.post(url);
  },
  updateOrdersStatus: (orderId) => {
    const url = `/orders/updateOrder`;
    return axios.put(url, orderId);
  },
};

export default OrderApi;
