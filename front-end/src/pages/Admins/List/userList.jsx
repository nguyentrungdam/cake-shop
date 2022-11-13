import React from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUserById } from "../../../slices/userSlice";

const Container = styled.div``;
function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = () => {
      dispatch(getUsers()).unwrap();
    };
    fetchData();
  }, [dispatch]);

  const handleDeleteUser = async (id) => {
    // e.preventDefault();
    const response = await dispatch(deleteUserById({ _id: id })).unwrap();
    // console.log(response);
    if (response.status === 204) {
      alert("Xóa Thành Công");
    }
  };

  return (
    <Container>
      <Header name="Người dùng" />
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
        <h1>Thông tin người dùng </h1>
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
              <th style={{ textAlign: "center" }}>Role</th>
              <th style={{ textAlign: "center", width: "100px" }}>Delete</th>
            </tr>
          </tbody>
          {users.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index}</td>
                <td>{item.FullName}</td>
                <td>{item.Email}</td>
                <td>{item.Role}</td>
                <td>
                  <a
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      padding: "10px",
                      marginLeft: "7px",
                    }}
                    className="badge badge-danger"
                    onClick={() => handleDeleteUser(item._id)}
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

export default UserList;
