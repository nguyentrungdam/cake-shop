import styled from "styled-components";
export const CartWrapper = styled.div`
  padding-top: 60px;
  .main-content {
    min-height: 100%;
    display: block;
  }
  a {
    cursor: pointer;
  }
  .page-content {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .page-width {
    padding: 0 40px;
    max-width: 1500px;
    margin: 0 auto;
  }
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .grid__item {
    float: left;
    min-height: 1px;
  }
  .section-header {
    margin-bottom: 50px;
    display: block;
  }
  .section-header__title {
    margin-bottom: 0;
    font-size: 1.76471em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .cart {
    margin: 0;
  }
  .cart__row:first-child {
    border-bottom: 1px solid #e8e8e1;
    padding-bottom: 40px;
  }
  .cart__row {
    position: relative;
    margin-bottom: 40px;
  }
  .cart__row__checkout {
    position: relative;
    margin-bottom: 160px;
  }
  .cart__header-labels {
    font-family: Poppins, sans-serif;
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  .grid--full {
    margin-left: 0;
  }
  .grid--full > .grid__item {
    padding-left: 0;
  }
  .grid__item[class*="--push"] {
    position: relative;
  }
  .medium-up--push-three-fifths {
    left: 60%;
  }
  .medium-up--two-fifths {
    width: 40%;
  }
  .text-center {
    text-align: center !important;
  }
  .one-third {
    width: 33.33333%;
  }
  .text-right {
    text-align: right !important;
  }
  .two-thirds {
    width: 66.66667%;
  }
  .cart__row--table-large {
    display: table;
    table-layout: fixed;
    width: 100%;
  }
  .cart__row--table-large .grid__item {
    display: table-cell;
    vertical-align: middle;
    float: none;
  }
  .one-quarter {
    width: 25%;
  }
  .cart__image {
    display: block;
    margin-left: 30px;
    color: #000;
    text-decoration: none;
    background: 0;
  }
  .cart__image img {
    width: 191px;
    display: block;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
  .three-quarters {
    width: 75%;
  }
  .cart__product-name {
    font-size: 0.94118em;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
    color: black;
    text-decoration: none;
  }
  .cart__product-meta {
    margin-bottom: 0;
  }
  p {
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
    font-weight: 500;
  }
  .cart__product-meta + .cart__product-meta {
    margin-top: 20px;
  }
  .rte a:not(.rte__image) {
    text-decoration: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 0;
  }
  .rte a {
    color: #000;
    background: 0;
  }
  .rte a:not(.btn):after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    border-bottom: 2px solid currentColor;
    transition: width 0.5s ease;
  }
  .rte a:not(.btn):hover:after {
    width: 100%;
  }
  .cart__row--table {
    display: table;
    table-layout: fixed;
    width: 100%;
  }
  .medium-up--text-center {
    text-align: center !important;
  }
  .medium-up--one-third {
    width: 16.33333%;
  }
  input[type="number"] {
    font-size: 0.94118em;
  }
  .cart__product-qty {
    text-align: center;
    margin: 0 auto;
    max-width: 80px;
  }
  input {
    background-color: transparent;
    color: inherit;
    border: 1px solid #e8e8e1;
    padding: 8px 10px;
    border-radius: 0;
    -webkit-appearance: none;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  .cake-info {
    padding-left: 30px;
  }
  .cart__price {
    display: block;
  }
  .money {
    font-weight: 500;
  }
  .medium-up--push-seven-twelfths {
    left: 58.33333%;
  }
  .medium-up--text-right {
    text-align: right !important;
  }
  .medium-up--five-twelfths {
    width: 33.22%;
  }
  .one-half {
    width: 50%;
  }
  .h4 {
    font-size: 1.1em;
    margin: 0 0 20px;
    font-weight: 800;
    font-family: Poppins, sans-serif;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .cart__checkout-wrapper {
    margin-top: 20px;
  }
  .cart__row:last-child {
    border-top: 1px solid #e8e8e1;
    padding-top: 20px;
  }
  .cart .link.link--small {
    font-size: 1rem;
    margin-right: 1.5rem;
  }
  .ajaxcart__note.ajaxcart__note--terms {
    text-align: left;
    font-size: 0.925em;
    font-family: Quicksand, sans-serif;
    font-weight: 500;
    text-transform: none;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }
  .ajaxcart__note--terms {
    margin-top: 10px;
    opacity: 0.9;
  }
  .rte p {
    margin-bottom: 25px;
  }

  .ajaxcart__note--terms input {
    vertical-align: middle;
  }
  .btn {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    display: inline-block;
    padding: 9px 20px;
    margin: 0;
    width: auto;
    min-width: 174px;
    line-height: 1.42;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    cursor: pointer;
    border: 1px solid transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 3px;
    color: #fff;
    background: #111;
    transition: padding-right 0.3s, background 0.3s;
  }
  .btn:hover {
    opacity: 0.8;
  }

  .flex {
    display: flex;
    flex-direction: row;
  }
  .container-checkbox {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 100px;
    left: 0;
    border-radius: 4px;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container-checkbox:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container-checkbox input:checked ~ .checkmark {
    background-color: #ff01bd;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container-checkbox .checkmark:after {
    left: 8px;
    top: 3px;
    width: 5px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .choseAll {
    margin-top: 20px;
  }
  .margin-top-20 {
    margin-top: 20px;
  }
`;
// * null cart
export const Container = styled.div`
  padding: 60px;
  .container-cart {
  }
  .NullCart {
    margin-right: auto;
    margin-left: auto;
    width: 1500px;
    height: 21rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .NullCartLogo {
    width: 6.75rem;
    height: 6.125rem;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png);
  }
  .NullCartTitle {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.075rem;
    line-height: 1rem;
    margin: 1.125rem 0;
    font-weight: 700;
  }
  .NullCartBuyNow {
    font-size: 1.2rem;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 450;
    line-height: 1;
    user-select: none;
    letter-spacing: 0;
  }
  .NullCartButton {
    padding: 0.625rem 2.625rem;
    position: relative;
    overflow: visible;
    outline: 0;
    background: #ff01bd;
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
  }
  .NullCartButton:hover {
    opacity: 0.8;
  }
  .LinkBuy {
    text-decoration: none;
    color: #ff01bd;
  }
`;
