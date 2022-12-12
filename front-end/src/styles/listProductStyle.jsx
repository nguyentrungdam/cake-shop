import styled from "styled-components";
export const ListProductWrapper = styled.div`
  margin-top: 80px;
  .section-header {
    margin-bottom: 50px;
  }
  .section-header__title {
    font-size: 2.06471em;
    margin-bottom: 0;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .search-bar--page {
    max-width: 300px;
    margin-top: -20px;
  }
  .input-group {
    display: flex;
  }
  .input-group .input-group-field {
    flex: 1 1 auto;
    min-width: 0;
    border-radius: 0;
    margin: 0;
  }
  input {
    background-color: transparent;
    color: inherit;
    border: 1px solid #e8e8e1;
    max-width: 100%;
    padding: 8px 10px;
    -webkit-appearance: none;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  form {
    margin: 0;
  }
  .input-group-btn {
    flex: 0 1 auto;
    padding: 0;
    margin: 0;
  }

  .input-group-btn .btn {
    margin-top: 0;
    height: 100%;
    background-image: none !important;
  }
  .search-bar .icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .icon {
    display: inline-block;
    fill: currentColor;
  }
  .btn:not(.btn--no-animate):not(.btn--tertiary) {
    background: #111;
    background-size: 29px;
  }
  .btn:not(.btn--no-animate):not(.btn--tertiary):hover {
    opacity: 0.8;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  .btn {
    border-radius: 0;
    display: inline-block;
    padding: 9px 20px;
    margin: 0;
    width: auto;
    min-width: 90px;
    cursor: pointer;
    user-select: none;
    -webkit-appearance: none;
    color: #fff;
  }
  h2 {
    font-size: 1.58824em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  ////////////////
  .main-content {
    min-height: 700px;
    display: block;
  }
  .collection-hero--container {
    display: flex;
    border-bottom: 1px solid #e8e8e1;
  }
  .collection-hero--container .collection-hero {
    flex-basis: 50%;
  }
  .collection-hero {
    background: #fff;
    height: 550px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .collection-hero .collection-hero__image {
    -webkit-animation: h 2.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
    animation: h 2.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
    transition: none;
    background-image: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/collections/stripes_720x.png?v=1638202423);
    opacity: 0;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  @keyframes h {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  .collection-hero--container .collection--description {
    display: flex;
    flex-basis: 50%;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 80px;
    padding-right: 40px;
    margin-top: 20px;
    padding: 20px 20px 0;
  }
  .collection--description {
    justify-content: flex-start !important;
  }

  .collection-hero--container .collection--description .animation-contents {
    font-size: 3.52941em;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    display: block;
    line-height: 1.2;
  }
  .collection-hero--container .collection--description * {
    max-width: 570px;
  }
  .rte > div {
    margin-bottom: 20px;
  }
  .rte p {
    margin-bottom: 25px;
    margin: 0 0 20px;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-weight: 500;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  #read-more-collection {
    cursor: pointer !important;
  }

  .rte a:not(.rte__image) {
    text-decoration: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 0;
    color: #000;
    background: 0;
  }

  .rte a:not(.btn):hover:after {
    width: 100%;
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
  //////filter/////////
  .page-content {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .page-width {
    padding: 60px 40px;
    max-width: 1500px;
    margin: 0 auto;
  }
  .page-width-historyOrder {
    padding: 20px 40px;
  }
  .page-width-padding {
    padding: 40px 40px;
    padding-bottom: 60px;
    max-width: 1500px;
    margin: 0 auto;
  }
  .page-width-little-padding {
    padding: 0px 40px;
    max-width: 1500px;
    margin: 0 auto;
  }
  .collection-filter {
    margin-bottom: 20px;
  }
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -30px;
    display: flex;
    flex-wrap: wrap;
  }
  .grid--uniform .medium-up--one-quarter:nth-child(4n + 1) {
    clear: both;
  }
  .collection-filter .grid__item {
    width: 33%;
    display: flex;
    align-items: center;
  }

  .grid__item {
    float: left;
    padding-left: 30px;
    min-height: 1px;
  }

  .collection-filter .grid__item label {
    margin: 0;
    padding-right: 15px;
    width: 150px;
  }
  label {
    cursor: pointer;
    display: block;
    font-size: 0.76471em;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-family: Poppins, sans-serif;
    font-weight: 800;
  }
  .collection-filter select {
    display: block;
    width: 100%;
  }
  select {
    background-color: transparent;
    color: inherit;
    appearance: none;
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/ico-select.svg);
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 11px;
    vertical-align: middle;
    padding-right: 28px;
    text-indent: 0.01px;
    cursor: pointer;
    border: 1px solid #e8e8e1;
    max-width: 100%;
    padding: 8px 10px;
    border-radius: 0;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
    font-weight: 500;
  }
  option {
    color: #000;
    background-color: #fff;
  }
  .collection-filter .grid__item:nth-child(2) {
    padding-top: 0;
    float: none;
  }
  ////list items////////////
  .CollectionAjaxContent {
    display: flex;
    flex-direction: column;
  }
  .medium-up--one-quarter {
    width: 25%;
  }
  .grid-product__content {
    margin-bottom: 40px;
    position: relative;
    text-align: left;
  }
  .grid-product__link {
    display: block;
    color: #000;
    text-decoration: none;
    background: 0;
  }

  .grid-product__image-mask {
    position: relative;
    overflow: hidden;
  }

  .grid-product__meta {
    position: relative;
    padding: 10px 0 6px;
    font-weight: 500;
    line-height: 1.5;
  }
  .image-wrap {
    background: #fff;
    overflow: hidden;
  }
  .disable-item {
    pointer-events: none;
    position: relative;
  }

  .hide-sold-out {
    display: none;
  }

  .grid-product__image-mask-2 {
    position: absolute;
    z-index: 10;
    width: 30%;
    top: 10px;
    left: 10px;
    opacity: 1 !important;
    /* right: 25%; */
  }
  .image-wrap-size {
    height: 0;
    padding-bottom: 100.67516879219805%;
  }
  .image-in-list {
    animation: h 1.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
    opacity: 0;
    display: block;
    width: 100%;
    margin: 0 auto;
    transition: opacity 0.4s ease;
    max-width: 100%;
    border: 0 none;
  }
  .grid-product__title {
    font-size: 1.17647em;
  }
  .grid-product__price {
    font-size: 0.94118em;
    margin-top: 3px;
  }
  .free-delivery {
    color: #ff01bd;
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  ///////pagination/////////
  .contain-pagination {
    padding: 0;
    margin-top: 50px;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
    font-size: 1.1rem;
  }

  a {
    color: #000;
    text-decoration: none;
  }
  .a {
    width: 40px;
    height: 40px;
    padding: 8px 14px;
  }
  .active {
    color: #ff01bd;
  }
  .li {
    cursor: pointer;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 50%;
  }
  .li:hover {
    background-color: pink;
  }
  ///////////////////////////
  .cart-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .flex {
    display: flex;
  }
  .item-img {
    width: 100px;
    height: 100px;
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
    margin-left: 30px;
    font-weight: 600;
  }
  .order-title {
    font-weight: 600;
  }
  .main-content2 {
    margin-left: 50px;
  }
  .p-orders-history {
    margin: 0;
  }
  .h3-total {
    margin: 0;
    padding: 0;
  }
  .btn-shopnow {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    display: inline-block;
    user-select: none;
    -webkit-appearance: none;
    border-radius: 0;
    color: #fff;
    padding: 9px 20px;
    transition: padding-right 0.3s, background 0.3s;
    width: 250px;
    min-width: 90px;
    line-height: 1.42;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    letter-spacing: 0;
    margin: 0 0 20px 0;
    background: #111
      url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow.png)
      no-repeat 150% 35%;
    background-size: 29px;
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow-2x.png);
  }
  .btn-shopnow:hover {
    padding-right: 55px;
    background-position: 91% 35%;
  }
`;
