import React, { useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import {
  HelpOutline,
  KeyboardArrowDown,
  Language,
  NotificationsNone,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
//====================
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, signout } from "../slices/authSlice";
import "../css/header.css";

const HeaderMini = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUser = () => {
      dispatch(isUserLoggedIn());
    };
    fetchUser();
  }, [isAuthenticated]);

  const search =
    searchParams.get("search") === null ? "" : searchParams.get("search");
  return (
    <ShopeeTop>
      <NavbarWrapper>
        <ContainerNavbar>
          <LeftNavbar>
            <span>
              <a
                className="LeftNavbarLinkLeft"
                href="https://banhang.shopee.vn/"
              >
                Kênh Người Bán
              </a>
            </span>

            <span>
              <a
                className="LeftNavbarLinkRight"
                href="https://shopee.vn/m/sell-on-shopee"
              >
                Trở thành Người bán Shopee
              </a>
            </span>

            <NavbarQr>
              <span className="QrLink">
                Tải ứng dụng
                <HeaderQr className="HeaderQr">
                  <HeaderQrImg src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"></HeaderQrImg>
                  <HeaderApps>
                    <HeaderDownloadImg
                      style={{ marginLeft: "11px" }}
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                    ></HeaderDownloadImg>
                    <HeaderDownloadImg
                      style={{ marginRight: "11px" }}
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                    ></HeaderDownloadImg>
                    <HeaderDownloadImg
                      style={{ margin: "8px 0 0 11px", height: "13px" }}
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                    ></HeaderDownloadImg>
                  </HeaderApps>
                </HeaderQr>
              </span>
            </NavbarQr>
            <ConnectNavbar>Kết nối</ConnectNavbar>
            <SocialNavbar>
              <span>
                <a
                  className="FacebookLink"
                  href="https://facebook.com/ShopeeVN"
                ></a>
              </span>
              <span>
                <a
                  className="InstagramLink"
                  href="https://instagram.com/Shopee_VN"
                ></a>
              </span>
            </SocialNavbar>
          </LeftNavbar>

          <CenterNavbar></CenterNavbar>

          <RightNavbar>
            <Link to="/user/notifications" className="SupportNavbar">
              <SupportIcon>
                <NotificationsNone
                  style={{
                    overflow: "hidden",
                    width: "1.15rem",
                    height: "1.15rem",
                    fill: "currentColor",
                    position: "relative",
                    display: "inline-block",
                    pointerEvents: "none",
                    color: "currentColor",
                    cursor: "pointer",
                    userSelect: "none",
                    listStyle: "none",
                  }}
                />
              </SupportIcon>
              <SupportTitle>Thông báo</SupportTitle>
            </Link>

            <Link className="SupportNavbar" to="/support">
              <SupportIcon>
                <HelpOutline
                  style={{
                    overflow: "hidden",
                    width: "1.15rem",
                    height: "1.15rem",
                    fill: "currentColor",
                    position: "relative",
                    display: "inline-block",
                    pointerEvents: "none",
                    color: "currentColor",
                    cursor: "pointer",
                    userSelect: "none",
                    listStyle: "none",
                  }}
                />
              </SupportIcon>
              <SupportTitle>Hỗ Trợ</SupportTitle>
            </Link>

            <LanguageNavbar>
              <LanguageWrapper>
                <LanguageButton>
                  <LanguageItems>
                    <Language
                      style={{
                        overflow: "hidden",
                        width: "1.15rem",
                        height: "1.15rem",
                        fill: "currentColor",
                        position: "relative",
                        display: "inline-block",
                        pointerEvents: "none",
                        color: "currentColor",
                        cursor: "pointer",
                        userSelect: "none",
                        listStyle: "none",
                      }}
                    />
                    <LanguageTitle>Tiếng Việt</LanguageTitle>
                    <KeyboardArrowDown
                      style={{
                        overflow: "hidden",
                        width: "1.25rem",
                        height: "1.25rem",
                        fill: "currentColor",
                        position: "relative",
                        display: "inline-block",
                        pointerEvents: "none",
                        color: "currentColor",
                        cursor: "pointer",
                        userSelect: "none",
                        listStyle: "none",
                      }}
                    />
                  </LanguageItems>
                </LanguageButton>
              </LanguageWrapper>
            </LanguageNavbar>

            {isAuthenticated ? (
              <UserWrapper>
                <UserImgWrapper>
                  <UserImg src={user.profilePicture} alt="userPhoto"></UserImg>
                </UserImgWrapper>
                <UserName> {user.name} </UserName>
                <ConnectUserContent />
                <DropDownContent>
                  <Link className="link" to="/user/account/profile">
                    <span className="SubA">Tài Khoản Của Tôi</span>
                  </Link>
                  <Link className="link" to="/user/purchase">
                    <span className="SubA">Đơn Mua</span>
                  </Link>
                  <span
                    className="SubA"
                    onClick={() => dispatch(signout(), navigate("/"))}
                  >
                    Đăng Xuất
                  </span>
                </DropDownContent>
              </UserWrapper>
            ) : (
              <>
                <span className="RegisterNavbar">
                  <Link className="link" to="/signup">
                    Đăng ký
                  </Link>
                </span>

                <SeparatorNavbar></SeparatorNavbar>
                <span className="LoginNavbar">
                  <Link className="link" to="/signin">
                    Đăng Nhập
                  </Link>
                </span>
              </>
            )}
          </RightNavbar>
        </ContainerNavbar>
      </NavbarWrapper>
    </ShopeeTop>
  );
};

//========== styled components =========================
//========== bonus after =============

const ConnectUserContent = styled.div`
  top: 18px;
  position: absolute;
  width: 60px;
  height: 20px;
  background-color: transparent;
`;

const DropDownContent = styled.div`
  margin-top: 160px;
  display: none;
  color: black;
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 160px;
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
    border-bottom: 10px solid #f9f9f9;
    top: -20px;
    right: 20px;
  }
  &:hover&::after {
    border-bottom: 10px solid #f9f9f9;
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

const UserImgWrapper = styled.div`
  width: 1.375rem;
  height: 1.375rem;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  border: 0.0625rem solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  text-transform: none;
  cursor: pointer;
`;

const UserImg = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
`;

const UserName = styled.div`
  max-width: 9.375rem;
  padding-left: 0.3125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
`;

//========== start =============

const ShopeeTop = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  z-index: 100;
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavbarWrapper = styled.div`
  min-width: inherit;
  height: 2.125rem;
  z-index: 400;
  background: transparent;
  position: relative;
`;

const ContainerNavbar = styled.nav`
  width: inherit;
  max-width: 1200px;
  color: #fff;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const LeftNavbar = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarQr = styled.div`
  margin-left: 0.625rem;
  display: flex;
  position: relative;
  overflow: visible;
  outline: 0;
  color: #fff;
`;

const ConnectNavbar = styled.div`
  margin-left: 0.625rem;
  display: flex;
  padding-right: 0;
  border: 0;
  color: #fff;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 450;
  padding: 0.25rem;
  position: relative;
  overflow: visible;
  outline: 0;

  &::after {
    content: "";
    height: 0.9375rem;
    width: 0;
    border-left: 1px solid hsla(0, 0%, 100%, 0.22);
    border-right: 1px solid hsla(0, 0%, 100%, 0.22);
    position: absolute;
    left: -6px;
    top: calc(50% - 7px);
  }
`;

const SocialNavbar = styled.div`
  border: 0;
  display: flex;
  padding-right: 0;
  color: #fff;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.25rem;
  position: relative;
  overflow: visible;
  outline: 0;
`;

const CenterNavbar = styled.div`
  flex: 1;
  color: #fff;
`;

const RightNavbar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  color: #fff;
  margin: 0;
  height: 2.125rem;
`;

const SupportIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.3125rem;
  margin-left: 0.5rem;
  color: currentColor;
  cursor: pointer;
  user-select: none;
  list-style: none;
`;

const SupportTitle = styled.span`
  cursor: pointer;
  user-select: none;
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 450;
  font-size: 0.8125rem;
  color: currentColor;
  text-transform: capitalize;
`;

const LanguageNavbar = styled.li`
  cursor: pointer;
  padding: 0;
  user-select: none;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  color: currentColor;
  list-style: none;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7) !important;
  }
`;

const LanguageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  color: currentColor;
  list-style: none;
`;

const LanguageButton = styled.div`
  list-style: none;
  color: currentColor;
  user-select: none;
  cursor: pointer;
`;

const LanguageTitle = styled.span`
  font-weight: 450;
  color: #fff;
  cursor: pointer;
  user-select: none;
  list-style: none;
  font-size: 0.8125rem;
  margin: 0 0.3125rem;
`;

const LanguageItems = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4375rem 0.625rem;
  color: #fff;
  cursor: pointer;
  user-select: none;
  list-style: none;

  &:hover,
  &:hover ${LanguageTitle} {
    color: hsla(0, 0%, 100%, 0.7) !important;
  }
`;

const SeparatorNavbar = styled.div`
  border-right: 1px solid hsla(0, 0%, 100%, 0.4);
  height: 0.8125rem;
  list-style: none;
  color: #fff;
`;

//========== Xử lý chỗ download =============

const HeaderQr = styled.div`
  width: 186px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 118%;
  border-radius: 2px;
  display: none;

  &::before {
    position: absolute;
    left: 0;
    top: -16px;
    width: 100%;
    height: 20px;
    content: "";
    display: block;
  }
`;

const HeaderQrImg = styled.img`
  width: 97%;
  padding: 1px;
`;

const HeaderApps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const HeaderDownloadImg = styled.img`
  height: 16px;
`;

export default HeaderMini;
