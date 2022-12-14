import React from "react";
import styled from "styled-components";

const EditOrder = ({ amount, showDetail, setShowDetail, ordersDetail }) => {
  console.log(ordersDetail);
  return (
    <>
      {showDetail ? (
        <Background>
          <DialogWrapper style={{ display: "inline-table" }}>
            <ButtonWhite onClick={() => setShowDetail(false)}>X</ButtonWhite>
            <Title>User order detail: </Title>
            <div className="cart-info-wrapper">
              <div className="cart-items">
                {ordersDetail.length > 0 &&
                  ordersDetail.map((item) => (
                    <div className="cart-item" key={item._id}>
                      <div className="cart-item">
                        <img
                          src={item.Product.Image.Url}
                          alt={item.Product.Name}
                          className="item-img"
                        />
                        <div className="item-info">
                          <p className="name">{item.Product.Name}</p>
                          <p className="kind">{item.Product_Size}</p>
                        </div>
                      </div>
                      <span className="price">
                        £
                        {Number(
                          item.Quantity * item.Product.Price
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="sub-total-price">
              <div className="sub-total-wrapper">
                <div className="sub-total">Total</div>
                <div className="item-price-wrapper">
                  <span className="price-total">
                    £
                    {Number(amount).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="order-status">
              <div className="order-status-title">Order status:</div>
              <select
                className="order-status-select"
                // value={productInfo.category}
                // onChange={(e) =>
                //   setProductInfo({ ...productInfo, category: e.target.value })
                // }
              >
                <option>await</option>
                <option>order</option>
                <option>delivering</option>
                <option>done</option>
              </select>

              <span
                className="badge-info"
                // onClick={() => handleViewDetail(item._id, item.Amount)}
              >
                Update
              </span>
            </div>
          </DialogWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .badge-info {
    background-color: black;
    text-align: center;
    padding: 4px 6px;
    margin-left: 144px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }
  .order-status {
    display: flex;
  }
  .order-status-title {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .order-status-select {
    margin-left: 10px;
    width: 110px;
  }
  .cart-info-wrapper {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
  }
  .cart-items {
    flex-direction: column;
    margin-bottom: 10px;
    display: flex;
  }
  .cart-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .item-img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
  .item-info {
    margin-left: 14px;
  }
  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 2px;
  }
  .kind {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .price {
    font-size: 1rem;
    margin-top: 4px;
    font-weight: 600;
  }
  .price-total {
    font-size: 1.2rem;
    color: #ff01bd;
    font-weight: 600;
  }
  .sub-total-price {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }

  .sub-total-wrapper {
    display: flex;
  }
  .sub-total {
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const DialogWrapper = styled.div`
  background-color: #fff;
  width: 31.25rem;
  padding: 1.25rem;
  overflow: visible;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  position: relative;
`;
const Title = styled.div`
  font-size: 1.5rem;
  color: #ff01bd;
  margin-top: 1.875rem;
  font-weight: 500;
`;

const ButtonWhite = styled.button`
  -webkit-line-clamp: 1;
  font-size: 1rem;
  box-sizing: border-box;
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  height: 30px;
  padding: 5px 5px;
  min-width: 30px;
  outline: 0;
  background: #fff;
  color: #555;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  position: absolute;
  top: 10px;
  right: 12px;
  overflow: visible;
  flex: 1;
  :hover {
    /* background: rgba(0, 0, 0, 0.02); */
    background: red;
    color: white;
  }
`;

export default EditOrder;
