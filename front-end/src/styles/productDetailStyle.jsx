import styled from "styled-components";
export const ProductDetailWrapper = styled.div`
  .main-content {
    display: block;
  }
  .top {
    min-height: 1100px;
  }
  .page-content {
    padding-top: 100px;
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
    margin-left: -30px;
  }
  .medium-up--three-fifths {
    width: 60%;
  }
  .grid__item {
    float: left;
    padding-left: 30px;
    min-height: 1px;
  }
  .product-section div[data-product-images] {
    position: relative;
  }
  .product-section div[data-product-images] .grid-product__tag--usps {
    top: 3rem;
    left: 3rem;
  }
  .grid-product__tag--usps {
    position: absolute;
    z-index: 1;
  }
  .grid-product__tag--usps .grid-product__tag--usp__butter {
    background: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/butter_1.svg?v=1662558718)
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
  .grid-product__tag--usps .grid-product__tag--usp__choc {
    background: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/choc_2.svg?v=1662981352)
      no-repeat center / contain;
  }
  .grid-product__tag--usps .grid-product__tag--usp__handmade {
    background: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/handmade_1.svg?v=1662558718)
      no-repeat center / contain;
  }
  .grid-product__tag--usps .grid-product__tag--usp:nth-child(4) {
    display: block;
  }
  .grid-product__tag--usps .grid-product__tag--usp__taste {
    background: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/files/taste_1.svg?v=1662558718)
      no-repeat center / contain;
  }
  .product__photos {
    direction: ltr;
  }
  .product__main-photos {
    order: 2;
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
  }
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
  }
  .slick-track {
    cursor: -webkit-grab;
    position: relative;
    left: 0;
    top: 0;
    display: block;
  }
  .slick-track1 {
    opacity: 1;
    width: 84px;
    transform: translate3d(0px, 0px, 0px);
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    width: 840px;
  }
  .product-image-main {
    position: relative;
    padding: 40px;
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/sprinkles.svg?v=1436288…);
    background-size: 300px;
  }
  .image-wrap {
    background: #fff;
    overflow: hidden;
    height: 0;
    padding-bottom: 99.55555555555554%;
  }
  .product__main-photos .slick-initialized img,
  .product__main-photos .starting-slide img {
    display: block;
  }
  .aos-animate .image-wrap .lazyloaded:not([role="presentation"]) {
    animation: h 1.5s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
  }
  .product__photos img {
    margin: 0 auto;
    width: 74%;
  }
  @keyframes h {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .product__photo-zoom {
    opacity: 0;
    width: 100%;
    top: 0;
    left: 0;
    margin: 0;
    border-radius: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: zoom-in;
  }
  .btn--circle {
    padding: 10px;
    min-width: 0;
    line-height: 1;
  }
  .btn--body {
    background-color: #fff;
    color: #000;
  }
  .btn--no-animate {
    background-image: none;
    transition: none;
  }
  .btn {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    border: 1px solid transparent;
    user-select: none;
    -webkit-appearance: none;
    background: #111;
  }
  .btn--body,
  .btn--body:active,
  .btn--body:hover {
    background-color: #fff;
    color: #000;
  }
  html:not(.tab-outline) :focus {
    outline: 0;
  }
  .alt {
    padding: 0;
    margin: 0 auto;
    display: block;
    min-height: 40px;
    text-align: center;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .product__thumbs--below {
    margin-top: 20px;
  }
  .product__thumbs {
    position: relative;
  }
  .product__thumbs--below .product__thumb-item {
    margin-right: 20px;
    width: 148px;
  }
  .product__thumb-item.slick-current {
    border-color: #000;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .product__thumbs--below .product__thumb-item:last-child {
    margin-right: 0;
  }
  ///////modal////////////
  .threeSixty-popup.open {
    display: block;
  }
  .threeSixty-popup {
    display: none;
    width: 60vw;
    position: fixed;
    padding: 40px;
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/sprinkles.svg?v=1436288…);
    background-size: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 16;
    max-width: max-content;
  }
  .threeSixty-popup button {
    top: 0;
    right: 0;
    position: absolute;
    width: 35px;
    height: 35px;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .threeSixty-popup button:hover {
    background-color: red;
  }

  .iframe-cake {
    max-width: 100%;
    max-height: 100vw;
  }
  .threeSixty-overlay.open {
    display: block;
  }
  .threeSixty-overlay {
    display: none;
    position: fixed;
    z-index: 14;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.9);
  }
  //////////////bên phải//////////
  .medium-up--two-fifths {
    width: 40%;
  }
  .product-single__meta {
    padding-left: 45px;
  }
  .product-single__title {
    font-size: 30px;
    margin-bottom: 10px;
    word-wrap: break-word;
  }
  .h2 {
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .product__price {
    font-size: 1.47059em;
    font-weight: 500;
  }
  .free-delivery {
    color: #ff01bd;
    font-size: 0.9rem;
    margin-bottom: 0;
    font-weight: 500;
  }
  .product-single__description-full {
    margin: 40px 0;
    font-weight: 500;
  }
  .rte p {
    margin-bottom: 25px;
  }
  .rte > p:last-child {
    margin-bottom: 0;
  }
  .free {
    text-decoration: underline;
    color: #2b00ff;
  }
  .hr--medium {
    margin: 35px auto;
    height: 1px;
    border: 0;
    border-top: 1px solid #e8e8e1;
  }
  p img {
    margin: 0;
    max-width: 100%;
    border: 0 none;
  }
  .product-single__form {
    margin-bottom: 40px;
  }
  form {
    margin: 0;
  }
  .variant-wrapper {
    margin-bottom: -12px;
  }
  .variant__label {
    display: block;
    margin-bottom: 30px;
    cursor: pointer;
    font-style: normal;
  }
  label {
    font-size: 0.76471em;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  .variant-input-wrap {
    border: 0;
    padding: 0;
    margin: 0 0 26.66667px;
    position: relative;
  }
  .variant-input {
    display: inline-block;
  }
  .variant-input-wrap input {
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
  }
  input[type="radio"] {
    margin: 0 10px 0 0;
    padding: 0;
  }
  input {
    background-color: transparent;
    color: inherit;
    border: 1px solid #e8e8e1;
    max-width: 100%;
    border-radius: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .variant-input-wrap label {
    box-shadow: 0 0 0 1px #e8e8e1;
    position: relative;
    display: inline-block;
    font-weight: 400;
    padding: 7px 15px;
    margin: 0 8px 12px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    text-transform: none;
    background-color: #fff;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    cursor: pointer;
  }
  .variant-input-wrap label.active {
    box-shadow: 0 0 0 2px #000;
  }
  .noneactive {
    box-shadow: 0;
  }

  .product__quantity {
    margin: 20px 0 0;
  }
  .product__quantity label {
    display: block;
    margin-bottom: 10px;
  }
  .js-qty__wrapper {
    position: relative;
    max-width: 100px;
    min-width: 75px;
    overflow: visible;
    background-color: #fff;
    color: #000;
  }
  .js-qty__num {
    display: block;
    background: 0;
    text-align: center;
    width: 100%;
    padding: 8px 25px;
    margin: 0;
    font-weight: 500;
    z-index: 1;
    border: 1px solid #ccc;
    user-select: none;
  }

  .js-qty__adjust {
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    border: 1px solid #ccc;
    overflow: hidden;
    padding: 0 5px;
    line-height: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: background-color 0.1s ease-out;
    z-index: 2;
    fill: #000;
    display: block;
    background: 0;
    text-align: center;
  }
  .js-qty__adjust--minus {
    left: 0;
    border-right: 1px solid #f2f2f2;
  }

  .js-qty__adjust .icon {
    display: block;
    font-size: 8px;
    width: 10px;
    height: 10px;
    fill: inherit;
  }
  .icon__fallback-text {
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
  }
  .js-qty__adjust--plus {
    right: 0;
    border-left: 1px solid #f2f2f2;
  }
  .js-qty__adjust:active {
    background-color: #d2d2c4;
    border: 0 none;
  }
  .add-to-cart {
    margin-top: 20px;
  }
  .btn--full {
    width: 100%;
    padding: 9px 20px;
    font-size: 0.94118em;
  }
  .btn--no-animate {
    background-image: none;
    transition: none;
  }
  .add-to-basket {
    color: #fff;
  }
  .product-single__meta .social-sharing {
    margin-top: 40px;
  }
  .social-sharing__link {
    display: inline-block;
    color: #000;
    border-radius: 2px;
    font-size: 0.94118em;
    margin: 0 18px 0 0;
    text-decoration: none;
    font-weight: 400;
  }
  .social-sharing .icon {
    height: 18px;
    width: 18px;
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    fill: #111;
  }
  .social-sharing__title {
    display: inline-block;
    vertical-align: middle;
    padding-right: 15px;
    padding-left: 7px;
    font-weight: 500;
  }
  .visually-hidden {
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
  }
  //////////Gợi ý///////////////
  .index-section {
    margin: 200px 0;
  }
  .section-header {
    margin-bottom: 50px;
    display: block;
  }
  .section-header__title {
    margin-bottom: 0;
    font-size: 1.47059em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .medium-up--one-third {
    width: 33.33333%;
  }
  .product-single__related .grid-product__content {
    margin-bottom: 0;
  }
  .grid-product__content {
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

  .image-recommend {
    height: 0;
    padding-bottom: 100.67516879219805%;
  }

  .image-wrap img:not([role="presentation"]) {
    display: block;
  }
  img[data-sizes="auto"] {
    width: 100%;
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
  .grid-product__image {
    opacity: 0;
    margin: 0 auto;
  }
  .grid-product__secondary-image {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    height: 456.38px;
    opacity: 0;
  }

  .grid-product__image-mask:hover {
    .image-recommend {
      opacity: 0;
    }
    .grid-product__secondary-image {
      opacity: 1;
      transition: 0.5s;
    }
  }

  .shopify-section {
    min-height: 476px;
    margin: 250px 0;
  }
  .shopify-section2 {
    min-height: 250px;
  }
  .grid-product__meta {
    position: relative;
    padding: 10px 0 6px;
    line-height: 1.5;
  }
  .grid-product__title {
    font-size: 1.17647em;
    font-weight: 500;
  }
  /////////collection///////
  .skrim-grid--pagination .skrim__item {
    height: 350px;
  }
  .grid--no-gutters .grid__item {
    padding-left: 0;
  }
  .skrim__item {
    overflow: hidden;
  }
  .medium-up--one-half {
    width: 50%;
  }
  .product-navigation .skrim__item-content {
    background: #111;
  }
  .skrim__link,
  .skrim__overlay {
    display: block;
    width: 100%;
    height: 100%;
  }
  .skrim__item-content {
    position: relative;
    overflow: hidden;
  }
  .skrim__item:nth-child(1) .skrim__overlay {
    transition-delay: 0.25s;
  }
  [data-aos="skrim__animation"].aos-animate .skrim__overlay {
    opacity: 1;
    transform: scale(1);
  }
  [data-aos="skrim__animation"] .skrim__overlay {
    transition: opacity 1s cubic-bezier(0.44, 0.13, 0.48, 0.87),
      transform 1.5s cubic-bezier(0.44, 0.13, 0.48, 0.87),
      -webkit-transform 1.5s cubic-bezier(0.44, 0.13, 0.48, 0.87);
  }
  .skrim__item-content .skrim__overlay {
    position: relative;
  }
  .skrim__overlay {
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    display: block;
    width: 100%;
    height: 100%;
  }
  .skrim__title {
    margin: 0 25px 25px;
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    font-size: 1.23529em;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
    color: #fff;
    transition: bottom 0.5s ease;
  }
  .skrim__item-content .icon-arrow-left {
    width: 33px;
    margin-right: 8px;
    margin-left: 25px;
  }
  .skrim__item-content .icon-arrow-right {
    width: 33px;
    margin-left: 8px;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  .icon {
    display: inline-block;
    height: 20px;
    vertical-align: middle;
    fill: currentColor;
  }
  .skrim__underline-me {
    position: relative;
    display: inline-block;
  }
  .skrim__title--right {
    left: auto !important;
    right: 0;
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
    z-index: 100;
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
`;
