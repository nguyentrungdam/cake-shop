import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getOrdersByUser } from "../../../slices/orderSlice";
import { ListProductWrapper } from "../../../styles/listProductStyle";
import moment from "moment";
import ViewDetail from "./ViewDetail";
import Loading from "../../../components/loading";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const [amount, setAmount] = useState();
  const [productDetail, setProductDetail] = useState();
  const { orders, loading } = useSelector((state) => state.order);
  console.log(orders);
  useEffect(() => {
    dispatch(getOrdersByUser());
  }, []);

  const handleViewDetail = (amount, products) => {
    setAmount(amount);
    setProductDetail(products);
    setShowDetail(true);
  };

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loading></Loading>
      ) : (
        <ListProductWrapper>
          <main className="main-content main-content2">
            <div className="shopify-section">
              <div className="" id="CollectionSection">
                <h1 className="order-title">Order History</h1>
                <div className="page-width page-content page-width-historyOrder">
                  <div className="collection-filter">
                    <div className="grid grid--uniform">
                      <div className="list-orders">
                        <h3 className="h3-total">Total: {orders?.length}</h3>
                        {orders?.length > 0 &&
                          orders?.map((item, index) => (
                            <div className="cart-item" key={item._id}>
                              <h4>Detail of order: {index + 1}</h4>
                              <p className="p-orders-history">
                                Ordering time:{" "}
                                {moment(item.Order_Date).format(
                                  "DD-MM-YYYY, hh:mm:ss A"
                                )}
                              </p>
                              <p className="p-orders-history">
                                Name: {item.Order_FullName}
                              </p>
                              <p className="p-orders-history">
                                Address: {item.Order_Address}
                              </p>
                              <p className="p-orders-history">
                                Phone: {item.Order_Phone}
                              </p>
                              <p className="p-orders-history">
                                Status: {item.Order_Status}
                              </p>
                              <p className="p-orders-history">
                                Payment type : {item.Payment_Type}{" "}
                                {item.Payment_Type === "online"
                                  ? "(Paypal)"
                                  : ""}
                              </p>
                              <p className="p-orders-history">
                                Payment status : {item.Payment_Status}
                              </p>
                              <span
                                className="btn-shopnow"
                                onClick={() =>
                                  handleViewDetail(item.Amount, item.products)
                                }
                              >
                                View order detail
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <ViewDetail
            productDetail={productDetail}
            amount={amount}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
          ></ViewDetail>
        </ListProductWrapper>
      )}
      <Footer />
    </>
  );
};

export default OrderHistory;
