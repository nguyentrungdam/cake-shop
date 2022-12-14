import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { getCategories } from "../../../slices/categorySlice";
import EditCategory from "../Edit/EditCategory";

const Container = styled.div``;
function CategoryList() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  console.log(categories);
  const [showDetail, setShowDetail] = useState(false);
  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchData = () => {
      dispatch(getCategories()).unwrap();
    };
    fetchData();
  }, [dispatch]);

  const handleViewCategory = (item) => {
    setCategory(item);
    setShowDetail(true);
  };

  return (
    <Container>
      <EditCategory
        categoryItem={category}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      ></EditCategory>
      <Header name="Categories Management" />
      <LeftNavbar />
      <div
        className="container"
        style={{
          margin: "20px 0 0 380px",
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
            +Add Categorie
          </Link>
        </span>
        <h1>Categories List </h1>
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
              <th style={{ textAlign: "center", width: "100px" }}>Update</th>
            </tr>
          </tbody>
          {categories.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index}</td>
                <td>{item.Name}</td>
                <td>
                  <span
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      padding: "10px",
                      marginLeft: "7px",
                    }}
                    className="badge badge-danger"
                    onClick={() => handleViewCategory(item)}
                  >
                    Update
                  </span>
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
