import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { ProductDetailWrapper } from "../../../styles/productDetailStyle";

const ProductDetail = () => {
  const [openIframe, setOpenIframe] = useState("");
  return (
    <>
      <Header></Header>
      <ProductDetailWrapper>
        <main className="main-content">
          <div className="" id="shopify-section-product-cupcake-template">
            <div className="product-section">
              <div className="page-content">
                <div className="page-width">
                  <div className="grid">
                    <div className="grid__item medium-up--three-fifths">
                      <div
                        data-product-images=""
                        data-zoom="true"
                        data-has-slideshow="true"
                      >
                        <div className="grid-product__tags grid-product__tag--usps">
                          <div className="grid-product__tag--usp grid-product__tag--usp__butter"></div>
                          <div className="grid-product__tag--usp grid-product__tag--usp__choc"></div>
                          <div className="grid-product__tag--usp grid-product__tag--usp__handmade"></div>
                          <div className="grid-product__tag--usp grid-product__tag--usp__taste"></div>
                        </div>
                        <div className="product__photos product__photos-7593662546171 product__photos--below">
                          {/* cái hình đứngg yên */}
                          <div
                            className="product__main-photos aos-init aos-animate"
                            data-aos=""
                          >
                            <div
                              id="ProductPhotos-7593662546171"
                              className="slick-initialized slick-slider"
                            >
                              <div
                                aria-live="polite"
                                className="slick-list draggable"
                                style={{ height: "627.725px" }}
                              >
                                <div
                                  className="slick-track slick-track1"
                                  role="listbox"
                                >
                                  <div
                                    className="starting-slide slick-slide slick-current slick-active"
                                    data-index="0"
                                    data-slick-index="0"
                                    aria-hidden="false"
                                    tabIndex="-1"
                                    aria-describedby="slick-slide00"
                                  >
                                    <div className="product-image-main product-image-main--7593662546171">
                                      <div className="image-wrap">
                                        <img
                                          className="photoswipe__image lazyautosizes lazyloaded"
                                          alt="White Chocolate Strawberry Cake"
                                          src="https://cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_900x.png?v=1644939275"
                                        />
                                      </div>
                                    </div>

                                    <span className="alt">&nbsp;</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* cái iframe */}

                          <div
                            id="ProductThumbs-7593662546171"
                            className="product__thumbs product__thumbs--below aos-init slick-initialized slick-slider aos-animate"
                            data-position="below"
                            data-aos=""
                            onClick={() => {
                              setOpenIframe("open");
                            }}
                          >
                            <div
                              aria-live="polite"
                              className="slick-list draggable"
                            >
                              <div className="slick-track" role="listbox">
                                <div
                                  className="product__thumb-item slick-slide slick-current slick-active"
                                  data-index="0"
                                  data-slick-index="0"
                                  aria-hidden="false"
                                  tabIndex="-1"
                                  aria-describedby="slick-slide10"
                                >
                                  <div className="image-wrap">
                                    <div
                                      className="product__thumb product__thumb-7593662546171 js-no-transition"
                                      data-id="36770795258107"
                                    >
                                      <img
                                        className="animation-delay-3 lazyautosizes lazyloaded"
                                        alt="White Chocolate Strawberry Cake"
                                        src="//cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_360x.png?v=1644939275 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_540x.png?v=1644939275 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_720x.png?v=1644939275 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_900x.png?v=1644939275 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_1080x.png?v=1644939275 1080w"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="product__thumb-item threeSixty-thumb slick-slide slick-active"
                                  data-slick-index="1"
                                  aria-hidden="false"
                                  tabIndex="-1"
                                  aria-describedby="slick-slide11"
                                >
                                  <div className="image-wrap">
                                    <div className="product__thumb product__thumb-7593662546171 js-no-transition">
                                      <img
                                        className="animation-delay-3 lazyloaded"
                                        src="//cdn.shopify.com/s/files/1/0261/0108/8359/t/9/assets/sprinkles-threeSixty.svg?v=104571930018836226541634042048"
                                        alt="Three Sixty Video Placeholder"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`threeSixty-popup ${openIframe}`}>
                        <button
                          onClick={() => {
                            setOpenIframe("");
                          }}
                        >
                          X
                        </button>
                        <iframe
                          title="myFrame"
                          src="https://spinzam.com/shot/embed/?idx=199247"
                          width="640"
                          height="640"
                          frameBorder="0"
                          scrolling="no"
                          className="iframe-cake"
                        ></iframe>
                      </div>
                      <div className={`threeSixty-overlay ${openIframe}`}></div>
                    </div>
                    <div className="grid__item medium-up--two-fifths">
                      <div className="product-single__meta">
                        <h1 className="h2 product-single__title">
                          White Chocolate Strawberry Cake
                        </h1>

                        <span
                          id="ProductPrice-7593662546171"
                          className="product__price"
                        >
                          <span className="money">£81.00</span>
                          <p className="free-delivery">Free Delivery</p>
                        </span>
                        <hr className="hr--medium" />
                        <div className="product-single__description-full rte">
                          <p>
                            White Chocolate and strawberries is the ultimate
                            dessert combo... that's why we decided to
                            incorporate it into a cake!
                          </p>
                          <p>
                            Filled with layers of tasty rich chocolate sponge,
                            vanilla buttercream and zingy strawberry jam,
                            our&nbsp; White Chocolate Strawberry cake is perfect
                            for all sorts of events.&nbsp;
                          </p>
                          <p>
                            <span>
                              Order now with{" "}
                              <span>
                                <span className="free">FREE</span>
                              </span>{" "}
                              delivery straight to your front door.
                            </span>
                          </p>
                          <p>
                            <strong>Servings:</strong>
                          </p>
                          <p>Tall cake - serves 20-25</p>
                          <p>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp;
                            <img
                              alt=""
                              src="https://cdn.shopify.com/s/files/1/0261/0108/8359/files/1_Medium_38b7b78e-642e-448c-a3c2-2c8a6704204d_480x480.png?v=1664204012"
                              width="237"
                              height="89"
                            />
                            <br />
                          </p>
                        </div>

                        <form
                          method="post"
                          action="/cart/add"
                          id="AddToCartForm-7593662546171"
                          acceptCharset="UTF-8"
                          className="product-single__form"
                          encType="multipart/form-data"
                        >
                          <div className="variant-wrapper variant-wrapper--button js">
                            <label
                              className="variant__label"
                              htmlFor="ProductSelect-7593662546171-option-0"
                            >
                              Size
                            </label>

                            <fieldset
                              className="variant-input-wrap"
                              name="Size"
                              data-index="option1"
                              id="ProductSelect-7593662546171-option-0"
                            >
                              <div
                                className="variant-input"
                                data-index="option1"
                                data-value="Tall"
                              >
                                <input
                                  type="radio"
                                  // checked="checked"
                                  // value="Tall"
                                  data-index="option1"
                                  name="Size"
                                  className="variant__input-7593662546171"
                                  id="ProductSelect-7593662546171-option-size-Tall"
                                />

                                <label htmlFor="ProductSelect-7593662546171-option-size-Tall">
                                  Tall <span className="money">£81.00</span>
                                </label>
                              </div>
                            </fieldset>
                          </div>

                          <div className="product__quantity product__quantity--button">
                            <label htmlFor="Quantity-7593662546171">
                              Quantity
                            </label>

                            <div className="js-qty__wrapper">
                              <input
                                type="text"
                                id="Quantity-7593662546171"
                                className="js-qty__num"
                                defaultValue="1"
                                min="1"
                                aria-label="quantity"
                                pattern="[0-9]*"
                                name="quantity"
                              />
                              <button
                                type="button"
                                className="js-qty__adjust js-qty__adjust--minus"
                                aria-label="Reduce item quantity by one"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  role="presentation"
                                  className="icon icon-minus"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill="#000"
                                    d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"
                                  ></path>
                                </svg>
                                <span
                                  className="icon__fallback-text"
                                  aria-hidden="true"
                                >
                                  −
                                </span>
                              </button>
                              <button
                                type="button"
                                className="js-qty__adjust js-qty__adjust--plus"
                                aria-label="Increase item quantity by one"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  role="presentation"
                                  className="icon icon-plus"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill="#000"
                                    d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"
                                  ></path>
                                </svg>
                                <span
                                  className="icon__fallback-text"
                                  aria-hidden="true"
                                >
                                  +
                                </span>
                              </button>
                            </div>
                          </div>

                          <button
                            type="submit"
                            name="add"
                            id="AddToCart-7593662546171"
                            className="btn btn--full btn--no-animate add-to-cart"
                          >
                            <span
                              id="AddToCartText-7593662546171"
                              className="add-to-basket"
                            >
                              Add to Basket
                            </span>
                          </button>
                        </form>

                        <div className="collapsibles-wrapper collapsibles-wrapper--border-bottom">
                          <div className="social-sharing">
                            <a
                              // target="_blank"
                              href="//www.facebook.com/sharer.php?u=https://www.cakesbyandrew.co.uk/products/white-chocolate-strawberry-cake"
                              className="social-sharing__link"
                              title="Share on Facebook"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="icon icon-facebook"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="#000"
                                  d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"
                                ></path>
                              </svg>
                              <span
                                className="social-sharing__title"
                                aria-hidden="true"
                              >
                                Share
                              </span>
                              <span className="visually-hidden">
                                Share on Facebook
                              </span>
                            </a>
                            <a
                              // target="_blank"
                              href="//twitter.com/share?text=White%20Chocolate%20Strawberry%20Cake&amp;url=https://www.cakesbyandrew.co.uk/products/white-chocolate-strawberry-cake"
                              className="social-sharing__link"
                              title="Tweet on Twitter"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="icon icon-twitter"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="#000"
                                  d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"
                                ></path>
                              </svg>
                              <span
                                className="social-sharing__title"
                                aria-hidden="true"
                              >
                                Tweet
                              </span>
                              <span className="visually-hidden">
                                Tweet on Twitter
                              </span>
                            </a>
                            <a
                              // target="_blank"
                              href="//pinterest.com/pin/create/button/?url=https://www.cakesbyandrew.co.uk/products/white-chocolate-strawberry-cake&amp;media=//cdn.shopify.com/s/files/1/0261/0108/8359/products/dippedstrawberry_1024x1024.png?v=1644939275&amp;description=White%20Chocolate%20Strawberry%20Cake"
                              className="social-sharing__link"
                              title="Pin on Pinterest"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="icon icon-pinterest"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="#000"
                                  d="M27.52 9.6c-.64-5.76-6.4-8.32-12.8-7.68-4.48.64-9.6 4.48-9.6 10.24 0 3.2.64 5.76 3.84 6.4 1.28-2.56-.64-3.2-.64-4.48-1.28-7.04 8.32-12.16 13.44-7.04 3.2 3.84 1.28 14.08-4.48 13.44-5.12-1.28 2.56-9.6-1.92-11.52-3.2-1.28-5.12 4.48-3.84 7.04-1.28 4.48-3.2 8.96-1.92 15.36 2.56-1.92 3.84-5.76 4.48-9.6 1.28.64 1.92 1.92 3.84 1.92 6.4-.64 10.24-7.68 9.6-14.08z"
                                ></path>
                              </svg>
                              <span
                                className="social-sharing__title"
                                aria-hidden="true"
                              >
                                Pin it
                              </span>
                              <span className="visually-hidden">
                                Pin on Pinterest
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </ProductDetailWrapper>
      <Footer></Footer>
    </>
  );
};

export default ProductDetail;
