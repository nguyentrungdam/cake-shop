import React, { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  filterProducts,
  disableProductById,
  getProductById,
} from "../../../slices/productSlice";
import ReactPaginate from "react-paginate";
import Loading from "../../../components/loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const limit = 8;
  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const { products, data, loading } = useSelector((state) => state.product);
  const obj = {
    page: nextPage,
  };
  useEffect(() => {
    // dispatch(getProducts(obj));
    dispatch(filterProducts(obj));
  }, [nextPage]);

  useEffect(() => {
    if (!data.success) return;
    setPageCount(Math.ceil(data.total / limit));
  }, [data, itemOffset]);

  const handlePageClick = async (event) => {
    const newOffset = (event.selected * limit) % products.length;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
    window.scrollTo(0, 100);
  };

  const handleDisableProduct = async (id) => {
    console.log(id);
    try {
      const response = await dispatch(disableProductById(id)).unwrap();
      await dispatch(getProducts(obj));
      if (response.status === 200) {
        notify("Disable product successfully!");
      }
    } catch (err) {
      notify(err);
    }
  };
  const handleViewEditProduct = async (id) => {
    console.log(id);
    try {
      const response = await dispatch(getProductById(id)).unwrap();
      if (response.status === 201) {
        navigate("/editproduct");
      }
    } catch (err) {
      notify(err);
    }
  };
  console.log(products);
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  return (
    <Container>
      <ToastContainer></ToastContainer>
      <Header name="Products Management" />
      <LeftNavbar />
      {loading ? (
        <Loading />
      ) : (
        <div
          className="container"
          style={{
            margin: "20px 0 0 370px",
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
              +Add product
            </Link>
          </span>

          <a href="/disablelistproduct" className="btn-shopnow">
            Disable Products List
          </a>
          <h1>Products List </h1>
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
                <th style={{ textAlign: "center" }}>Disable</th>
                <th style={{ textAlign: "center" }}>Detail</th>
                <th style={{ textAlign: "center" }}>Update</th>
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
                      margin: " 22px 6px 0px 8px",
                      cursor: "pointer",
                    }}
                    className="badge badge-danger"
                    onClick={() => handleDisableProduct(item._id)}
                  >
                    Disable
                  </td>
                  <td
                    className={
                      item.Quantity === 0 || item.isDelete
                        ? "disable-item "
                        : " "
                    }
                  >
                    <Link
                      to={`/product/${item._id}`}
                      className={
                        item.Quantity === 0 || item.isDelete
                          ? "disable-item-2 badge badge-info"
                          : "badge badge-info "
                      }
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        padding: "10px",
                        margin: "12px 0 0 6px",
                        color: "white",
                      }}
                    >
                      View Detail
                    </Link>
                  </td>
                  <td>
                    <span
                      onClick={() => handleViewEditProduct(item._id)}
                      className="badge badge-info"
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        padding: "10px",
                        margin: "12px 0 0 6px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      Update
                    </span>
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
              forcePage={nextPage - 1}
            />
          </div>
        </div>
      )}
    </Container>
  );
}
const Container = styled.div`
  .disable-item {
    cursor: not-allowed;
  }
  .disable-item-2 {
    pointer-events: none;
    opacity: 0.5;
  }
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
    width: 300px;
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

export default ProductList;
