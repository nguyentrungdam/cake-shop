import React from "react";
import styled from "styled-components";
import { KeyboardArrowRight } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, signout } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUser = () => {
      dispatch(isUserLoggedIn());
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <Container>
      <NavbarWrapper>
        <ContainerNavbar>
          <LeftNav>
            <LogoHeader src="https://kenhquanly.shopee.vn/images/logo_32_vn.df7ecbd0.png" />

            <KeyboardArrowRight style={CssKeyboardArrowRight} />

            <PagePresent>Trang Chủ</PagePresent>
          </LeftNav>
          <CenterSpace></CenterSpace>
          <RightNav>
            {isAuthenticated ? (
              <UserWrapper>
                <UserImg src="https://www.kindpng.com/picc/m/10-109847_admin-icon-hd-png-download.png" />
                <UserName>{user.name}</UserName>
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
            <HeaderIcon
              style={{ margin: "0 15px 0 15px" }}
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/294873161_772782744034389_5604466774440638221_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=RtUGTbBuklEAX9IXnpg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIYe6P85mQWO7HD_kt0D46EY370rgo6ieUYGMqZFnfkuw&oe=631214AA"
            />
            <HeaderIcon src="https://scontent.xx.fbcdn.net/v/t1.15752-9/291499610_428115899243520_6903573953858751534_n.png?stp=cp0_dst-png&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1fRK8u_OOOsAX8zrIg7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIpx-vnOFegxFZXHtIctWzXEMRNZgvKp7fKi6kcM0nXpA&oe=6310904D" />
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
const LogoHeader = styled.img`
  width: 180px;
  cursor: pointer;
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

  &::after {
    content: "";
    height: 1.4rem;
    width: 0;
    border-right: 2px solid #ccc;
    position: absolute;
    right: -15px;
    top: calc(50%-10px);
  }
`;

const HeaderIcon = styled.img`
  width: 16px;
  cursor: pointer;
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
    border: 10px solid transparent;
    border-bottom: 10px solid #ccc;
    top: -20px;
    right: 20px;
  }
  &:hover&::after {
    border-bottom: 10px solid #5ab9c1;
  }
`;

const SubA = styled.a`
  padding: 7px 12px;
  text-decoration: none;
  display: block;
  text-align: right;
  &:hover {
    border-radius: 3px;
    background-color: #5ab9c1;
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
