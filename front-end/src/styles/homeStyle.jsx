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
    height: 420px;
    width: 380px;
  }

  .larger-text .subtitle {
    font-size: 1em;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 5px;
    font-family: Quicksand, sans-serif;
    margin: 0 0 20px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }

  .larger-text .h3 {
    font-size: 1.6em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
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
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
  }

  .section-header__link {
    font-family: Quicksand, sans-serif;
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
    font-family: Quicksand, sans-serif;
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
    font-family: Poppins, sans-serif;
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
    font-size: 1.07em;
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

  ///////////Shop By//////////////
  .index-section-shopby {
    margin: 100px 0;
    min-height: 650px;
  }

  .grid--small-gutters {
    margin-left: -10px;
    margin-bottom: -10px;
  }

  .grid--small-gutters .grid__item {
    padding-left: 10px;
    padding-bottom: 10px;
  }

  .skrim__item {
    overflow: hidden;
  }

  .collection--square-large {
    height: 600px;
  }

  .medium-up--one-half {
    width: 50%;
  }

  .grid__item {
    float: left;
    min-height: 1px;
  }

  .section-header__title {
    margin-bottom: 0;
    font-size: 1.58824em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
  }

  .skrim__link {
    display: block;
    width: 100%;
    height: 100%;
  }

  .skrim__item-content {
    position: relative;
    overflow: hidden;
    color: #000;
    text-decoration: none;
    background: #111;
  }

  .skrim__overlay {
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.44, 0.13, 0.48, 0.87),
      transform 1.5s cubic-bezier(0.44, 0.13, 0.48, 0.87),
      -webkit-transform 1.5s cubic-bezier(0.44, 0.13, 0.48, 0.87);
    transform: scale(1);
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-image: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/collections/stripes_900x.png?v=1638202423);
  }

  .skrim__item-content .skrim__overlay:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .skrim__overlay:after {
    opacity: 1;
    transition-duration: 1.5s;
  }

  .skrim__item-content .skrim__overlay:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.62));
    transition: all 0.5s ease;
  }

  .skrim__item-content .skrim__overlay:hover:before {
    opacity: 0.2;
    transition: opacity 0.2s ease-in;
  }

  .skrim__title {
    margin: 0 25px 25px;
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    color: #fff;
    transition: bottom 0.5s ease;
    font-size: 1.23529em;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }

  .skrim__underline-me {
    position: relative;
    display: inline-block;
  }

  .skrim__underline-me:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    border-bottom: 2px solid #fff;
    transition: 0.5s;
  }

  .skrim__link:hover .skrim__underline-me:after {
    width: 100%;
  }
  .skrim__link:hover .skrim__title {
    bottom: 10px;
  }

  .skrim__item {
    overflow: hidden;
  }

  .collection--square-small {
    height: 300px;
  }
  .medium-up--one-quarter {
    width: 25%;
  }

  .collection--wide {
    height: 300px;
  }

  ///////easy 123/////////
  .index-section + .index-section {
    margin-top: 0;
  }

  .text-center {
    text-align: center !important;
  }

  .grid__item[class*="--push"] {
    position: relative;
  }
  .medium-up--push-one-eighth {
    left: 12.5%;
  }
  .medium-up--three-quarters {
    width: 75%;
  }
  .rte .enlarge-text p:last-child {
    margin-bottom: 0;
  }
  .rte .enlarge-text p {
    font-size: 1.41176em;
  }
  .h2-easy {
    font-size: 1.6em;
    font-weight: 700;
  }
  .grid--flush-bottom {
    margin-bottom: -30px;
    overflow: auto;
  }
  .grid--uniform .medium-up--one-third:nth-child(3n + 1) {
    clear: both;
  }
  .grid--flush-bottom > .grid__item {
    margin-bottom: 30px;
  }
  .medium-up--one-third {
    width: 33.33333%;
    padding-left: 30px;
  }
  .text-left {
    text-align: left !important;
  }
  .image-wrap--easy {
    height: 0;
    padding-bottom: 66.66666666666667%;
    background: #fff;
    overflow: hidden;
  }
  .text-spacing {
    margin-bottom: 20px;
  }

  .aos-animate .image-wrap--easy .lazyloaded:not([role="presentation"]) {
    animation: h 1.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
  }

  .image-wrap--easy img:not([role="presentation"]) {
    opacity: 0;
  }
  .image-wrap--easy img:not([role="presentation"]) {
    display: block;
  }

  img[data-sizes="auto"] {
    width: 100%;
    max-width: 100%;
    border: 0 none;
  }

  .lazyloaded {
    transition: opacity 0.4s ease;
  }
  .h3-easy {
    font-size: 1.47059em;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .rte-setting > p:last-child {
    margin-bottom: 0;
  }
  .rte-setting > p {
    font-weight: 500;
  }

  //////////About bottom/////////////
  .custom-content {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    width: auto;
    margin-bottom: -30px;
    margin-left: -30px;
  }
  .align--top-middle {
    text-align: center;
  }
  .custom__item {
    flex: 0 0 auto;
    margin-bottom: 30px;
    padding-left: 30px;
    max-width: 100%;
  }
  .one-whole {
    width: 100%;
  }
  .custom__item-inner--image {
    width: 100%;
  }
  .custom__item-inner {
    position: relative;
    display: inline-block;
    text-align: left;
    max-width: 100%;
  }
  .image-wrap--about {
    height: 0;
    padding-bottom: 53.050000000000004%;
    background: #fff;
    overflow: hidden;
  }
  .aos-animate .image-wrap--about .lazyloaded:not([role="presentation"]) {
    animation: h 1.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
  }
  .image-wrap--about img:not([role="presentation"]) {
    opacity: 0;
  }
  .image-wrap--about img:not([role="presentation"]) {
    display: block;
  }
  .medium-up--push-one-eighth {
    left: 12.5%;
  }
  .medium-up--three-quarters {
    width: 75%;
  }
  .rte .enlarge-text {
    margin: 0;
  }
  .rte .enlarge-text p {
    font-size: 1.41176em;
  }
  .index-section--bottom {
    margin: 100px 0 35px 0;
  }
`;
