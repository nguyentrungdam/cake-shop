import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getProductById } from "../../../slices/productSlice";
import { ProductDetailWrapper } from "../../../styles/productDetailStyle";
import { addToCart } from "../../../slices/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const ProductDetail = () => {
  const { productDetail } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.account);
  const { cartItems } = useSelector((state) => state.cart);
  const [isSelected, setIsSelected] = useState("");
  const [openIframe, setOpenIframe] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let idProduct = useParams();

  const [cartItem, setCartItem] = useState({
    product: "",
    variant: "",
    quantity: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getProductById(idProduct.id)).unwrap();
      setCartItem({ ...cartItem, product: response.data.Product._id });
    };
    fetchData();
  }, []);

  const notify = () => {
    toast.success("🎂 Add to Basket Success!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  const handleChangeSize = (id, name) => {
    setIsSelected(id);
    setCartItem({ ...cartItem, variant: name, quantity: 1 });
  };

  const handleIncrement = () => {
    if (cartItem.quantity === productDetail.Quantity) {
      alert("Số lượng tối đa!");
    } else if (cartItem.quantity < productDetail.Quantity) {
      setCartItem({
        ...cartItem,
        quantity: cartItem.quantity + 1,
      });
    }
  };

  const handleDecrement = () => {
    if (cartItem.quantity === 1) {
      alert("Số lượng tối thiểu là 1!");
    } else if (cartItem.quantity > 0) {
      setCartItem({ ...cartItem, quantity: cartItem.quantity - 1 });
    }
  };

  // Handle add cart
  const handleAddCart = async (e) => {
    e.preventDefault();
    if (!cartItem.variant) {
      alert("Vui lòng chọn size");
    } else if (!isAuthenticated) {
      navigate("/signin");
    } else {
      let cartObject;
      if (cartItems) {
        cartObject = cartItems.find(
          (item) =>
            item.Product?._id === cartItem.product &&
            item.Size?.name === cartItem.variant
        );
      }

      let newCartItem = {};
      if (cartObject) {
        newCartItem = {
          product: cartObject.Product?._id,
          variant: cartObject.Size?.name,
          quantity: cartItem.quantity,
        };
      } else {
        notify();
        newCartItem = {
          Product: cartItem.product,
          Product_Size: cartItem.variant,
          Quantity: cartItem.quantity,
        };
        console.log(newCartItem);
        console.log(cartItem);
      }
      const res = await dispatch(addToCart({ ...newCartItem }));
      if (res.error) {
        alert("Đã xảy ra lỗi! Vui lòng thử lại.");
        return;
      }
    }
  };
  return (
    <>
      <Header></Header>
      <ToastContainer />
      <ProductDetailWrapper>
        <main className="main-content">
          {/* Thông tin sản phẩm */}
          <div className="top" id="shopify-section-product-cupcake-template">
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
                                          alt={productDetail?.Name}
                                          src={productDetail.Image?.Url}
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
                                        alt={productDetail.Name}
                                        src={productDetail.Image?.Url}
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
                                  onClick={() => {
                                    setOpenIframe("open");
                                  }}
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
                          {productDetail.Name}
                        </h1>

                        <span
                          id="ProductPrice-7593662546171"
                          className="product__price"
                        >
                          <span className="money">
                            £
                            {Number(productDetail.Price).toLocaleString(
                              "en-US",
                              {
                                minimumFractionDigits: 2,
                              }
                            )}
                          </span>
                          <p className="free-delivery">Free Delivery</p>
                        </span>
                        <hr className="hr--medium" />
                        <div className="product-single__description-full rte">
                          <p>{productDetail.Description}</p>

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
                              {productDetail.Size?.map(({ name, _id }) => (
                                <div
                                  className="variant-input"
                                  data-index="option1"
                                  data-value="Tall"
                                  key={_id}
                                >
                                  <input
                                    type="radio"
                                    value={name}
                                    name="Size"
                                    required
                                    disabled={
                                      productDetail.quantity === 0
                                        ? true
                                        : false
                                    }
                                    className="variant__input-7593662546171 "
                                    id="ProductSelect-7593662546171-option-size-Tall"
                                  />

                                  <label
                                    className={
                                      isSelected === _id
                                        ? "active"
                                        : "noneactive"
                                    }
                                    htmlFor="ProductSelect-7593662546171-option-size-Tall"
                                    onClick={() => handleChangeSize(_id, name)}
                                  >
                                    {name}
                                  </label>
                                </div>
                              ))}
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
                                placeholder={cartItem.quantity}
                                // defaultValue={cartItem.quantity}
                                message={cartItem.quantity}
                              />
                              <button
                                type="button"
                                className="js-qty__adjust js-qty__adjust--minus"
                                aria-label="Reduce item quantity by one"
                                onClick={handleDecrement}
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
                                onClick={handleIncrement}
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
                            id="AddToCart-7593662546171"
                            className="btn btn--full btn--no-animate add-to-cart"
                            onClick={(e) => handleAddCart(e)}
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
          {/* Gợi ý */}
          <div
            id="shopify-section-product-recommendations"
            className="shopify-section"
          >
            <div
              id="Recommendations-4323356278887"
              data-section-id="4323356278887"
              data-section-type="product-recommendations"
              data-enable="true"
              data-product-id="4323356278887"
              data-limit="4"
            >
              <div
                data-section-id="4323356278887"
                data-subsection=""
                data-section-type="collection-template"
                className="index-section"
              >
                <div className="page-width">
                  <header className="section-header">
                    <h3 className="section-header__title">You may also like</h3>
                  </header>
                </div>

                <div className="page-width page-width--flush-small">
                  <div className="grid-overflow-wrapper">
                    <div className="product-recommendations-placeholder">
                      <div className="product-recommendations">
                        <div
                          className="product-single__related grid grid--uniform aos-init aos-animate"
                          data-aos="overflow__animation"
                        >
                          <div
                            className="grid__item grid-product small--one-half medium-up--one-third aos-init aos-animate"
                            data-aos="row-of-3"
                          >
                            <div className="grid-product__content">
                              <a
                                href="/products/pastel-pink-name-age-cake?pr_prod_strat=description&amp;pr_rec_id=e9aaa09bd&amp;pr_rec_pid=7736219238651&amp;pr_ref_pid=4323356278887&amp;pr_seq=uniform"
                                className="grid-product__link "
                              >
                                <div className="grid-product__image-mask">
                                  <div className="image-wrap  image-recommend">
                                    <img
                                      className="grid-product__image lazyautosizes lazyloaded"
                                      data-aspectratio="0.9932935916542474"
                                      data-sizes="auto"
                                      alt="Pastel Pink Name &amp; Age Cake"
                                      sizes="318px"
                                      srcSet=" //cdn.shopify.com/s/files/1/0261/0108/8359/products/pastelpinkName_Age2_360x.png?v=1655126936 360w"
                                    />
                                  </div>
                                  <div
                                    className="grid-product__secondary-image lazyloaded"
                                    style={{
                                      backgroundImage:
                                        "url(https://cdn.shopify.com/s/files/1/0261/0108/8359/products/pastelpinkname_Age_360x.png?v=1655126937",
                                    }}
                                  ></div>

                                  <div className="grid-product__meta">
                                    <div className="grid-product__title">
                                      Pastel Pink Name &amp; Age Cake
                                    </div>

                                    <p className="free-delivery">
                                      Free Delivery
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>

                          <div
                            className="grid__item grid-product small--one-half medium-up--one-third aos-init aos-animate"
                            data-aos="row-of-3"
                          >
                            <div className="grid-product__content">
                              <a
                                href="/products/pastel-blue-age-cake?pr_prod_strat=description&amp;pr_rec_id=e9aaa09bd&amp;pr_rec_pid=7736177656059&amp;pr_ref_pid=4323356278887&amp;pr_seq=uniform"
                                className="grid-product__link "
                              >
                                <div className="grid-product__image-mask">
                                  <div className="image-wrap  image-recommend">
                                    <img
                                      className="grid-product__image lazyautosizes lazyloaded"
                                      data-aspectratio="0.9932935916542474"
                                      data-sizes="auto"
                                      alt="Pastel Blue Age Cake"
                                      sizes="318px"
                                      srcSet=" //cdn.shopify.com/s/files/1/0261/0108/8359/products/blueagecakestepped_360x.png?v=1655123073 360w"
                                    />
                                  </div>
                                  <div
                                    className="grid-product__secondary-image lazyloaded"
                                    style={{
                                      backgroundImage:
                                        "url(https://cdn.shopify.com/s/files/1/0261/0108/8359/products/Bluewatercolourtopper_360x.png?v=1655123073",
                                    }}
                                  ></div>

                                  <div className="grid-product__meta">
                                    <div className="grid-product__title">
                                      Pastel Blue Age Cake
                                    </div>

                                    <p className="free-delivery">
                                      Free Delivery
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>

                          <div
                            className="grid__item grid-product small--one-half medium-up--one-third aos-init aos-animate"
                            data-aos="row-of-3"
                          >
                            <div className="grid-product__content">
                              <a
                                href="/products/sprinkle-party?pr_prod_strat=description&amp;pr_rec_id=e9aaa09bd&amp;pr_rec_pid=4624459038823&amp;pr_ref_pid=4323356278887&amp;pr_seq=uniform"
                                className="grid-product__link "
                              >
                                <div className="grid-product__image-mask">
                                  <div className="image-wrap image-recommend ">
                                    <img
                                      className="grid-product__image lazyautosizes lazyloaded"
                                      data-aspectratio="1.0044642857142858"
                                      data-sizes="auto"
                                      alt="Sprinkle Party Cake"
                                      sizes="318px"
                                      srcSet="https://cdn.shopify.com/s/files/1/0261/0108/8359/products/swirlcustomtopperoncake2_360x.png?v=1642439239"
                                    />
                                  </div>

                                  <div
                                    className="grid-product__secondary-image lazyloaded"
                                    style={{
                                      backgroundImage:
                                        "url(https://cdn.shopify.com/s/files/1/0261/0108/8359/products/swirlcustomtopperSmall_180x.png?v=1642439239",
                                    }}
                                  ></div>
                                </div>
                                <div className="grid-product__meta">
                                  <div className="grid-product__title">
                                    Paint Swirl Cake Topper
                                  </div>

                                  <p className="free-delivery">Free Delivery</p>
                                </div>
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
          </div>
          {/* Collection */}
          <div
            id="shopify-section-product-collection-links"
            className=" shopify-section2"
          >
            <div className="grid grid--no-gutters skrim-grid skrim-grid--pagination product-navigation">
              <div
                className="grid__item medium-up--one-half skrim__item aos-init aos-animate"
                data-aos="skrim__animation"
              >
                <a
                  href="/collections/all-cakes"
                  className="skrim__link skrim__item-content"
                >
                  <div
                    className="skrim__overlay grid__image lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://cdn.shopify.com/s/files/1/0261/0108/8359/collections/stripes_900x.png?v=1638202423")',
                    }}
                  >
                    <div className="skrim__title-wrapper">
                      <span className="skrim__title">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon--wide icon-arrow-left"
                          viewBox="0 0 50 15"
                        >
                          <path d="M50 5.38v4.25H15V15L0 7.5 15 0v5.38z"></path>
                        </svg>{" "}
                        <div className="skrim__underline-me">
                          Back to All Cakes
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className="grid__item medium-up--one-half skrim__item small--hide aos-init aos-animate"
                data-aos="skrim__animation"
              >
                <a
                  href="/collections/all-cakes/products/reeses-pieces-cake"
                  className="skrim__link skrim__item-content"
                >
                  <div
                    className="skrim__overlay grid__image lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://cdn.shopify.com/s/files/1/0261/0108/8359/products/Reesessolidsite_900x.png?v=1637146780")',
                    }}
                  >
                    <div className="skrim__title-wrapper">
                      <span className="skrim__title skrim__title--right">
                        <div className="skrim__underline-me">
                          Next: Reese's Pieces Cake
                        </div>{" "}
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon--wide icon-arrow-right"
                          viewBox="0 0 50 15"
                        >
                          <path d="M0 9.63V5.38h35V0l15 7.5L35 15V9.63z"></path>
                        </svg>
                      </span>
                    </div>{" "}
                  </div>
                </a>
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
