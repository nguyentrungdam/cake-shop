import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { getCategories } from "../../../slices/categorySlice";

const Container = styled.div``;
function CategoryList() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    const fetchData = () => {
      dispatch(getCategories()).unwrap();
    };
    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Header name="Phân loại" />
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
            to="/addcategory"
            style={{
              color: "red",
              fontsize: "40px",
            }}
          >
            +Thêm phân loại
          </Link>
        </span>
        <h1>Thông tin người dùng </h1>
        <Table
          style={{
            width: "50%",
          }}
          className="table table-bordered"
        >
          <tbody className="thead-dark">
            <tr>
              <th style={{ textAlign: "center" }}>Id</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center", width: "100px" }}>Delete</th>
            </tr>
          </tbody>
          {categories.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index}</td>
                <td>{item.Name}</td>
                <td>
                  <a
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      padding: "10px",
                      marginLeft: "7px",
                    }}
                    className="badge badge-danger"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </Container>
  );
}

export default CategoryList;
