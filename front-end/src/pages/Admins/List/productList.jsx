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
  const productId = products._id;

  useEffect(() => {
    const fetchData = () => {
      dispatch(getProducts()).unwrap();
    };
    fetchData();
  }, [dispatch]);

  const handleDeleteProduct = async (id) => {
    // e.preventDefault();
    const response = await dispatch(
      deleteProductById({ productId: id })
    ).unwrap();
    // console.log(response);
    if (response.status === 202) {
      alert("Xóa Thành Công");
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
          <Link to="/addproduct">
            <a
              style={{
                color: "red",
                fontsize: "40px",
              }}
            >
              +Thêm sản phẩm
            </a>
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
              <th style={{ textAlign: "center" }}>Sale</th>
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
                <td style={{ textAlign: "center" }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.price}</td>
                <td style={{ textAlign: "center" }}>{item.discountPercent}%</td>
                <td style={{ textAlign: "center" }}>
                  {item.variants?.[0].quantity}
                </td>
                <td style={{ textAlign: "center" }}>
                  <img style={{ width: 40 }} src={item.productPictures?.[0]} />
                </td>
                <td>
                  <a
                    style={{ textAlign: "center" }}
                    className="badge badge-danger"
                    onClick={() => handleDeleteProduct(item._id)}
                  >
                    Delete
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Link to={`/editproduct/${item.slug}`}>
                    <a
                      className="badge badge-info"
                      style={{ backgroundColor: "black" }}
                    >
                      Xem Chi Tiết
                    </a>
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
