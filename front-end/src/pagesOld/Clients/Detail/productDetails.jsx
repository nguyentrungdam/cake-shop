import React from "react";
import { createRef } from "react";
import { useState, useEffect } from "react";
import ProductReview from "./productReview";
import ProductEvaluate from "./productEvaluate";
import { Box } from "@mui/material";
import "../../../css/productDetail.css";
import Header from "../../../components/header";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import FooterMini from "../../../components/footerMini";
import { getProductBySlug } from "../../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../slices/cartSlice";
import { HelpOutline, AddShoppingCart } from "@mui/icons-material";
import { Alert } from "@mui/material";

function ProductDetail() {
  const myRef = createRef();
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [compareQuantity, setCompareQuantity] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const { productDetail } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [err, setErr] = useState("");
  const [errIcon, setErrIcon] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let idProduct = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getProductBySlug(idProduct.id)).unwrap();
      setCartItem({ ...cartItem, product: response.data.product._id });
    };

    fetchData();
    //console.log(productDetail);
  }, []);

  const [cartItem, setCartItem] = useState({
    product: "",
    variant: "",
    quantity: 1,
  });

  const handleIncrement = () => {
    if (cartItem.quantity === compareQuantity) {
      setErr("Số lượng tối đa");
      setErrIcon("error");
    } else if (!cartItem.variant) {
      setErr("Vui lòng chọn phân loại hàng");
      setErrIcon("warning");
    } else if (cartItem.quantity < compareQuantity) {
      setCartItem({
        ...cartItem,
        quantity: cartItem.quantity + 1,
      });
    }
  };

  const handleDecrement = () => {
    if (cartItem.quantity > 0) {
      setCartItem({ ...cartItem, quantity: cartItem.quantity - 1 });
    }
  };

  const handleChangeColor = (value, index) => {
    setIsSelected(value);
    setIsActive(true);
    setCartItem({ ...cartItem, variant: value, quantity: 1 });
    const a = (value = productDetail.variants?.[index].quantity);
    setCompareQuantity(a);
  };

  // Handle add cart
  const handleAddCart = async () => {
    if (!cartItem.variant) {
      setErr("Vui lòng chọn phân loại hàng");
      setErrIcon("warning");
    } else if (cartItem.quantity === 0) {
      setErr("Vui lòng chọn lại số lượng");
      setErrIcon("warning");
    } else if (!isAuthenticated) {
      navigate("/signin");
    } else {
      const cartObject = cartItems.find(
        (item) =>
          item.product?._id === cartItem.product &&
          item.variant?._id === cartItem.variant
      );
      let newCartItem = {};
      if (cartObject) {
        newCartItem = {
          product: cartObject.product._id,
          variant: cartObject.variant._id,
          quantity: cartItem.quantity + cartObject.quantity,
        };
      } else {
        setOpenModal(true);
        newCartItem = {
          product: cartItem.product,
          variant: cartItem.variant,
          quantity: cartItem.quantity,
        };
      }
      const res = await dispatch(addToCart({ cartItem: newCartItem }));
      if (res.error) {
        setErr("Đã có lỗi xảy ra vui lòng thử lại");
        setErrIcon("error");
        return;
      }
    }
  };

  // Handle buy now
  const handleBuyNow = async () => {
    if (!cartItem.variant || cartItem.quantity === 0) {
      setErr("Vui lòng chọn phân loại hàng");
      setErrIcon("warning");
    } else if (!isAuthenticated) {
      navigate("/signin");
    } else {
      const cartObject = cartItems.find(
        (item) =>
          item.product?._id === cartItem.product &&
          item.variant?._id === cartItem.variant
      );
      let newCartItem = {};
      if (cartObject) {
        newCartItem = {
          product: cartObject.product._id,
          variant: cartObject.variant._id,
          quantity: cartItem.quantity + cartObject.quantity,
        };
      } else {
        navigate("/cart");
        newCartItem = {
          product: cartItem.product,
          variant: cartItem.variant,
          quantity: cartItem.quantity,
        };
      }
      const res = await dispatch(addToCart({ cartItem: newCartItem }));
      if (res.error) {
        setErr("Đã có lỗi xảy ra vui lòng thử lại");
        setErrIcon("error");
        return;
      }
    }
  };

  const handleGetImg = (index) => {
    setTempImgSrc(index);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container__productDetail">
        <div className="app">
          <div className="details">
            <div className="big-img">
              <img
                src={productDetail.productPictures?.[tempimgSrc]}
                alt="Image"
              />
              <div className="thumb" ref={myRef}>
                <div className="img-wrapper">
                  {productDetail.productPictures?.map((img, index) => (
                    <div key={index}>
                      <img
                        className="imgMini"
                        src={img}
                        alt="img"
                        onClick={() => handleGetImg(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="row">
                <h2>{productDetail.name}</h2>
              </div>
              <div className="flex flex-column _4ZZZt9">
                <div className="flex items-center">
                  <div className="flex items-center X1ceUd">
                    <div className="CDN0wz">
                      {Number(productDetail.price).toLocaleString("vi")}₫
                    </div>
                    <div className="flex items-center">
                      <div className="pmmxKx">
                        {Number(
                          (productDetail.price *
                            (100 - productDetail.discountPercent)) /
                            100
                        ).toLocaleString("vi")}
                        ₫
                      </div>
                      <div className="lTuS3S">
                        Giảm {productDetail.discountPercent}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dfsdfsdf">
                  <img
                    className="PvQTP"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/293697941_3255590604709816_7725950073974030837_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ME8zZbeBUVEAX_Du-9j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI_sVvGkMzjWbGNhoqUk5x2wYHKwveuLBHmA6xxe5gLew&oe=6327035A"
                  ></img>
                  <div className="sgdsfufis">
                    <div className="fTn0aD">
                      Gì Cũng Rẻ
                      <HelpOutline
                        style={{
                          marginLeft: "10px",
                          stroke: "#767676",
                          fill: "#767676",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    </div>

                    <div className="x1-hIE">
                      Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!
                    </div>
                  </div>
                </div>
              </div>

              <div className="shippingMethod">
                <p>Vận Chuyển: </p>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/1cdd37339544d858f4d0ade5723cd477.png"
                  alt=""
                  width="25"
                  height="15"
                  className="freeShip"
                />
                <p>Miễn phí vận chuyển </p>
              </div>

              <div className="colors-wrapper">
                <label className="font-color">
                  Phân Loại Hàng:
                  {productDetail.variants?.map((color, index) => (
                    <span key={color._id}>
                      <input
                        type="button"
                        className={
                          isSelected === color._id
                            ? "variantsSelected"
                            : "variants"
                        }
                        name="size"
                        id={index}
                        value={color.name}
                        required
                        disabled={color.quantity === 0 ? true : false}
                        onClick={() => handleChangeColor(color._id, index)}
                      />
                    </span>
                  ))}
                </label>
              </div>

              <Box className="product-quanlity">
                <Box className="product-quanlity__title">Số Lượng:</Box>

                <Box className="product-quanlity__groupInput">
                  <button onClick={handleDecrement} className="amount">
                    -
                  </button>
                  <input
                    message={cartItem.quantity}
                    type="text"
                    placeholder={cartItem.quantity}
                    className="text"
                  />
                  <button onClick={handleIncrement} className="amount">
                    +
                  </button>
                </Box>
              </Box>
              {err && (
                <Alert
                  variant="standard"
                  severity={errIcon}
                  className="alertNotification"
                >
                  {err}
                </Alert>
              )}
              <div className="buttonAddCart">
                <button
                  className={isActive ? "cartActive" : "cartNotActive"}
                  onClick={() => handleAddCart()}
                >
                  <AddShoppingCart
                    style={{ width: "18px", marginRight: "5px" }}
                  />
                  Thêm Vào Giỏ Hàng
                </button>
                {openModal && <Modal closeModal={setOpenModal} />}
                <button className="buy" onClick={() => handleBuyNow()}>
                  Mua Ngay
                </button>
              </div>
            </div>
          </div>
          <div className="separator__productDetail"></div>
          {<ProductEvaluate />}
          <div className="separator__productDetail"></div>
          {
            <Box className="productSpecification">
              <Box className="productSpecification__title">
                CHI TIẾT SẢN PHẨM
              </Box>
              <Box className="productSpecification__table">
                <table className="product__table">
                  <tbody>
                    <tr className="product__tr">
                      <td className="product__td1">Dịp</td>
                      <td className="product__td2">Hàng ngày</td>
                    </tr>
                    <tr className="product__tr">
                      <td className="product__td1">Chất lượng</td>
                      <td className="product__td2">Hàng chất lượng Việt Nam</td>
                    </tr>
                    <tr className="product__tr">
                      <td className="product__td1">Xuất xứ</td>
                      <td className="product__td2">Việt Nam</td>
                    </tr>
                    <tr className="product__tr">
                      <td className="product__td1">Đã bán</td>
                      <td className="product__td2">2.4 K</td>
                    </tr>
                    <tr className="product__tr">
                      <td className="product__td1">Kho hàng</td>
                      <td className="product__td2">69</td>
                    </tr>
                    <tr className="product__tr">
                      <td className="product__td1">Gửi từ</td>
                      <td className="product__td2">Đống Đa Hà Nội</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
          }
          {
            <Box className="productSpecification">
              <Box className="productSpecification__title">MÔ TẢ SẢN PHẨM</Box>
              <div className="productDes">
                <p>{productDetail.description}</p>
              </div>
            </Box>
          }
          <div className="separator__productDetail"></div>
          <ProductReview />
        </div>
      </div>
      <FooterMini />
    </React.Fragment>
  );
}

export default ProductDetail;
