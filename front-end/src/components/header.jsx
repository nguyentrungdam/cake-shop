import React from "react";

import { HeaderWrapper } from "../styles/headerStyle";
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="announcement">
        <a href="/" className="announcement__link">
          <span className="announcement__text">
            🌞Check out our end of summer offer🎂
          </span>
        </a>
      </div>
      <div className="site-header-sticky">
        <header className="site-header">
          <div className="page-width">
            <div className="header-layout">
              {/* left */}
              <div className="header-item--logo">
                <a href="/">
                  <h1 className="site-header__logo">Cakes By Damn</h1>
                </a>
              </div>
              {/* center */}
              <div className="header-item--navigation">
                <ul className="site-navigation">
                  <li className="site-nav__expanded-item">
                    <a href="/" className="site-nav__link--has-dropdown">
                      Cakes
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-chevron-down"
                        viewBox="0 0 28 16"
                      >
                        <path
                          d="M1.57 1.59l12.76 12.77L27.1 1.59"
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <ul className="site-nav__dropdown">
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          All Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Customisable Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Cakes For Kids
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Chocolate Cakes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="site-nav__expanded-item">
                    <a
                      href="/list-product"
                      className="site-nav__link--has-dropdown"
                    >
                      Bakes
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-chevron-down"
                        viewBox="0 0 28 16"
                      >
                        <path
                          d="M1.57 1.59l12.76 12.77L27.1 1.59"
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <ul className="site-nav__dropdown">
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          All Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Customisable Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Cakes For Kids
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Chocolate Cakes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="site-nav__expanded-item">
                    <a
                      href="/list-product"
                      className="site-nav__link--has-dropdown"
                    >
                      Accessories
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-chevron-down"
                        viewBox="0 0 28 16"
                      >
                        <path
                          d="M1.57 1.59l12.76 12.77L27.1 1.59"
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <ul className="site-nav__dropdown">
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          All Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Customisable Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Cakes For Kids
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Chocolate Cakes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="site-nav__expanded-item">
                    <a
                      href="/list-product"
                      className="site-nav__link--has-dropdown"
                    >
                      Buying For Your Company?
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-chevron-down"
                        viewBox="0 0 28 16"
                      >
                        <path
                          d="M1.57 1.59l12.76 12.77L27.1 1.59"
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <ul className="site-nav__dropdown">
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          All Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Customisable Cakes
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Cakes For Kids
                        </a>
                      </li>
                      <li className="site-nav__dropdown-item">
                        <a
                          href="/list-product"
                          className="site-nav__dropdown-link--second-level"
                        >
                          Chocolate Cakes
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* right */}
              <div className="header-item--icons">
                <div className="site-nav--icons">
                  <div className="site-nav__icons">
                    <a href="/account" className="item-navigate">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-navigate"
                        viewBox="0 0 64 64"
                      >
                        <path
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                          d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"
                        ></path>
                      </svg>
                    </a>
                    <a href="/search" className="item-navigate">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-navigate"
                        viewBox="0 0 64 64"
                      >
                        <path
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                          d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
                        ></path>
                      </svg>
                    </a>
                    <a href="/cart" className="item-navigate">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon-navigate"
                        viewBox="0 0 64 64"
                      >
                        <path
                          strokeWidth="4"
                          stroke="#000"
                          fill="none"
                          fillRule="evenodd"
                          d="M14 17.44h46.79l-7.94 25.61H20.96l-9.65-35.1H3"
                        ></path>
                        <circle cx="27" cy="53" r="4"></circle>
                        <circle cx="47" cy="53" r="4"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__usp">
            <div className="usp">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8369/8369808.png"
                alt="Flag of VietNam"
                className="usp-location--image"
              />
              <p>VietNam Wide Delivery</p>
            </div>
            <div className="usp">
              <img
                src="https://cdn.shopify.com/s/files/1/0261/0108/8359/t/9/assets/delivery.svg?v=173057688647118523181634042004"
                alt="Flag of VietNam"
                className="usp-location--image"
              />
              <p>Free shipping on all orders over £100</p>
            </div>
            <div className="usp">
              <img
                src="https://cdn.shopify.com/s/files/1/0261/0108/8359/t/9/assets/24-hours.png?v=111110366177622829861635510777"
                alt="Flag of VietNam"
                className="usp-location--image"
              />
              <p>Next Day Delivery</p>
            </div>
            <div className="usp">
              <p>
                <img
                  src="https://cdn.shopify.com/s/files/1/0261/0108/8359/t/9/assets/baker.svg?v=69629155624760271491664540011"
                  alt="Flag of VietNam"
                  className="usp-location--image star"
                />
                Handmade, taste the difference
              </p>
            </div>
          </div>
        </header>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
