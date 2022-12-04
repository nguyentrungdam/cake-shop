import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import DeleteItem from "./deleteItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemCart } from "../../../slices/cartSlice";
import { CartWrapper, Container } from "../../../styles/cartStyle";
import Loading from "../../../components/loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.account);
  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const { cartItems, loading } = useSelector((state) => state.cart);
  const [orđerId, setOrđerId] = useState("");
  const [item, setItem] = useState({
    name: "",
    Product: "",
    Product_Size: "",
  });

  const handleDeleteItem = async (_idProduct) => {
    await dispatch(removeItemCart(_idProduct));
  };

  const notify = (message) => {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  const handleIncrement = async (cartItem, currentQuantity, index) => {
    const a = cartItems?.[index].Product.Quantity;
    let quantity = cartItem.Quantity + currentQuantity;
    if (quantity > a) {
      notify("🎂 The quantity is maximum!");
    } else if (quantity <= a) {
      const updateSelect = selected.map((item) => {
        if (item.Product._id === cartItem.Product) {
          return { ...item, Quantity: cartItem.Quantity };
        }
        return item;
      });
      setSelected(updateSelect);
      await dispatch(addToCart({ ...cartItem }));
      window.scrollTo(0, 0);
    }
  };

  const handleDecrement = async (
    cartItem,
    nameItem,
    currentQuantity,
    orderId
  ) => {
    let quantity = cartItem.Quantity + currentQuantity;
    console.log(quantity);
    if (quantity === 0) {
      setItem({
        ...item,
        name: nameItem,
        Product: cartItem.Product,
        Product_Size: cartItem.Product_Size,
      });
      setOrđerId(orderId);
      setShowDeleteItem(true);
    } else {
      const updateSelect = selected.map((item) => {
        if (item.Product._id === cartItem.product) {
          return { ...item, Quantity: cartItem.Quantity };
        }
        return item;
      });
      setSelected(updateSelect);
      await dispatch(addToCart({ ...cartItem }));
    }
  };

  const handleSelectedAll = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelected(cartItems);
    } else {
      setSelected([]);
    }
  };

  const isSelectedAll = cartItems?.length === selected?.length;

  const totalPrice = selected.reduce((total, priceItem) => {
    total += priceItem.Product?.Price * priceItem.Quantity;
    return total;
  }, 0);

  const handleSelected = (e, item) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelected([...selected, item]);
    } else {
      const updateSeleted = selected.filter((newItem) => {
        return (
          newItem.Product._id !== item.Product._id ||
          newItem.Product_Size !== item.Product_Size
        );
      });
      setSelected(updateSeleted);
    }
  };

  const itemSelected = (item) => {
    return selected.find(
      ({ Product, Product_Size }) =>
        Product._id === item.Product._id && Product_Size === item.Product_Size
    );
  };

  //add to order
  const hanldeAddToOrder = async (e) => {
    e.preventDefault();
    if (selected.length > 0) {
      console.log(selected);
      navigate("/payment", { state: { selected: selected } });
    } else {
      notify("Please select the product to pay!");
    }
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        {isAuthenticated ? (
          <div className="container-cart">
            {loading ? (
              <div className="NullCart">
                <h5 style={{ fontWeight: "500" }}>
                  <Loading />
                </h5>
              </div>
            ) : cartItems.length === 0 ? (
              <>
                <div className="NullCart">
                  <div className="NullCartLogo"></div>
                  <div className="NullCartTitle">
                    Giỏ hàng của bạn còn trống
                  </div>
                  <Link to="/list-product" className="LinkBuy">
                    <span>
                      <div className="NullCartButton">
                        <div className="NullCartBuyNow">MUA NGAY</div>
                      </div>
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <CartWrapper>
                <DeleteItem
                  orderId={orđerId}
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                  showDeleteItem={showDeleteItem}
                  setShowDeleteItem={setShowDeleteItem}
                ></DeleteItem>
                <main className="main-content">
                  <div className="page-width page-content">
                    <div className="grid">
                      <div className="grid-item">
                        <header className="section-header">
                          <h1 className="section-header__title">Basket</h1>
                        </header>
                        <div className="cart">
                          <div className="cart__row small--hide cart__header-labels ">
                            <div className="grid grid--full">
                              <div className="grid__item medium-up--two-fifths medium-up--push-three-fifths">
                                <div className="grid grid--full">
                                  <div className="grid__item one-third small--half text-center">
                                    Quantity
                                  </div>
                                  <div className="grid__item two-thirds small--half text-right">
                                    Total
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* items */}
                          {cartItems.length > 0 &&
                            cartItems.map((item, index) => (
                              <div className="cart__row" key={item._id}>
                                <div className="grid grid--full cart__row--table-large">
                                  <div className="grid__item medium-up--three-fifths">
                                    <div className="grid">
                                      <div className="grid__item one-quarter flex">
                                        <label className="container-checkbox">
                                          <input
                                            className="Checkbox"
                                            type="checkbox"
                                            checked={
                                              itemSelected(item)
                                                ? "checked"
                                                : ""
                                            }
                                            onChange={(e) =>
                                              handleSelected(e, item)
                                            }
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <a
                                          href={`/product/${item.Product._id}`}
                                          className="cart__image"
                                        >
                                          <img
                                            className="lazyautosizes lazyloaded"
                                            alt={item.Product.Name}
                                            src={item.Product.Image.Url}
                                          />
                                        </a>
                                      </div>

                                      <div className="grid__item three-quarters cake-info">
                                        <a
                                          href={`/product/${item.Product._id}`}
                                          className="h4 cart__product-name"
                                        >
                                          {item.Product.Name}
                                        </a>

                                        <p className="cart__product-meta">
                                          {item.Product_Size}
                                        </p>

                                        <p
                                          className="cart__product-meta small--hide rte"
                                          onClick={() =>
                                            handleDeleteItem(item._id)
                                          }
                                        >
                                          <a>Remove</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid__item medium-up--two-fifths">
                                    <div className="grid grid--full cart__row--table">
                                      <div className=" grid__item one-third medium-up--one-third medium-up--text-center">
                                        <div className="product__quantity product__quantity--button">
                                          <div className="js-qty__wrapper">
                                            <span
                                              type="text"
                                              id="Quantity-7593662546171"
                                              className="js-qty__num"
                                            >
                                              {item.Quantity}
                                            </span>
                                            <button
                                              type="button"
                                              className="js-qty__adjust js-qty__adjust--minus"
                                              aria-label="Reduce item quantity by one"
                                              onClick={() =>
                                                handleDecrement(
                                                  {
                                                    Product: item.Product._id,
                                                    Product_Size:
                                                      item.Product_Size,
                                                    Quantity: -1,
                                                  },
                                                  item.Product.Name,
                                                  item.Quantity,
                                                  item._id
                                                )
                                              }
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
                                              onClick={() =>
                                                handleIncrement(
                                                  {
                                                    Product: item.Product._id,
                                                    Product_Size:
                                                      item.Product_Size,
                                                    Quantity: 1,
                                                  },
                                                  item.Quantity,
                                                  index
                                                )
                                              }
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
                                      </div>

                                      <div className="grid__item one-third medium-up--two-thirds text-right">
                                        <span className="cart__price">
                                          <span className="appikon-cart-item-line-price">
                                            <span className="discounted_price appkion_original_price">
                                              <span className="money">
                                                £{item.Product.Price} x{" "}
                                                {item.Quantity} = £
                                                {Number(
                                                  item.Quantity *
                                                    item.Product.Price
                                                ).toLocaleString("en-US", {
                                                  minimumFractionDigits: 2,
                                                })}
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          <div className="cart__row__checkout">
                            <div
                              className="grid"
                              style={{ borderTop: "1px solid #ccc" }}
                            >
                              <div className="grid__item  text-center ">
                                <div className="choseAll">
                                  <label
                                    className="container-checkbox"
                                    style={{ marginTop: "0px" }}
                                  >
                                    Chose All
                                    <input
                                      className="Checkbox"
                                      type="checkbox"
                                      checked={isSelectedAll ? "checked" : ""}
                                      onChange={handleSelectedAll}
                                    />
                                    <span
                                      className="checkmark"
                                      style={{ top: "2px" }}
                                    ></span>
                                  </label>
                                </div>
                              </div>
                              <div className="grid__item medium-up--five-twelfths text-center medium-up--text-right medium-up--push-seven-twelfths margin-top-20">
                                <div className="grid grid--full cart__row--table">
                                  <div className="grid__item one-half medium-up--text-right">
                                    <p className="h4 cart__subtotal">
                                      <span className="wholesale-original-cart-total">
                                        <span className="wholesale-original-price">
                                          Total
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                  <div className="grid__item one-half">
                                    <p className="h4 cart__subtotal">
                                      <span className="money">
                                        £
                                        {Number(totalPrice).toLocaleString(
                                          "en-US",
                                          {
                                            minimumFractionDigits: 2,
                                          }
                                        )}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="cart__checkout-wrapper rte">
                                  <a
                                    className="link link--small"
                                    href="/list-product"
                                  >
                                    Continue Shopping
                                  </a>

                                  <button
                                    type="submit"
                                    name="update"
                                    className="cart__update btn btn--no-animate "
                                    onClick={(e) => hanldeAddToOrder(e)}
                                  >
                                    Check Out
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </CartWrapper>
            )}
          </div>
        ) : (
          <div className="NullCart">
            <div className="NullCartLogo"></div>
            <div className="NullCartTitle">Vui lòng đăng nhập!</div>
            <Link to="/signin" className="LinkBuy">
              <span>
                <div className="NullCartButton">
                  <div className="NullCartBuyNow">Tại đây</div>
                </div>
              </span>
            </Link>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
