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

  .btn-banner {
    margin-top: 30px;
    border-radius: 2px;
    background-color: #111;
    padding: 5px 10px;
    color: #fff;
    cursor: pointer;
  }

  ///////////Best seller//////////////
  .index-section {
    margin: 100px 0;
  }

  .page-width {
    padding: 0 40px;
    max-width: 1500px;
    margin: 0 auto;
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
    padding-bottom: 99.55555555555554%;
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
`;
