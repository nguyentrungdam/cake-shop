import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  .active {
    color: #ff01bd !important;
  }
  position: fixed;
  transform: translateZ(0);
  z-index: 100;
  background: #fff;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: 2px solid #ccc;
  height: 100vh;
  width: 15rem;
  a {
    text-decoration: none;
  }
`;

const NavbarWrapper = styled.div`
  min-width: inherit;
  height: inherit;
  z-index: 400;
  background: transparent;
  position: absolute;
`;

const ContainerNavbar = styled.nav`
  width: inherit;
  min-width: 265px;
  min-height: 1200px;
  color: #000;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px 20px 25px;
  justify-content: space-between;
`;

const NavbarItems = styled.div``;

const ItemTitle = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-style: normal;
  font-weight: 700;
  margin-left: 10px;
`;

const NavbarItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover ${ItemTitle} {
    cursor: pointer;
    color: #ff01bd;
  }
`;

const ItemImg = styled.img`
  width: 18px;

  &:hover {
    cursor: pointer;
  }
`;
const LeftNavbar = () => {
  const [active, setActive] = useState(" ");
  const handleActive = (e) => {
    e.preventDefault();
    setActive("active");
  };
  return (
    <Container>
      <NavbarWrapper>
        <ContainerNavbar>
          <NavbarItems>
            <NavbarItem>
              <Link to="/admin">
                <ItemImg src="https://img.icons8.com/material-outlined/512/dashboard-layout.png" />
                <ItemTitle>Dashboard</ItemTitle>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link to="/listproduct">
                <ItemImg src="https://img.icons8.com/ios/2x/grocery-shelf.png" />
                <ItemTitle>Quản lý sản phẩm</ItemTitle>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link to="/listUser">
                <ItemImg src="https://img.icons8.com/ios/2x/conference-call.png" />
                <ItemTitle>Quản lý người dùng</ItemTitle>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/listcategory">
                <ItemImg src="https://img.icons8.com/ios/2x/diversity.png" />
                <ItemTitle>Quản lý phân loại</ItemTitle>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/listorder">
                <ItemImg src="https://img.icons8.com/material-rounded/512/favorite-cart.png" />
                <ItemTitle>Quản lý đơn hàng</ItemTitle>
              </Link>
            </NavbarItem>

            {/* <NavbarItem>
              <ItemImg src="https://scontent.xx.fbcdn.net/v/t1.15752-9/293399506_580204216928459_2370290565086217206_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=zg20Hjb_cx0AX_t6rzE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLmU3w5cxAnnbqteJ6I-wH5Y_jxmPVliTwuVnTwTuOozg&oe=6311F30C" />
              <ItemTitle>Xem thống kê</ItemTitle>
            </NavbarItem> */}
          </NavbarItems>
        </ContainerNavbar>
      </NavbarWrapper>
    </Container>
  );
};

export default LeftNavbar;
