import React, { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProductById } from "../../../slices/productSlice";
import ReactPaginate from "react-paginate";

function DisableProductList() {
  const [pageCount, setPageCount] = useState(0);
  const limit = 8;
  const [nextPage, setNextPage] = useState(1);

  const dispatch = useDispatch();
  const { products, data } = useSelector((state) => state.product);
  const obj = {
    page: nextPage,
  };
  useEffect(() => {
    dispatch(getProducts(obj));
  }, [nextPage]);

  useEffect(() => {
    if (!data.success) return;
    setPageCount(Math.ceil(data.total / limit));
  }, [data]);

  const handlePageClick = async (event) => {
    setNextPage(event.selected + 1);
    window.scrollTo(0, 100);
  };
  const handleDeleteProduct = async (id) => {
    console.log(id);
    try {
      const response = await dispatch(deleteProductById(id)).unwrap();
      await dispatch(getProducts(obj));
      if (response.status === 201) {
        alert("Xóa Thành Công");
      }
    } catch (err) {
      alert("Vui lòng kiểm tra lại các thông tin cho chính xác !");
    }
  };

  return (
    <Container>
      <Header name="Products Management" />
      <LeftNavbar />
      <div
        className="container"
        style={{
          margin: "20px 0 0 400px",
          display: "flex",
          flex: "flex-end",
          flexDirection: "column",
        }}
      >
        <a href="/listproduct" className="btn-shopnow">
          Back
        </a>
        <h1>Disable Products List </h1>
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
                      color: "white",
                    }}
                  >
                    View Detail
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <div className="contain-pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination"
            pageLinkClassName={pageCount === 1 ? `aa active` : "aa"}
            activeLinkClassName="active"
            pageClassName="lii"
            previousClassName="lii"
            nextClassName=" lii"
          />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .contain-pagination {
    padding: 0;
    margin-top: 50px;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  .aa {
    width: 40px;
    height: 40px;
    padding: 8px 14px;
  }
  .active {
    color: #ff01bd;
  }
  .lii {
    cursor: pointer;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 50%;
  }
  .lii:hover {
    background-color: pink;
  }
  .btn-shopnow {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    display: inline-block;
    user-select: none;
    -webkit-appearance: none;
    border-radius: 0;
    color: #fff;
    padding: 9px 20px;
    transition: padding-right 0.3s, background 0.3s;
    width: 100px;
    min-width: 90px;
    line-height: 1.42;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    letter-spacing: 0;
    margin: 20px 0 20px 0;
    background: #111
      url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow.png)
      no-repeat 150% 35%;
    background-size: 29px;
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow-2x.png);
  }
  .btn-shopnow:hover {
    padding-right: 55px;
    background-position: 91% 35%;
  }
`;

export default DisableProductList;
