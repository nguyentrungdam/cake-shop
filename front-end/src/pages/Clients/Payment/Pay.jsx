import React, { useState } from "react";
import { PaymentWrapper } from "../../../styles/payStyle";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOrderCOD } from "../../../slices/orderSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Pay = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const orderItems = location.state.selected;
  console.log(orderItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = orderItems.reduce((total, priceItem) => {
    total += priceItem.Product?.Price * priceItem.Quantity;
    return total;
  }, 0);

  const getItemsToPay = () => {
    const items = [];
    orderItems.map((item) => {
      items.push({
        productId: item.Product._id,
        productQuantity: item.Quantity,
        productSize: item.Product_Size,
      });
    });
    return items;
  };

  //handlePayment COD
  const handlePaymentCOD = async () => {
    const orderCOD = {
      orderEmail: email,
      orderFullName: name,
      orderAddress: address,
      orderPhone: phone,
      productList: getItemsToPay(),
    };

    try {
      var res = await dispatch(addOrderCOD(orderCOD)).unwrap();
      if (res.status === 200) {
        notify("Order successfully!");
        setTimeout(function () {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      alert(
        "Số lượng sản phẩm trong kho không đủ ! Vui lòng chọn sản phẩm khác"
      );
      // navigate(-1);
      return;
    }
  };

  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  return (
    <>
      <Header></Header>
      <ToastContainer />
      <PaymentWrapper>
        <div className="contact-info">
          <div className="header-item--logo">
            <h1 className="site-header__logo">Payment</h1>
          </div>
          <div className="main-contact">
            <div className="form-payment">
              <div className="form-wrapper">
                <div className="contact-infomation">
                  <div className="title">
                    <h2 className="h2">Contact information</h2>
                  </div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="email-click">
                    <input type="checkbox" className="checkbox " />
                    <div className="p">Email me with news and offers</div>
                  </div>
                </div>
                <div className="shipping">
                  <h2 className="h2">Shipping address</h2>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="input "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="input "
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="back-cart">
                  <div>
                    <button
                      // type="submit"
                      className="btn"
                      onClick={handlePaymentCOD}
                    >
                      <span className="continue">Create an order</span>
                    </button>
                  </div>
                  <div>
                    <a className="return" href="/cart">
                      <div className="return-cart">
                        <span className="arrow">
                          <svg
                            viewBox="0 0 10 10"
                            className="arrow-left"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <path
                              fill="rgb(255, 0, 189)"
                              d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"
                            ></path>
                          </svg>
                        </span>
                        <span className="span-return">Return to cart</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-info">
          <div className="header-item--logo">
            <h1 className="site-header__logo">Cart</h1>
          </div>
          <div className="cart-info-wrapper">
            <div className="cart-items">
              {orderItems.length > 0 &&
                orderItems.map((item) => (
                  <div className="cart-item" key={item._id}>
                    <div className="item-img-wrapper">
                      <img
                        src={item.Product.Image.Url}
                        alt="1"
                        className="item-img"
                      />
                    </div>
                    <div className="item-info">
                      <p className="name">{item.Product.Name}</p>
                      <div className="kind-div">
                        <p className="kind">{item.Product_Size}</p>
                      </div>
                    </div>
                    <div className="item-price-wrapper">
                      <span className="price">
                        £
                        {Number(
                          item.Quantity * item.Product.Price
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="sub-total-price">
            <div className="sub-total-wrapper">
              <div className="sub-total">Subtotal</div>
              <div className="item-price-wrapper">
                <span className="price">
                  £{" "}
                  {Number(totalPrice).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
            <div className="shipping-wrapper">
              <span className="shipping-title">Shipping</span>
              <span className="shipping-fee">Free ship</span>
            </div>
          </div>
          <div className="sub-total-price">
            <div className="sub-total-wrapper">
              <div className="total">Total</div>
              <div className="item-price-wrapper">
                <span className="gbp">GBP</span>
                <span className="price-final">
                  {" "}
                  £
                  {Number(totalPrice).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </PaymentWrapper>
      <Footer></Footer>
    </>
  );
};

export default Pay;
