import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getOrdersById } from "../../../slices/orderSlice";
import EditOrder from "../Edit/EditOrder";

const Container = styled.div``;
function OrderList() {
  const dispatch = useDispatch();
  const { orders, ordersDetail, loading } = useSelector((state) => state.order);
  const [showDetail, setShowDetail] = useState(false);
  const [amount, setAmount] = useState();
  const [id, setId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    const fetchData = () => {
      dispatch(getAllOrders()).unwrap();
    };
    fetchData();
  }, [dispatch]);

  const handleViewDetail = (id, amount, status) => {
    setAmount(amount);
    setId(id);
    setOrderStatus(status);
    dispatch(getOrdersById(id)).unwrap();
    setShowDetail(true);
  };

  return (
    <Container>
      <Header name="Orders Management" />
      <LeftNavbar />
      <div
        className="container"
        style={{
          margin: "20px 0 0 370px",
          display: "flex",
          flex: "flex-end",
          flexDirection: "column",
        }}
      >
        <h1>Orders List </h1>
        <Table
          style={{
            width: "90%",
          }}
          className="table table-bordered"
        >
          <tbody className="thead-dark">
            <tr>
              <th style={{ textAlign: "center" }}>Id</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Payment Type</th>
              <th style={{ textAlign: "center" }}>Payment Status</th>
              <th style={{ textAlign: "center" }}>Order Status</th>
              <th style={{ textAlign: "center" }}>Total Amount</th>
              <th style={{ textAlign: "center" }}>Detail</th>
            </tr>
          </tbody>
          {orders?.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{item.Order_FullName}</td>
                <td style={{ textAlign: "center" }}>{item.Order_Phone}</td>
                <td style={{ textAlign: "center" }}>
                  {item.Payment_Type}{" "}
                  {item.Payment_Type === "online" ? "(Paypal)" : ""}
                </td>
                <td style={{ textAlign: "center" }}>{item.Payment_Status}</td>
                <td style={{ textAlign: "center" }}>{item.Order_Status}</td>
                <td style={{ textAlign: "center" }}>
                  £
                  {Number(item.Amount).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td>
                  <span
                    className="badge badge-info"
                    style={{
                      backgroundColor: "black",
                      textAlign: "center",
                      padding: "10px",
                      margin: "8px 0 0 2px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleViewDetail(item._id, item.Amount, item.Order_Status)
                    }
                  >
                    View Detail
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <EditOrder
        id={id}
        loading={loading}
        orderStatus={orderStatus}
        ordersDetail={ordersDetail}
        amount={amount}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      ></EditOrder>
    </Container>
  );
}

export default OrderList;
