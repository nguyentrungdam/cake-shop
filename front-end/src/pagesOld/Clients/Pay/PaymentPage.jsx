import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FooterMini from "../../../components/footerMini";
import HeaderMini from "../../../components/headerMini";
import { addOrder } from "../../../slices/orderSlice";
import ModalPayment from "./ModalPayment";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [address, setAddress] = useState(null);
  const orderItems = location.state.selected;
  const { deliveryInfo, loading } = useSelector((state) => state.address);
  const shippingFee = 30000;

  const setDefaultDeliveryInfo = () => {
    if (deliveryInfo.address) {
      const defaultAddress = deliveryInfo.address.find(
        (add) => add.isDefault === true
      );
      if (defaultAddress) {
        setAddress(defaultAddress);
      } else {
        setAddress(deliveryInfo.address[0]);
      }
    }
  };

  const totalPrice = orderItems.reduce((total, priceItem) => {
    total +=
      (priceItem.product?.price -
        (priceItem.product?.discountPercent / 100) * priceItem.product?.price) *
      priceItem.quantity;
    return total;
  }, 0);
  const totalAmount = totalPrice + shippingFee;

  const getItemsToPay = () => {
    const items = [];
    orderItems.map((item) => {
      items.push({
        product: item.product._id,
        variant: item.variant,
        price:
          (item.product.price -
            (item.product.discountPercent / 100) * item.product.price) *
          item.quantity,
        quantity: item.quantity,
      });
    });
    return items;
  };

  //handlePayment
  const handlePayment = async () => {
    const order = {
      address: address._id,
      // totalAmount,
      // paymentStatus: "pending",
      paymentType: "cod",
      items: getItemsToPay(),
    };

    try {
      var res = await dispatch(addOrder(order)).unwrap();
    } catch (error) {
      alert(
        "Số lượng sản phẩm trong kho không đủ ! Vui lòng chọn sản phẩm khác"
      );
      navigate(-1);
      return;
    }
    if (res.status === 201) {
      setOpenModal(true);
      setTimeout(function () {
        navigate("/user/purchase");
      }, 1500);
    }
  };

  const handleChangeAddress = (e) => {
    const newAddress = deliveryInfo.address.find(
      (add) => add._id === e.target.value
    );
    setAddress(newAddress);
  };

  useEffect(() => {
    setDefaultDeliveryInfo();
  }, [deliveryInfo]);

  return (
    <Payment>
      <HeaderMini />
      <PaymentHeader>
        <Container>
          <ContainerIcon>
            <Icon>
              <Link to="/cart">
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"></LogoImg>
              </Link>
              <PayText>Thanh Toán</PayText>
            </Icon>
          </ContainerIcon>
        </Container>
      </PaymentHeader>

      {/* Địa chỉ */}
      <InforPayment>
        <InforText>
          <InforLine></InforLine>
          <AddressHeader>
            <AddressPayment>
              <AddressText>
                <IconAddress></IconAddress>
                <IconText>Địa Chỉ Nhận Hàng</IconText>
              </AddressText>
            </AddressPayment>
            {loading ? (
              <CenterHandle>Loading...</CenterHandle>
            ) : !address ? (
              <CenterHandle>
                Vui lòng thêm địa chỉ.
                <Link className="LinkAddress" to="/user/account/address">
                  Tại đây!
                </Link>
              </CenterHandle>
            ) : (
              <AddressWrapper>
                <AddressName>Họ và Tên: {address.name}</AddressName>
                <AddressName>Số điện thoại: {address.phoneNumber}</AddressName>
                <FormControl sx={{ m: 1, minWidth: 540 }}>
                  <InputLabel
                    id="address-user-label"
                    className="label-address-payment"
                  >
                    Địa chỉ
                  </InputLabel>
                  <Select
                    labelId="address-user-label"
                    id="address-user"
                    value={address._id}
                    onChange={(e) => handleChangeAddress(e)}
                    label={address.address}
                    sx={{ width: 540 }}
                    variant="standard"
                  >
                    {deliveryInfo.address.map((info) => (
                      <MenuItem value={info._id}>{info.address}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </AddressWrapper>
            )}
            {/* <AddressPeople>
                <DIV>
                  <AddressInfo>
                    <AddressName>
                      {address.name} {address.phoneNumber}
                    </AddressName>
                    <AddressLive>{address.address}</AddressLive>
                    <Custom>
                      <Link to="/user/account/address">Thay Đổi</Link>
                    </Custom>
                  </AddressInfo>
                </DIV>
              </AddressPeople>  */}
          </AddressHeader>
        </InforText>

        <ProductCart>
          <ProductText>
            <ListText>
              <TextProduct>
                <TextProduct1> Sản phẩm</TextProduct1>
              </TextProduct>
              <TextFlex></TextFlex>
              <TextDG>Đơn giá</TextDG>
              <TextSL>Số lượng</TextSL>
              <TextTT>Thành tiền</TextTT>
            </ListText>
          </ProductText>
          <DIV>
            <CartProduct>
              <DIV>
                <CartProductList>
                  {orderItems.map((item, index) => {
                    let variantIndex = 0;
                    item.product.variants.map((itemVar, index) => {
                      if (itemVar._id === item.variant) {
                        variantIndex = index;
                      }
                    });
                    return (
                      <InfoProduct key={index}>
                        <ProductInfo>
                          <ImgName>
                            <ImgProduct src={item.product.productPictures[0]} />
                            <NameProduct>
                              <NameProducts>{item.product.name}</NameProducts>
                            </NameProduct>
                          </ImgName>
                          <TypeSize>
                            <TextType>
                              Loại: {item.product.variants?.[variantIndex].name}
                            </TextType>
                          </TypeSize>
                          <PriceProduct>
                            {Number(
                              item.product.price -
                                (item.product?.discountPercent / 100) *
                                  item.product.price
                            ).toLocaleString("vi")}
                            ₫
                          </PriceProduct>
                          <PriceProduct>{item.quantity}</PriceProduct>
                          <TotalPrice>
                            {Number(
                              (item.product.price -
                                (item.product?.discountPercent / 100) *
                                  item.product.price) *
                                item.quantity
                            ).toLocaleString("vi")}
                            ₫
                          </TotalPrice>
                        </ProductInfo>
                      </InfoProduct>
                    );
                  })}
                </CartProductList>
              </DIV>
            </CartProduct>
          </DIV>
        </ProductCart>

        <PaymentProduct>
          <PaymentHeader>
            <PaymentHeaderSecond>
              <PaymentPttt>Phương thức thanh toán: </PaymentPttt>
              <PaymentTtKnh>Thanh toán khi nhận hàng</PaymentTtKnh>
              <PaymentChange>Thay đổi</PaymentChange>
            </PaymentHeaderSecond>
          </PaymentHeader>
          <PaymentFooter>
            <FooterTth>Tổng tiền hàng</FooterTth>
            <FooterPrice>
              {Number(totalPrice).toLocaleString("vi")}₫
            </FooterPrice>
            <FooterPvc>Phí vận chuyển</FooterPvc>
            <FooterPvcPrice>
              {Number(shippingFee).toLocaleString("vi")}₫
            </FooterPvcPrice>
            <FooterTotal>Tổng thanh toán:</FooterTotal>
            <FooterTotalPrice>
              {Number(totalAmount).toLocaleString("vi")}₫
            </FooterTotalPrice>
          </PaymentFooter>
          <OrderFooter>
            <OrderFooterText>
              <OrderFooterTextSecond>
                Nhấn "Đặt Hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                <DieuKhoan href="https://shopee.vn/legaldoc/policies/">
                  Điều khoản Shopee
                </DieuKhoan>
              </OrderFooterTextSecond>
            </OrderFooterText>
            <ButtonOrder onClick={() => handlePayment()}>Đặt Hàng</ButtonOrder>
            {openModal && <ModalPayment closeModal={setOpenModal} />}
          </OrderFooter>
        </PaymentProduct>
      </InforPayment>
      <FooterMini />
    </Payment>
  );
};

const AddressWrapper = styled.div`
  margin-left: 10px;
`;

const CenterHandle = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const PaymentProduct = styled.div`
  margin: 10px 0;
  border-radius: 3px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%);
`;

const PaymentHeaderSecond = styled.div`
  display: flex;
  align-items: center;
  min-height: 90px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;
const PaymentPttt = styled.div`
  flex: 1;
  width: 200px;
  font-size: 16px;
  color: #222;
`;
const PaymentTtKnh = styled.div`
  font-size: 16px;
  color: #ee4d2d;
`;
const PaymentChange = styled.div`
  margin-left: 60px;
  color: #05a;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`;

const PaymentFooter = styled.div`
  background: #fffefb;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-top: 1px solid #f1f0ed;
  padding-top: 15px;
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  grid-template-rows: auto;
  grid-column-gap: 10px;
`;
const FooterTth = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  grid-row-start: 11;
  grid-row-end: 12;
  grid-column-start: 2;
  grid-column-end: 3;
`;
const FooterPrice = styled.div`
  padding: 0 25px 0 10px;
  height: 40px;
  min-width: 100px;
  grid-row-start: 11;
  grid-row-end: 12;

  grid-column-start: 3;
  grid-column-end: 4;
  -ms-grid-column-span: 1;

  justify-content: flex-end;

  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
`;
const FooterPvc = styled.div`
  grid-row-start: 12;
  grid-row-end: 13;
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
`;
const FooterPvcPrice = styled.div`
  grid-row-start: 12;
  grid-row-end: 13;
  padding: 0 25px 0 10px;
  height: 40px;
  min-width: 100px;
  grid-column-start: 3;
  grid-column-end: 4;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const FooterTotal = styled.div`
  grid-row-start: 17;
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  grid-row-end: 18;
`;
const FooterTotalPrice = styled.div`
  grid-row-start: 17;
  grid-row-end: 18;
  height: 50px;
  font-size: 28px;
  color: #ee4d2d;
  padding: 0 25px 0 10px;
  display: flex;
  align-items: center;
  min-width: 100px;
  grid-column-start: 3;
  grid-column-end: 4;
  justify-content: flex-end;
`;
const OrderFooter = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 32;
  grid-row-end: 33;
  min-height: 95px;
  padding: 0 30px;
  background-color: white;
  margin: 10px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px dashed rgba(0, 0, 0, 0.09);
`;
const OrderFooterText = styled.div`
  padding: 32px 25px 32px 0;
  flex: 1;
`;
const OrderFooterTextSecond = styled.div`
  padding: 0 15px;
  font-size: 14px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fffdf8;
  color: rgba(0, 0, 0, 0.54);
`;
const DieuKhoan = styled.div`
  margin-left: 10px;
  color: #05a;
  text-decoration: none;
  background-color: transparent;
`;
const ButtonOrder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  border-radius: 2px !important;
  text-transform: capitalize;
  outline: none;
  background: #ee4d2d;
  color: #fff;
  cursor: pointer;
  width: 210px;
  height: 40px;
  font-size: 16px;
  padding: 0;
  align-self: center !important;
`;

const Payment = styled.div`
  transition: margin-top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #f5f5f5;
`;
const PaymentHeader = styled.div`
  min-width: 1200px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  height: 100px;
`;
const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
`;
const ContainerIcon = styled.div`
  display: flex;
  padding-left: 18px;
`;
const Icon = styled.span`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  display: flex;
  align-items: flex-end;
`;

const LogoImg = styled.img`
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 46px;
  cursor: pointer;
  fill: #ee4d2d;
`;
const PayText = styled.div`
  border-left: 1px solid #ee4d2d;
  color: #ee4d2d;
  text-transform: capitalize;
  font-size: 20px;
  margin-left: 15px;
  line-height: 30px;
  height: 30px;
  padding-left: 15px;
  margin-bottom: 1px;
`;

const InforPayment = styled.div`
  width: 1200px;
  margin: 0 auto 70px;
`;
const InforText = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  background: #fff;
`;
const InforLine = styled.div`
  height: 3px;
  width: 100%;
  background-position-x: -30px;
  background-size: 116px 3px;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
`;
const AddressHeader = styled.div`
  padding: 28px 30px 24px;
`;
const AddressPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddressText = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #ee4d2d;
  margin-bottom: 20px;
  text-transform: capitalize;
  flex: 1 1 auto;
`;
const IconAddress = styled.div`
  display: flex;
  margin-right: 9px;
`;
const IconText = styled.div``;
const AddressPeople = styled.div`
  display: flex;
  align-items: center;
`;
const DIV = styled.div``;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  word-break: break-word;
  line-height: 16px;
  max-height: 32px;
`;
const AddressName = styled.div`
  max-width: 250px;
  font-weight: 600;
  color: #222;
  word-break: break-word;
  line-height: 16px;
  max-height: 32px;
  margin-bottom: 20px;
`;
const AddressLive = styled.div`
  margin-left: 20px;
  word-break: break-word;
  max-width: 60%;
  max-width: 600px;
`;

const Custom = styled.span`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;

  color: #05a;
  text-transform: uppercase;
  font-weight: 500;
`;
const ProductCart = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 3px;
  margin-top: 12px;
`;
const ProductText = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 16px 30px 10px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.09);
  border-radius: 3px;
`;

const ListText = styled.div`
  width: 100%;
  height: 30px;
  font-size: 14px;
  color: #bbb;
  display: flex;
  align-items: center;
`;
const TextProduct = styled.div`
  justify-content: flex-start;
  text-align: left;
  flex: 4;
`;
const TextProduct1 = styled.div`
  display: flex;
  align-items: center;
  font-size: 19px;
  color: #222;
`;

const TextFlex = styled.div`
  flex: 2;
  justify-content: center;
  text-align: center;
`;
const TextDG = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
`;
const TextSL = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
`;
const TextTT = styled.div`
  justify-content: flex-end;
  text-align: right;
  flex: 2;
`;

const CartProduct = styled.div`
  background: #fff;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 9%);
  border-radius: 3px;
  padding-bottom: 10px;
`;
const CartProductList = styled.div`
  position: relative;
  background: #fff;

  border-radius: 3px;
`;

const InfoProduct = styled.div``;
const ProductInfo = styled.div`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin: 0 30px 10px 30px;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #222;
  min-height: 55px;
`;
const ImgName = styled.div`
  justify-content: flex-start;
  flex: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;

  align-items: center;
`;
const ImgProduct = styled.img`
  border: 0;
  width: 40px;
  aspect-ratio: auto 40 / 40;
  height: 40px;
`;
const NameProduct = styled.span`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
const NameProducts = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TypeSize = styled.div`
  justify-content: flex-start;
  color: #929292;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  flex: 2;
`;
const TextType = styled.span`
  padding-left: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PriceProduct = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TotalPrice = styled.div`
  justify-content: flex-end;
  flex: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
`;

export default PaymentPage;
