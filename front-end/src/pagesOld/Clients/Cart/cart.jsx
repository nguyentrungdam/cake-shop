import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../components/header";
import RecommendProducts from "../Home/homeRecommendProducts/recommendProducts";
import { Link, useNavigate } from "react-router-dom";
import DeleteItem from "./deleteItem";
import FooterMini from "../../../components/footerMini";
import "../../../css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../../../slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const { cartItems, loading } = useSelector((state) => state.cart);
  const [item, setItem] = useState({
    name: "",
    productId: "",
    variantId: "",
  });

  const handleDeleteBtn = async (_idPro, _idVar) => {
    const updateSeleted = selected.filter((newItem) => {
      return newItem.product._id !== _idPro || newItem.variant !== _idVar;
    });
    setSelected(updateSeleted);
    await dispatch(
      removeCartItem({ cartItem: { product: _idPro, variant: _idVar } })
    );
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
    total +=
      (priceItem.product?.price -
        (priceItem.product?.discountPercent / 100) * priceItem.product?.price) *
      priceItem.quantity;
    return total;
  }, 0);

  const totalDiscount = selected.reduce((total, priceItem) => {
    total +=
      (priceItem.product?.discountPercent / 100) *
      priceItem.product?.price *
      priceItem.quantity;
    return total;
  }, 0);

  const handleSelected = (e, item) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelected([...selected, item]);
    } else {
      const updateSeleted = selected.filter((newItem) => {
        return (
          newItem.product._id !== item.product._id ||
          newItem.variant !== item.variant
        );
      });
      setSelected(updateSeleted);
    }
  };

  const itemSelected = (item) => {
    return selected.find(
      ({ product, variant }) =>
        product._id === item.product._id && variant === item.variant
    );
  };
  //add to order
  const hanldeAddToOrder = (e) => {
    e.preventDefault();
    if (selected.length > 0) {
      navigate("/pay", { state: { selected: selected } });
    } else {
      alert("Vui lòng chọn sản phẩm để thanh toán!");
    }
  };

  return (
    <React.Fragment>
      <Header />
      {isAuthenticated ? (
        <Container>
          {loading ? (
            <NullCart>
              <h5 style={{ fontWeight: "500" }}>Loading...</h5>
            </NullCart>
          ) : cartItems.length === 0 ? (
            <React.Fragment>
              <NullCart>
                <NullCartLogo></NullCartLogo>
                <NullCartTitle>Giỏ hàng của bạn còn trống</NullCartTitle>
                <Link to="/">
                  <span>
                    <NullCartBuyNowButton>
                      <NullCartBuyNowSpan>MUA NGAY</NullCartBuyNowSpan>
                    </NullCartBuyNowButton>
                  </span>
                </Link>
              </NullCart>
              <RecommendWrapper>
                <RecommendProducts />
              </RecommendWrapper>
            </React.Fragment>
          ) : (
            <Wrapper>
              <FreeShip>
                <LogoFreeShip src="https://ikids.vn/wp-content/uploads/2019/04/FreeShip.png" />
                <FreeShipInfo>
                  Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận
                  chuyển bạn nhé!
                </FreeShipInfo>
              </FreeShip>

              <MiniNav>
                <Product>Sản Phẩm</Product>
                <Price>Đơn Giá</Price>
                <Quantity>Số Lượng</Quantity>
                <Money>Số Tiền</Money>
                <Action>Thao Tác</Action>
              </MiniNav>

              <DeleteItem
                item={item}
                handleDeleteBtn={handleDeleteBtn}
                showDeleteItem={showDeleteItem}
                setShowDeleteItem={setShowDeleteItem}
              ></DeleteItem>

              {cartItems.map((item, index) => {
                let variantIndex = 0;
                item.product.variants.map((itemVar, index) => {
                  if (itemVar._id === item.variant) {
                    variantIndex = index;
                  }
                });

                return (
                  <Item key={item._id}>
                    <ItemInfo>
                      <ItemWrapper>
                        <input
                          type="checkbox"
                          checked={itemSelected(item) ? true : false}
                          onChange={(e) => handleSelected(e, item)}
                        />
                        <ItemImage
                          src={item.product.productPictures[0]}
                        ></ItemImage>
                        <ItemInfoDetails>
                          <span className="ItemName">{item.product.name}</span>
                          <ItemShipping src="https://cf.shopee.vn/file/4aa2f89064a3b9cd38170e3ded78c528"></ItemShipping>
                        </ItemInfoDetails>

                        <ItemType>
                          <ItemInfoType>Phân Loại Hàng:</ItemInfoType>
                          <ItemChosen>
                            {item.product.variants?.[variantIndex].name}
                          </ItemChosen>
                        </ItemType>

                        <ItemPriceWrapper>
                          <ItemPrice
                            style={{
                              textDecoration: "line-through",
                              color: "rgba(0,0,0,.54)",
                            }}
                          >
                            {Number(item.product.price).toLocaleString("vi")}₫
                          </ItemPrice>
                          <ItemPrice>
                            {Number(
                              item.product.price -
                                (item.product?.discountPercent / 100) *
                                  item.product.price
                            ).toLocaleString("vi")}
                            ₫
                          </ItemPrice>
                        </ItemPriceWrapper>

                        <ItemQuantity>
                          <InputBtn
                            onClick={() =>
                              handleDecrement(
                                {
                                  product: item.product._id,
                                  variant: item.variant,
                                  quantity: item.quantity - 1,
                                },
                                item.product.name
                              )
                            }
                          >
                            <Remove />
                          </InputBtn>
                          <Input
                            defaultValue={item.quantity}
                            type="button"
                          ></Input>
                          <InputBtn
                            onClick={() =>
                              handleIncrement(
                                {
                                  product: item.product._id,
                                  variant: item.variant,
                                  quantity: item.quantity + 1,
                                },
                                index,
                                variantIndex
                              )
                            }
                          >
                            <Add />
                          </InputBtn>
                        </ItemQuantity>

                        <ItemMoney>
                          {Number(
                            (item.product.price -
                              (item.product?.discountPercent / 100) *
                                item.product.price) *
                              item.quantity
                          ).toLocaleString("vi")}
                          ₫
                        </ItemMoney>
                        <Handle>
                          <RemoveButton
                            onClick={() =>
                              handleDeleteBtn(item.product._id, item.variant)
                            }
                          >
                            Xóa
                          </RemoveButton>
                        </Handle>
                      </ItemWrapper>
                    </ItemInfo>
                  </Item>
                );
              })}

              <TotalPrice>
                <Total>
                  <ItemWrapperPayment>
                    <input
                      type="checkbox"
                      name="selectAll"
                      checked={isSelectedAll ? true : false}
                      onChange={handleSelectedAll}
                    />
                    <ChooseAll>Chọn Tất Cả ({cartItems.length})</ChooseAll>
                    <VoucherSpace></VoucherSpace>

                    <Payment>
                      <TotalPayment>
                        <TotalWrapper>
                          <TotalPricePayment>
                            <TotalMoneyTitle>
                              Tổng thanh toán ({cartItems.length} sản phẩm):
                            </TotalMoneyTitle>
                            <TotalMoney>
                              {Number(totalPrice).toLocaleString("vi")}₫
                            </TotalMoney>
                          </TotalPricePayment>
                          <SavePayment>
                            Tiết kiệm:
                            <SaveMoney>
                              {Number(totalDiscount).toLocaleString("vi")}₫
                            </SaveMoney>
                          </SavePayment>
                        </TotalWrapper>
                      </TotalPayment>
                    </Payment>

                    <BuyNowButton onClick={(e) => hanldeAddToOrder(e)}>
                      <BuyNow>Mua hàng</BuyNow>
                    </BuyNowButton>
                  </ItemWrapperPayment>
                </Total>
              </TotalPrice>

              <RecommendWrapper>
                <RecommendProducts />
              </RecommendWrapper>
            </Wrapper>
          )}
        </Container>
      ) : (
        <NullCart>
          <NullCartLogo></NullCartLogo>
          <NullCartTitle>Vui lòng đăng nhập!</NullCartTitle>
          <Link to="/signin">
            <span>
              <NullCartBuyNowButton>
                <NullCartBuyNowSpan>Tại đây</NullCartBuyNowSpan>
              </NullCartBuyNowButton>
            </span>
          </Link>
        </NullCart>
      )}
      <FooterMini />
    </React.Fragment>
  );
}
//========================= CSS =========================
const Container = styled.div`
  background-color: #f5f5f5;
`;

const ItemWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
const ItemWrapperPayment = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.8);
  padding-top: 20px;
`;

const FreeShip = styled.div`
  background-color: #fffefb;
  border: 1px solid rgba(224, 168, 0, 0.4);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;
  border-radius: 2px;
`;

const LogoFreeShip = styled.img`
  width: 3%;
  height: 3%;
  margin-right: 5px;
`;

const FreeShipInfo = styled.div`
  font-weight: 450;
  font-size: 14px;
`;

const MiniNav = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;
  overflow: hidden;
  border-radius: 3px;
  height: 55px;
  font-size: 14px;
  background: #fff;
  text-transform: capitalize;
  margin-bottom: 12px;
  padding-left: 15px;
  color: #888;
`;

const Product = styled.div`
  color: rgba(0, 0, 0, 0.8);
  width: 46.27949%;
`;

const Price = styled.div`
  width: 15.88022%;
  text-align: center;
`;

const Quantity = styled.div`
  width: 15.4265%;
  text-align: center;
`;

const Money = styled.div`
  width: 10.43557%;
  text-align: center;
`;

const Action = styled.div`
  width: 12.70417%;
  text-align: center;
`;

const Item = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;
  overflow: hidden;
  background: #fff;
  margin-bottom: 10px;
`;

const ItemInfo = styled.div`
  margin-top: 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
`;

const ItemImage = styled.img`
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
`;

const ItemInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px 0 10px;
  font-size: 14px;
  width: 300.5px;
  line-height: 16px;
  overflow: hidden;
`;

const ItemShipping = styled.img`
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  width: 77%;
`;

const ItemType = styled.div`
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  margin-right: 10px;
  width: 17.24138%;
`;

const ItemInfoType = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  text-align: left;
`;

const ItemChosen = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
  margin-top: 5px;
`;

const ItemPriceWrapper = styled.div`
  flex-direction: row;
  width: 15.88022%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemPrice = styled.span`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  margin: 0px 5px;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 15.4265%;
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: none;
  border-right: none;
  background-color: #fff;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: text;
  border-radius: 0;
  -webkit-appearance: none;
`;

const InputBtn = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemMoney = styled.div`
  width: 10.43557%;
  text-align: center;
  color: #ee4d2d;
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.70417%;
  flex-direction: column;
`;

const RemoveButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
`;

const TotalPrice = styled.div`
  z-index: 2;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 20.3125rem 11.875rem;
  align-items: center;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  flex: 1;
  font-size: 1rem;
  margin-top: 0.75rem;

  &::before {
    content: "";
    position: absolute;
    top: -1.25rem;
    left: 0;
    height: 1.25rem;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
  }
`;

const VoucherSpace = styled.div`
  flex: 1;
`;

const Total = styled.div`
  padding: 10px 0;
  grid-column-start: 1;
  grid-column-end: 4;
  -ms-grid-column-span: 3;
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  font-size: 1rem;
`;

const ChooseAll = styled.button`
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  background: 0;
  border: 0;
  overflow: visible;
  color: inherit;
  font: inherit;
  margin: 0;
`;

const Payment = styled.div`
  position: relative;
`;

const TotalPayment = styled.div``;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalPricePayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 20px;
`;

const TotalMoneyTitle = styled.div`
  font-size: 16px;
  color: #222;
  line-height: 19px;
`;

const TotalMoney = styled.div`
  font-size: 24px;
  line-height: 28px;
  margin-left: 5px;
  color: #ee4d2d;
`;

const SavePayment = styled.div`
  font-size: 14px;
  margin-top: 1px;
  text-align: right;
`;

const SaveMoney = styled.span`
  padding-left: 24px;
  color: #ee4d2d;
  font-size: 14px;
  text-align: right;
`;

const BuyNowButton = styled.button`
  padding: 13px 36px;
  margin: 0 22px 0 15px;
  text-transform: capitalize;
  font-weight: 300;
  height: 2.5rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  border-radius: 2px;
  width: 13.125rem;
  position: relative;
  overflow: visible;
  outline: 0;
  background: #ee4d2d;
  cursor: pointer;
  border: 0;
  line-height: 1;
  letter-spacing: 0;
  user-select: none;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 9%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: opacity 0.2s ease;

  &:hover {
    background: #f05d40;
  }
`;

const BuyNow = styled.span`
  width: 100%;
`;

const RecommendWrapper = styled.div`
  padding-bottom: 20px;
  background-color: #f5f5f5;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const NullCart = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NullCartLogo = styled.div`
  width: 6.75rem;
  height: 6.125rem;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png);
`;

const NullCartTitle = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.875rem;
  line-height: 1rem;
  margin: 1.125rem 0;
  font-weight: 700;
`;

const NullCartBuyNowButton = styled.button`
  padding: 0.625rem 2.625rem;
  position: relative;
  overflow: visible;
  outline: 0;
  background: #ee4d2d;
  cursor: pointer;
  border: 0;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: opacity 0.2s ease;
  border-radius: 2px;
  user-select: none;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 9%);

  &:hover {
    background: #f05d40;
  }
`;

const NullCartBuyNowSpan = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 450;
  line-height: 1;
  color: #fff;
  user-select: none;
  letter-spacing: 0;
`;

export default Cart;
