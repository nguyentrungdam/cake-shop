import React from "react";
import styled from "styled-components";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../slices/accountSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = (props) => {
  const { account, isAuthenticated } = useSelector((state) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <NavbarWrapper>
        <ContainerNavbar>
          <LeftNav>
            <div className="header-item--logo">
              <a href="/" className="logo-link">
                <h1 className="site-header__logo">Cakes By Damn</h1>
              </a>
            </div>

            <KeyboardArrowRight style={CssKeyboardArrowRight} />

            <PagePresent>{props.name}</PagePresent>
          </LeftNav>
          <CenterSpace></CenterSpace>
          <RightNav>
            {isAuthenticated ? (
              <UserWrapper>
                <UserImg src="https://www.kindpng.com/picc/m/10-109847_admin-icon-hd-png-download.png" />
                <UserName>{account.FullName}</UserName>
                <DropDownContent>
                  <SubA
                    onClick={() => dispatch(signout(), navigate("/signin"))}
                  >
                    Đăng Xuất
                  </SubA>
                </DropDownContent>
              </UserWrapper>
            ) : (
              ""
            )}
          </RightNav>
        </ContainerNavbar>
      </NavbarWrapper>
    </Container>
  );
};
//================CSS=======================
const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  z-index: 500;
  background: #fff;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0.5px 0.5px 5px 0.5px #ccc;
  .logo-link {
    text-decoration: none;
  }
  .header-item--logo {
    -webkit-box-flex: 0 0 260px;
    -ms-flex: 0 0 260px;
    flex: 0 0 200px;
    min-width: 130px;
    max-width: 50%;
    display: flex;
    align-items: center;
  }

  .site-header__logo {
    margin-right: 13.33333px;
    text-align: left;
    font-size: 1.27059em;
    margin: 13.33333px 0;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
    color: white;
    background-color: black;
    padding: 10px;
    user-select: none;
    cursor: pointer;
  }
`;

const NavbarWrapper = styled.div`
  min-width: inherit;
  height: inherit;
  z-index: 400;
  background: transparent;
  position: relative;
  border-bottom: 2px solid #ccc;
`;

const ContainerNavbar = styled.nav`
  width: inherit;
  max-width: 1600px;
  color: #000;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 15px 0px;
  justify-content: space-between;
`;

const LeftNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PagePresent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;

  color: rgba(0, 0, 0, 0.75);
`;
const CenterSpace = styled.div`
  flex: 1;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const UserImg = styled.img`
  fill: #fff;
  width: 40px;
  height: 40px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
`;

const UserName = styled.span`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  margin: 0 15px;
  position: relative;
`;

const CssKeyboardArrowRight = {
  height: "30px",
  width: "35px",
  color: "gray",
};

const DropDownContent = styled.div`
  margin-top: 78px;
  display: none;
  color: black;
  position: absolute;
  right: 0px;
  background-color: #ccc;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 3px;
  .link {
    color: currentColor;
    text-decoration: none;
    background-color: transparent;
    text-transform: none;
  }
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border: 4px solid transparent;
    border-bottom: 4px solid #ccc;
    top: -8px;
    right: 20px;
  }
  &:hover&::after {
    border-bottom: 4px solid #ff01bd;
  }
`;

const SubA = styled.a`
  padding: 7px 12px;
  text-decoration: none;
  display: block;
  text-align: right;
  &:hover {
    border-radius: 3px;
    background-color: #ff01bd;
    color: #fff !important;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  text-transform: none;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #eda87f;
  }

  &:hover ${DropDownContent} {
    display: block;
  }
`;

export default Header;
