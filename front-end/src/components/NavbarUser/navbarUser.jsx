import React from "react";
import styled from "styled-components";
import ProfileNavbar from "./profileNavBar";
import MenuNavbar from "./menuNavbar";

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  left: 0;
  top: 0;
  width: 170px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`

const NavbarUser = () => {
    return(
      <Container>
        <ProfileNavbar/>
        <MenuNavbar/>
      </Container>
    )
}

export default NavbarUser