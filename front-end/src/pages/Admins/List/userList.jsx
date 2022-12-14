import React from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  deleteUserById,
  getUsersDisable,
  enableUserById,
} from "../../../slices/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function UserList() {
  const dispatch = useDispatch();
  const { users, usersdisable } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = () => {
      dispatch(getUsers()).unwrap();
      dispatch(getUsersDisable()).unwrap();
    };
    fetchData();
  }, [dispatch]);

  const handleDeleteUser = async (id) => {
    const response = await dispatch(deleteUserById(id)).unwrap();
    await dispatch(getUsers()).unwrap();
    await dispatch(getUsersDisable()).unwrap();
    if (response.status === 201) {
      notify("Disable User Successfully!");
    }
  };
  const handleEnableUser = async (id) => {
    const response = await dispatch(enableUserById(id)).unwrap();
    await dispatch(getUsersDisable()).unwrap();
    await dispatch(getUsers()).unwrap();
    if (response.status === 201) {
      notify("EnableEnable User Successfully!");
    }
  };

  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  return (
    <Container>
      <ToastContainer />
      <Header name="Users Management" />
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
        <h1>Users List </h1>
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
              <th style={{ textAlign: "center", width: "100px" }}>Disable</th>
            </tr>
          </tbody>
          {users?.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index}</td>
                <td>{item.FullName}</td>
                <td>{item.Email}</td>
                <td>{item.Role}</td>
                <td>
                  <span
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      padding: "10px",
                      marginLeft: "7px",
                    }}
                    className="badge badge-danger"
                    onClick={() => handleDeleteUser(item._id)}
                  >
                    Disable
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <h1 className="h1-disable-list">Users Disable List </h1>
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
              <th style={{ textAlign: "center", width: "100px" }}>Enable</th>
            </tr>
          </tbody>

          {usersdisable?.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: "center" }}>{index}</td>
                <td>{item.FullName}</td>
                <td>{item.Email}</td>
                <td>{item.Role}</td>
                <td>
                  <span
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      padding: "10px",
                      marginLeft: "7px",
                    }}
                    className="badge badge-danger"
                    onClick={() => handleEnableUser(item._id)}
                  >
                    Enable
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
const Container = styled.div`
  .h1-disable-list {
    margin-top: 30px;
  }
`;

export default UserList;
