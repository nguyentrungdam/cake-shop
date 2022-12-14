import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  width: 20rem;
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

const NavbarItems = styled.div`
  .active {
    color: red !important;
  }
  .inactive {
    color: blue !important;
  }
`;

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
  return (
    <Container>
      <NavbarWrapper>
        <ContainerNavbar>
          <NavbarItems>
            <NavbarItem>
              <NavLink
                to="/listproduct"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <ItemImg src="https://img.icons8.com/ios/2x/grocery-shelf.png" />
                <ItemTitle>Products Management</ItemTitle>
              </NavLink>
            </NavbarItem>

            <NavbarItem>
              <NavLink
                to="/listUser"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <ItemImg src="https://img.icons8.com/ios/2x/conference-call.png" />
                <ItemTitle>Users Management</ItemTitle>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                to="/listcategory"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <ItemImg src="https://img.icons8.com/ios/2x/diversity.png" />
                <ItemTitle>Categories Management</ItemTitle>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                to="/listorder"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <ItemImg src="https://img.icons8.com/material-rounded/512/favorite-cart.png" />
                <ItemTitle>Orders Management</ItemTitle>
              </NavLink>
            </NavbarItem>
          </NavbarItems>
        </ContainerNavbar>
      </NavbarWrapper>
    </Container>
  );
};

export default LeftNavbar;
