import React from "react";
import { PaymentWrapper } from "../../../styles/payStyle";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { cartItem } from "../Cart/data";

const Pay = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <PaymentWrapper>
        <div className="contact-info">
          <div className="header-item--logo">
            <h1 className="site-header__logo">Payment</h1>
          </div>
          <div className="main-contact">
            <form action="" className="form-payment">
              <div className="form-wrapper">
                <div className="contact-infomation">
                  <div className="title">
                    <h2 className="h2">Contact information</h2>
                    <span className="right">
                      Already have an account?
                      <a href="/login" className="log-in">
                        {" "}
                        Log in
                      </a>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Your email"
                    className="input "
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
                  />
                  <input type="text" placeholder="Address" className="input " />
                  <input type="text" placeholder="Phone" className="input " />
                </div>
                <div className="back-cart">
                  <div>
                    <button
                      type="submit"
                      className="btn"
                      onClick={() => navigate("/list-product")}
                    >
                      <span className="continue">Continue to shipping</span>
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
            </form>
          </div>
        </div>
        <div className="cart-info">
          <div className="header-item--logo">
            <h1 className="site-header__logo">Cart</h1>
          </div>
          <div className="cart-info-wrapper">
            <div className="cart-items">
              {cartItem.length > 0 &&
                cartItem.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="item-img-wrapper">
                      <img src={item.img} alt="1" className="item-img" />
                    </div>
                    <div className="item-info">
                      <p className="name">{item.itemName}</p>
                      <div className="kind-div">
                        <p className="kind">{item.chosen}</p>
                      </div>
                    </div>
                    <div className="item-price-wrapper">
                      <span className="price">
                        £
                        {Number(item.price).toLocaleString("en-US", {
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
                <span className="price">£ 93.00</span>
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
                <span className="price-final"> £93.00</span>
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