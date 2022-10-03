import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../slices/orderSlice";

const Container = styled.div``;
function OrderList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(getAllOrders()).unwrap();
    }
    fetchData();
  }, [dispatch])

  const { orders } = useSelector((state) => state.order);
  // const id = users._id;

  // const handleDeleteUser = async () => {
  //   const response = await dispatch(deleteUserById(id)).unwrap();
  //   if(response.status === 204){
  //     alert('Xóa Thành Công');
  //   }
  // }

  return (
    <Container>
      <Header />
      <LeftNavbar />
      <div
        className="container"
        style={{
          marginLeft: "280px",
          marginRight: "0",
          display: "flex",
          flex: "flex-end",
          flexDirection: "column",
        }}
      >
        <h1>Danh sách đơn hàng </h1>
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
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Payment Type</th>
              <th style={{ textAlign: "center" }}>Payment Status</th>
              <th style={{ textAlign: "center" }}>Total Amount</th>
            </tr>
          </tbody>
          {orders.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td>{index}</td>
                <td>{item.user.name}</td>
                <td>{item.user.email}</td>
                <td>{item.user.phoneNumber}</td>
                <td>{item.paymentType}</td>
                <td>{item.paymentStatus}</td>
                <td>{item.totalAmount}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </Container>
  );
}

export default OrderList;
