import React, { useEffect, useState } from "react";
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

import { getProductsSearched } from "../slices/productSlice";
import "../css/header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [text, setText] = useState("");
  const [productList, setProductList] = useState([]);
  const { search } = useSelector((state) => state.product);


  
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUser = () => {
      dispatch(isUserLoggedIn());
    };
    fetchUser();
  }, [isAuthenticated]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await dispatch(getProductsSearched(text)).unwrap()
      const { products } = res.data
      
      console.log(products);
    };
    getProducts();
  },[text]);


   

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await dispatch(getProductsSearched(text)).unwrap()
  //     setProductList(res.data);
  //   };
  //   getProducts();
  //   // console.log(productList);
  // },[text]);
  // useEffect(() => {
  //   console.log(productList);
  // },[productList]);


  // const search =
  //   searchParams.get("search") === null ? "" : searchParams.get("search");
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

      <ContainerWrapper>
        <ContainerWithSearh>
          <a className="HeaderLogo" href="/">
            <LogoWrapper>
              <LogoImg src="https://storage.googleapis.com/ops-shopee-files-live/live/affiliate-blog/2019/05/logo-full-white.png"></LogoImg>
            </LogoWrapper>
          </a>

          <SearchSection>
            <WrapSearch>
            <SearchBar>
              <SearchInputForm action="searchhome">
                <SearchBarMain>
                  <SearchInput
                    defaultValue={text}
                    value={text}
                    name="search"
                    type="text"
                    placeholder="Bộ sưu tập sản phẩm"
                    onChange={(e) => setText(e.target.value)}
                  ></SearchInput>
                 
                </SearchBarMain>
                
                <SearchButton type="submit">
                  <Search />
                </SearchButton>
              </SearchInputForm>
             
            </SearchBar>
   
            {
              
            search.map((item) => ( 
           
            <LI>
                 <Link
             
              className="list_product_a_hover"
              style={{ textDecoration: "none", backgroundColor: "transparent" }}
              to={`/product/${item.slug}`}
            >  
              <A>
                <SpanImage>
                  <Image alt="" src={item.productPictures[0]} />
                </SpanImage>
              <ItemDrop >{item.name}</ItemDrop>
              <SpanPrice>{item.price}đ</SpanPrice>
              </A>
              </Link>
            </LI>     
           
            )) 
        } 
            </WrapSearch>
            <SearchBottom>
              <SearchBottomItems>
                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Dép
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Áo Phông
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Váy
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Dép Nữ
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Áo Croptop
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Túi Xách Nữ
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Ba Lô
                  </a>
                </span>

                <span>
                  <a className="SearchItemLink" style={{ marginRight: "5px" }}>
                    Áo Khoác
                  </a>
                </span>
              </SearchBottomItems>
            </SearchBottom>
          </SearchSection>

          

        

          <CartWrapper>
            <CartTarget>
              <CartButton>
                <CartDrawContainer>
                  <span className="CartLink">
                    <Link to="/cart">
                      <span className="CartImg">
                        <ShoppingCartOutlined />
                      </span>
                      {cartItems.length === 0 ? (
                        ""
                      ) : (
                        <CartQuantity>{cartItems.length}</CartQuantity>
                      )}
                    </Link>
                  </span>
                </CartDrawContainer>
              </CartButton>
            </CartTarget>
          </CartWrapper>
        </ContainerWithSearh>
      </ContainerWrapper>
    </ShopeeTop>
    
  );
};

//========== styled components =========================

const LI = styled.li`
  display: block;
    background: #fff;
    overflow: hidden;
    list-style: none;
    border-bottom: 1px dotted #ccc;
    float: none;
`;
const A = styled.a`
 position: relative;
    display: block;
    overflow: hidden;
    padding: 6px;
    text-decoration: none;
    color: #337ab7;
`;
const SpanImage= styled.span`
     float: left;
    width: 50px;
    height: 50px;
    margin: 0 6px 0 0;
    display: block;
    padding: 4px;
    transition: border .2s ease-in-out;
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
`;
const Image= styled.img`
     margin: 5%;
    min-width: 90%;
    max-width: 90%;
    display: block;
    transition: opacity 0.15s;
    opacity: 1;
    height: auto;
    vertical-align: middle;
`;

//========== bonus after =============
const CartQuantity = styled.div`
  top: -0.6875rem;
  right: 0.5rem;
  position: absolute;
  border-radius: 2.75rem;
  min-width: 1.8rem;
  line-height: 1.2em;
  padding: 0 0.3125rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.2rem;
  border: 0.125rem solid #ee4d2d;
  color: #ee4d2d;
  background-color: #fff;
  margin-right: -0.875rem;
`;

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

const WrapSearch = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemDrop = styled.div`
     display: block;
    width: 100%;
    line-height: 1.3em;
    color: #333;
    font-size: 14px;
    text-align: left;
    margin-top: 10px !important;
    font-weight: 500;
    position: relative;
    white-space: pre-wrap;
`

const SpanPrice = styled.span`
    font-size: 14px;
    margin-top: 8px;
    color: #e32124;
    font-weight: bold;
    white-space: nowrap;
`
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


const TitleText = styled.h3`
  background: #f2f2f2;
    padding: 4px;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 400;
    color: #333333;
    font-size: 24px;
    line-height: 24px;
    margin: 0 0 13px 0;
`;


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

const NotificationNavbar = styled.li`
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
    color: hsla(0, 0%, 100%, 0.7);
    cursor: pointer;
  }
`;

const NotiWrapper = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  color: currentColor;
  list-style: none;
`;

const NotiButton = styled.div`
  cursor: pointer;
  user-select: none;
  color: currentColor;
  list-style: none;
  text-align: -webkit-match-parent;
`;

const NotiTitle = styled.span`
  margin-left: 0.3125rem;
  font-weight: 450;
  font-size: 0.8125rem;
  text-transform: capitalize;
  pointer-events: none;
  color: currentColor;
  cursor: pointer;
  user-select: none;
  list-style: none;
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

const ContainerWrapper = styled.div`
  min-width: inherit;
  background: transparent;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  box-sizing: border-box;
  z-index: 300;
`;

const ContainerWithSearh = styled.div`
  width: inherit;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: flex;
  height: 5.3125rem;
  justify-content: space-between;
  padding: 1rem 0 0.625rem;
`;

const LogoWrapper = styled.div`
  padding: 2px;
  margin: -2px;
  border-radius: 2px;
  cursor: pointer;
  color: -webkit-link;
`;

const LogoImg = styled.img`
  width: 162px;
  height: 50px;
  display: block;
  overflow: hidden;
  color: #fff;
  fill: none;
  position: relative;
  cursor: pointer;
  fill-rule: evenodd;
  transform-origin: 0px 0px;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 840px;
  position: relative;
`;

const SearchBar = styled.div`
  width: 100%;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);
  --focus-indicator-spacing: 3px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 0.1875rem;
  border-bottom: 1px solid #e7e3e3;
  border-radius: 2px;
  background: #fff;
`;

const SearchBarMain = styled.div`
  display: flex;
  flex: 1;
  --focus-indicator-spacing: 3px;
`;

const SearchInputForm = styled.form`
  background-color: #fff;
  border-color: #fff;
  display: flex !important;
  flex: 1;
  box-sizing: border-box;
  padding: 0 0.625rem;
  position: relative;
  margin-top: 0em;
  --focus-indicator-spacing: 3px;
`;

const SearchInput = styled.input`
  display: flex !important;
  flex: 1 !important;
  align-items: center !important;
  outline: none !important;
  border: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  line-height: normal !important;
  color: inherit !important;
  font: inherit !important;
  --focus-indicator-spacing: 3px !important;
`;

const SearchButton = styled.button`
  margin-right: -10px;
  position: relative;
  overflow: visible;
  outline: 0;
  background: #fb5533;
  color: #fff;
  height: 34px;
  padding: 0 15px;
  min-width: 60px;
  max-width: 190px;
  display: inline-flex;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  flex-direction: column;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 9%);
  border-radius: 2px;
  border: 0;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background: #fb6445;
  }
`;

const SearchBottom = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

const SearchBottomItems = styled.div`
  flex-wrap: wrap;
  position: relative;
  overflow-y: clip;
  margin-top: 0.1875rem;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: 450;
  line-height: 1.5rem;
  width: 100%;
  display: flex;
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 5px;
  margin: 0 10px;
  box-sizing: border-box;
`;

const CartTarget = styled.div`
  position: relative;
`;

const CartButton = styled.div``;

const CartDrawContainer = styled.div`
  padding: 10px 0;
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

export default Header;
