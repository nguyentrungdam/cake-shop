import styled from "styled-components";
export const PaymentWrapper = styled.div`
  display: grid;
  min-height: 90vh;
  grid-template-columns: 56% 44%;
  .payment-method {
    margin-top: 50px;
  }
  .cod {
    margin-right: 20px;
  }
  .pay-option {
    cursor: pointer;
  }
  .contact-info {
    padding-right: 8.4vw;
    padding-left: 5vw;
    padding-top: 3.5rem;
    padding-inline-start: 13.5vw;
    padding-inline-end: 4.4vw;
    padding-bottom: 2.5em;
    display: grid;
    justify-content: stretch;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto auto 1fr auto;
    width: 100%;
    background: transparent;
    border-right: 1px solid #ccc;
  }
  .header-item--logo {
    -webkit-box-flex: 0 0 260px;
    -ms-flex: 0 0 260px;
    flex: 0 0 260px;
    min-width: 130px;
    max-width: 50%;
    display: flex;
    align-items: center;
  }
  .site-header__logo {
    margin-right: 13.33333px;
    text-align: left;
    font-size: 1.57059em;
    margin: 0;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
    color: black;
    user-select: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .main-contact {
    grid-template-columns: minmax(0, 1fr);
    position: relative;
    display: grid;
    grid-gap: 3.8rem;
    gap: 3.8rem;
  }
  .form-payment {
    display: contents;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
  }
  .contact-infomation {
    margin-top: 2.8rem;
    grid-template-columns: minmax(0, 1fr);
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
  }
  .h2 {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    letter-spacing: 0;
    font-size: 1.17059em;
    line-height: 1.2;
  }
  .right {
    font-size: 0.9rem;
    font-weight: 500;
  }
  .log-in {
    color: rgb(255, 0, 189);
    text-decoration: none;
  }
  .input {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px;
    margin-top: 10px;
  }
  .email-click {
    display: flex;
    margin-top: 10px;
    align-items: center;
  }
  .checkbox {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border-color: #ccc;
  }

  .p {
    margin-left: 10px;
    font-size: 0.9059em;
  }
  .shipping {
    margin-top: 3rem;
  }
  .back-cart {
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    display: flex;
    grid-gap: 2.6rem;
    gap: 2.6rem;
    margin-top: 2.1rem;
  }
  .btn {
    text-align: left;
    min-width: 100%;
    height: 3rem;
    position: relative;
    cursor: pointer;
    display: inline-block;
    background-color: #000;
  }
  .btn:hover {
    opacity: 0.8;
  }
  .continue {
    color: #fff;
  }
  .arrow-left {
    width: 14px;
    height: 14px;
  }
  .span-return {
    color: rgb(255, 0, 189);
    font-size: 0.8059em;
    margin-left: 10px;
    font-weight: 500;
  }

  // * cart side ////

  .cart-info {
    padding-right: 5vw;
    padding-left: 3.6vw;
    padding-top: 3.7rem;
    padding-bottom: 1.5em;
    padding-inline-start: 2.8vw;
    padding-inline-end: 13vw;
    justify-content: stretch;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto auto 1fr auto;
    width: 100%;
    background: #f9f9f9;
  }
  .cart-info-wrapper {
    margin-top: 30px;
    grid-area: content;
    max-width: calc(1100px + 10vw);
    padding: 0;
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 2.1rem;
    gap: 2.1rem;
    position: relative;
  }
  .cart-items {
    flex-direction: column;
    margin-bottom: 10px;
    display: flex;
  }
  .cart-item {
    display: flex;
    margin-bottom: 10px;
  }
  .item-img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
  .item-info {
    margin-left: 14px;
    flex-grow: 1;
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
    font-weight: 600;
  }
  .cart-info-wrapper {
    border-bottom: 1px solid #ccc;
  }
  .sub-total-price {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }
  .sub-total-price:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  .sub-total-wrapper {
    display: flex;
  }
  .sub-total {
    flex-grow: 1;
    font-size: 1rem;
    font-weight: 500;
  }
  .shipping-wrapper {
    display: flex;
  }
  .shipping-title {
    flex-grow: 1;
    font-size: 1rem;
    font-weight: 500;
  }
  .shipping-fee {
    font-size: 0.95rem;
  }
  .total {
    flex-grow: 1;
    font-size: 1.4rem;
    font-weight: 700;
  }
  .gbp {
    font-size: 0.8rem;
  }
  .price-final {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
