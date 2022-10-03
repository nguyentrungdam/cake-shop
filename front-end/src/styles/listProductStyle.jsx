import styled from "styled-components";
export const ListProductWrapper = styled.div`
  margin-top: 80px;
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
  .collection-filter {
    margin-bottom: 20px;
  }
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -30px;
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
  .pagination {
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    margin: 0 auto;
    padding: 80px 0 0;
    text-align: center;
    font-size: 0.88235em;
  }
  .pagination .page.current {
    opacity: 0.3;
    padding: 8px 12px;
  }
  .pagination > span {
    display: inline-block;
    line-height: 1;
  }
  .pagination a {
    padding: 8px 12px;
    display: inline-block;
    color: #000;
    text-decoration: none;
    background: 0;
  }
  .pagination .next,
  .pagination .prev {
    color: #fff;
    background: #111;
    width: 43px;
    height: 43px;
    line-height: 27px;
    border-radius: 43px;
    margin: -6px 16px;
  }
  .pagination .next .icon,
  .pagination .prev .icon {
    color: #fff;
    width: 13px;
    height: 13px;
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
`;
