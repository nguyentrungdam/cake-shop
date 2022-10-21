import styled from "styled-components";
export const CartWrapper = styled.div`
  padding-top: 100px;
  .main-content {
    min-height: 825px;
    display: block;
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
    width: 41.66667%;
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
  input[type="checkbox"] {
    margin: 0 10px 0 0;
    padding: 0;
    width: 13px;
    height: 13px;
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
`;