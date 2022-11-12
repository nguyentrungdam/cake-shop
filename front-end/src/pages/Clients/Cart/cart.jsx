import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import DeleteItem from "./deleteItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemCart } from "../../../slices/cartSlice";
import { CartWrapper, Container } from "../../../styles/cartStyle";
import Loading from "../../../components/loading";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.account);
  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const { cartItems, loading } = useSelector((state) => state.cart);
  const [item, setItem] = useState({
    name: "",
    productId: "",
    variantId: "",
  });

  const handleDeleteItem = async (_idProduct) => {
    console.log(_idProduct);
    await dispatch(removeItemCart(_idProduct)).unwrap();
  };

  const handleIncrement = async (cartItem, index, variantIndex) => {
    const a = cartItems?.[index].product.variants?.[variantIndex].quantity;
    if (cartItem.quantity > a) {
      alert("Số lượng tối đa!");
    } else if (cartItem.quantity <= a) {
      const updateSelect = selected.map((item) => {
        if (
          item.variant === cartItem.variant &&
          item.product._id === cartItem.product
        ) {
          return { ...item, quantity: cartItem.quantity };
        }
        return item;
      });
      setSelected(updateSelect);
      await dispatch(addToCart({ cartItem }));
    }
  };

  const handleDecrement = async (cartItem, nameItem) => {
    if (cartItem.quantity === 0) {
      setItem({
        ...item,
        name: nameItem,
        productId: cartItem.product,
        variantId: cartItem.variant,
      });
      setShowDeleteItem((prev) => !prev);
    } else {
      const updateSelect = selected.map((item) => {
        if (
          item.variant === cartItem.variant &&
          item.product._id === cartItem.product
        ) {
          return { ...item, quantity: cartItem.quantity };
        }
        return item;
      });
      setSelected(updateSelect);
      await dispatch(addToCart({ cartItem }));
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

  const isSelectedAll = cartItems.length === selected.length;

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
    console.log(selected);
    return selected.find(
      ({ Product, Product_Size }) =>
        Product._id === item.Product._id && Product_Size === item.Product_Size
    );
  };

  //add to order
  const hanldeAddToOrder = (e) => {
    e.preventDefault();
    if (selected.length > 0) {
      navigate("/payment", { state: { selected: selected } });
    } else {
      alert("Vui lòng chọn sản phẩm để thanh toán!");
    }
  };

  console.log(cartItems);
  return (
    <>
      <Header />
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
                            cartItems.map((item) => (
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
                                      <div className="grid__item one-third medium-up--one-third medium-up--text-center">
                                        <input
                                          type="number"
                                          name="updates[]"
                                          className="cart__product-qty"
                                          defaultValue={item.Quantity}
                                          min="0"
                                          max={item.Product.Quantity}
                                        />
                                      </div>

                                      <div className="grid__item one-third medium-up--two-thirds text-right">
                                        <span className="cart__price">
                                          <span className="appikon-cart-item-line-price">
                                            <span className="discounted_price appkion_original_price">
                                              <span className="money">
                                                £
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
