import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ButtonPurchase from "./button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../../slices/cartSlice";
import moment from "moment";

function UserPurchase() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading } = useSelector((state) => state.order);
  const [purchase, setPurchase] = useState([]);
  const [check, setCheck] = useState('all');

  const handleRePay = async (item) => {
    let newCartItem = {};
    item.items.map((product) => {
      newCartItem = {
      product: product.product._id,
      variant: product.variant,
      quantity: product.quantity};
      dispatch(addToCart({ cartItem: newCartItem }));
      navigate("/cart");
    }
    )
  }

  const handleBtn = (e)  =>  {
    let value = e.target.value; 
    if(value === "all")
    {
      setPurchase(orders);
      setCheck(value);
    } else if(value ==="ordered") {
      const a = orders.filter((item) => item.orderStatus[0].isCompleted === true )
      setPurchase(a);
      setCheck(value);
    } else if(value ==="packed") {
      const a = orders.filter((item) => item.orderStatus[1].isCompleted === true )
      setPurchase(a);
      setCheck(value);
    } else if(value ==="shipped") {
      const a = orders.filter((item) => item.orderStatus[2].isCompleted === true )
      setPurchase(a);
      setCheck(value);
    } else if (value ==="delivered") {
      const a = orders.filter((item) => item.orderStatus[3].isCompleted === true )
      setPurchase(a);
      setCheck(value);
    }
    
  }
  useEffect(() => {
    setPurchase(orders);
  }, [orders]);

  return (
    <Container>
      <ButtonPurchase handleBtn={handleBtn} valueCss={check}/>
      <Search>
        <BiSearch
          style={{
            width: "23px",
            height: "23px",
            margin: "0 16px",
            color: "#555555CC",
          }}
        />
        <input
          className="input"
          placeholder="Tìm kiếm theo tên shop, ID đơn hàng hoặc tên sản phẩm"
        />
      </Search>
      <Wrapper>
        {loading ? (
          <CenterHandle>Loading...</CenterHandle>
        ) : purchase.length > 0 ? (
          <React.Fragment>
            {purchase.map((item) => (
              <Content key={item._id}>
                <HeaderContent>
                  <span className="storeName">Store</span>
                  <span className="status">{item.Status}</span>
                  <div className="date">
                    <span>
                      <label>Ngày Đặt Hàng :</label>{" "}
                      {moment(item.createdAt).format("DD-MM-YYYY hh:mm:ss")}
                    </span>
                  </div>
                </HeaderContent>
                {item.items.map((chil, inchil) => {
                  let variantIndex = 0;
                  chil.product.variants.map((itemVar, index) => {
                    if (itemVar._id === chil.variant) {
                      variantIndex = index;
                    }
                  });

                  return (
                    <MainContent key={inchil}>
                      <div className="item" >
                        <div className="wrapLeft">
                          <img
                            className="img"
                            src={chil.product.productPictures[0]}
                            alt="ảnh sản phẩm"
                          />
                          <div className="wrapLeftChil">
                            <span style={{ fontSize: "16px" }}>
                              {chil.product.name}
                            </span>
                            <span className="classify">
                              Phân loại hàng:{" "}
                              {chil.product.variants?.[variantIndex].name}
                            </span>
                            <span>x {chil.quantity}</span>
                          </div>
                        </div>
                        <div className="wrapRight">
                          <span className="price">
                            {Number(chil.price).toLocaleString("vi")}₫
                          </span>
                        </div>
                      </div>
                    </MainContent>
                  );
                })}
                <FooterContent>
                  <div className="wrap">
                    <span style={{ fontSize: "16px" }}>Tổng số tiền: </span>
                    <span className="fullPrice">
                      {Number(item.totalAmount).toLocaleString("vi")}₫
                    </span>
                  </div>
                  <div className="action">
                    <ButtonPrimary onClick={()=>handleRePay(item)}>Mua Lại</ButtonPrimary>
                  </div>
                </FooterContent>
              </Content>
            ))}
          </React.Fragment>
        ): (
          <CenterHandle>
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png"
              alt="icon"
            />
            <span>Chưa có đơn hàng</span>
          </CenterHandle>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  left: 0;
  top: 0;
  width: 970px;

  display: flex;
  flex-direction: column;
  border-radius: 1px;
`;
const CenterHandle = styled.div`
  background-color: #fff;
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;

  img {
    margin-bottom: 15px;
    width: 100px;
    height: 100px;
  }
`;
const Search = styled.div`
  padding: 12px 0;
  margin: 12px 0;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  color: #212121;
  background: #eaeaea;
  width: 100%;
  border-radius: 2px;

  .input {
    flex: 1;
    font-size: 14px;
    line-height: 16px;
    border: 0;
    outline: none;
    background-color: #efe9e9c1;
  }
`;

const Wrapper = styled.section``;
const Content = styled.div`
  background-color: #ffffff;
  margin-bottom: 12px;
  border-radius: 2px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  .storeName {
    width: 100px;
    font-size: 16px;
    font-weight: 550;
  }
  .status {
    text-transform: uppercase;
    color: #ee4d2d;
    font-weight: 550;
  }
  .date {
    display: flex;
    flex-direction: column;

    label {
      color: #0000008a;
      display: inline-flex;
      width: 110px;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    padding: 10px 15px;
  }
  .wrapLeft {
    width: 800px;
    display: flex;
    align-items: center;
  }
  .img {
    float: left;
    width: 90px;
    height: 90px;
    border: 1px solid rgba(0, 0, 0, 0.09);
  }
  .wrapLeftChil {
    display: flex;
    flex-direction: column;
  }
  .classify {
    color: #0000008a;
  }
  span {
    padding: 5px 10px;
  }
  .wrapRight {
    width: 100px;
  }
  .price {
    color: #ee4d2d;
    font-size: 16px;
  }
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  background-color: #fffefb;
  height: 120px;
  padding: 20px 40px;

  .wrap {
    padding-bottom: 15px;
  }

  .fullPrice {
    color: #ee4d2d;
    font-size: 22px;
  }
`;

const ButtonPrimary = styled.button`
  height: 40px;
  width: 160px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.textColorWhite};

  :hover {
    background-color: ${({ theme }) => theme.btnPrimaryColorHover};
  }
`;
export default UserPurchase;
