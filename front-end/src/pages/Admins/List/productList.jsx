import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProductById } from "../../../slices/productSlice";

const Container = styled.div``;

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getProducts()).unwrap();
    };
    fetchData();
  }, [products]);

  const handleDeleteProduct = async (id) => {
    console.log(id);
    try {
      const response = await dispatch(deleteProductById(id)).unwrap();
      if (response.status === 201) {
        alert("Xóa Thành Công");
      }
    } catch (err) {
      alert("Vui lòng kiểm tra lại các thông tin cho chính xác !");
    }
  };

  return (
    <Container>
      <Header name="Sản phẩm" />
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
        <span>
          <Link
            to="/addproduct"
            style={{
              color: "red",
              fontsize: "40px",
            }}
          >
            +Thêm sản phẩm
          </Link>
        </span>
        <h1>Danh sách sản phẩm </h1>
        <Table
          style={{
            width: "90%",
          }}
          className="table table-bordered"
        >
          <tbody className="thead-dark">
            <tr>
              <th style={{ textAlign: "center" }}>Id</th>
              <th style={{ textAlign: "center" }}>Title</th>
              <th style={{ textAlign: "center" }}>Price</th>
              <th style={{ textAlign: "center" }}>Quantity</th>
              <th style={{ textAlign: "center" }}>Images</th>
              <th style={{ textAlign: "center" }}>Delete</th>
              <th></th>
            </tr>
          </tbody>
          {products.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index}</td>
                <td style={{ textAlign: "center" }}>{item.Name}</td>
                <td style={{ textAlign: "center" }}>{item.Price}</td>
                <td style={{ textAlign: "center" }}>{item.Quantity}</td>
                <td style={{ textAlign: "center" }}>
                  <img
                    style={{ width: "60px" }}
                    src={item.Image.Url}
                    alt={item.Name}
                  />
                </td>
                <td
                  style={{
                    textAlign: "center",
                    margin: " 22px 0 0 22px",
                    cursor: "pointer",
                  }}
                  className="badge badge-danger"
                  onClick={() => handleDeleteProduct(item._id)}
                >
                  Delete
                </td>
                <td>
                  <Link
                    to={`/product/${item._id}`}
                    className="badge badge-info"
                    style={{
                      backgroundColor: "black",
                      textAlign: "center",
                      padding: "10px",
                      margin: "12px 0 0 20px",
                    }}
                  >
                    Xem Chi Tiết
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </Container>
  );
}

export default ProductList;
