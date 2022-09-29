import styled from "styled-components";
export const HomeContentWrapper = styled.div`
  margin-top: 40px;

  .main-content {
    min-height: 700px;
    display: block;
  }

  .index-section--flush {
    min-height: 650px;
    margin: 0;
  }

  .background-media-text {
    min-height: 650px;
    position: absolute;
    width: 100%;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_f6decde7-924b-4aa0-a7db-bf2f63316ef4_900x.jpg?v=1662375443);
  }

  .background-media-text__inner {
    position: absolute;
    z-index: 1;
    width: 100%;
  }

  .page-width {
    padding: 0 40px;
    max-width: 1500px;
    margin: 0 auto;
  }

  .background-media-text__aligner {
    margin: 80px 40px;
  }
  .animation-cropper {
    overflow: hidden;
    display: inline-flex;
  }
  .background-media-text__inner .animation-contents {
    -webkit-animation: f 1s cubic-bezier(0.26, 0.54, 0.32, 1) 0.5s forwards;
    animation: f 1s cubic-bezier(0.26, 0.54, 0.32, 1) 0.5s forwards;
  }

  @keyframes f {
    0% {
      opacity: 1;
      -webkit-transform: translateY(120%);
      transform: translateY(120%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .background-media-text__text {
    text-align: left;
    background: #fff;
    padding: 40px;
    width: 380px;
  }

  .larger-text .subtitle {
    font-size: 1em;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 5px;
    font-family: Futura, sans-serif;
    margin: 0 0 20px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }

  .larger-text .h3 {
    font-size: 1.76471em;
    margin: 0 0 20px;
    display: block;
    font-family: ITC Avant Garde Gothic, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
  }

  ///////////Best seller//////////////
  .index-section {
    margin: 100px 0;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .section-header__title {
    margin-bottom: 0;
    font-size: 1.58824em;
    margin: 0 0 20px;
    display: block;
    font-family: ITC Avant Garde Gothic, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
  }

  .section-header__link {
    font-family: Futura, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-weight: 400;
    font-size: 17px;
    padding-top: 6px;
    float: right;
    text-decoration: none;
    color: #000;
  }

  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -30px;
  }

  .grid-product {
    clear: both;
    width: 100%;
    float: left;
    padding-left: 30px;
    min-height: 1px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .grid-product__content {
    position: relative;
    margin: 0 15px 40px 15px;
    text-align: left;
  }

  .grid-product__content:first-child {
    margin: 0 15px 40px 0;
  }

  .grid-product__content:last-child {
    margin: 0 0 40px 15px;
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

  .image-wrap {
    background: #fff;
    overflow: hidden;
    height: 0;
    padding-bottom: 100%;
  }

  .grid-product__image {
    opacity: 0;
    border: 0 none;
    margin: 0 auto;
    transition: opacity 1s ease;
    width: 100%;
    display: block;
    animation: h 3s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
  }

  @keyframes h {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .grid-product__meta {
    position: relative;
    padding: 10px 0 6px;
    line-height: 1.5;
  }

  .grid-product__title {
    font-weight: 500;
    font-size: 1.17647em;
  }

  .grid-product__price {
    font-size: 0.94118em;
    font-weight: 500;
    margin-top: 3px;
  }

  .free-delivery {
    color: #ff01bd;
    font-family: Futura, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 0.9rem;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
    margin-bottom: 0;
    margin: 0 0 20px;
  }

  .page-width--flush-small {
    min-height: 467px;
    padding: 0 40px;
    max-width: 1500px;
    margin: 0 auto;
  }

  .btn-shopnow {
    font-family: ITC Avant Garde Gothic, sans-serif;
    font-weight: 700;
    display: inline-block;
    user-select: none;
    -webkit-appearance: none;
    border-radius: 0;
    color: #fff;
    padding: 9px 20px;
    transition: padding-right 0.3s, background 0.3s;
    width: auto;
    min-width: 90px;
    line-height: 1.42;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    cursor: pointer;
    border: 1px solid transparent;
    letter-spacing: 0;
    margin: 20px 13.33333px 0 0;
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

  ///////////Free Delivery/////////////
  .feature-row {
    margin: 0 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .feature-row__item {
    min-width: 50%;
    flex: 0 1 50%;
  }

  .feature-row__text--left {
    padding-left: 80px;
  }

  .feature-row__text {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .feature-row__item--image {
    margin: 0 auto;
    max-width: 500px;
  }

  .feature-row__item--image--link {
    color: #000;
    text-decoration: none;
    background: 0;
  }

  .feature-row__image {
    opacity: 0;
    display: block;
    width: 100%;
    margin: 0 auto;
    transition: opacity 1s ease;
    animation: h 2s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
  }

  .feature-row__text .rte {
    margin: 0;
  }

  .rte p {
    margin-bottom: 25px;
    font-weight: 500;
  }

  .larger-text p {
    font-size: 1.11765em;
    margin: 0 0 20px;
  }

  .rte > p:last-child {
    margin-bottom: 0;
  }

  ////////////Calling all Vegans//////////
  .grid-product__tag--usps {
    position: absolute;
    top: 9px;
    left: 0;
    z-index: 1;
  }

  .grid-product__tag--usps .grid-product__tag--usp__vegan {
    background: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/vegan_1.svg?v=1662558718)
      no-repeat center / contain;
  }

  .grid-product__tag--usps .grid-product__tag--usp {
    height: 100px;
    width: 100px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /////////// Delivery box ////////////
  .background-media-text__image {
    animation: h 2.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
    transition: none;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    z-index: 0;
    bottom: 0;
    width: 100%;
    background-size: cover;
    min-height: 550px;
    background-position: center;
    background-image: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/boxing_d52cd9b7-1992-4eeb-b7c9-d57c3e437b76_540x.gif?v=1636706853);
  }

  .index-section--flush--delivery {
    min-height: 550px;
    margin: 0;
  }

  .background-media-text--delivery {
    min-height: 550px;
    position: absolute;
    width: 100%;
    overflow: hidden;
    background: #111;
  }

  .background-media-text__inner--delivery {
    position: absolute;
    z-index: 1;
    width: 100%;
    max-height: 550px;
  }

  .background-media-text__inner--delivery .animation-contents {
    -webkit-animation: f 1s cubic-bezier(0.26, 0.54, 0.32, 1) 0.5s forwards;
    animation: f 1s cubic-bezier(0.26, 0.54, 0.32, 1) 0.5s forwards;
  }

  .animation-contents {
    opacity: 0;
  }
`;
