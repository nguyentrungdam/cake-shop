import styled from "styled-components";
export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  z-index: 14;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  a {
    color: #000000;
    text-decoration: none;
  }
  .announcement {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    color: #fff;
    max-height: 100px;
    transition: max-height 0.3s cubic-bezier(0, 0, 0.38, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 12;
    background-image: url(https://cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/header.png?1412);
    background-size: 360px;
  }

  .announcement__link {
    display: block;
    text-decoration: none;
    background: 0;
    color: #fff;
  }

  .announcement__text {
    padding: 6px 20px 5px;
    font-size: 0.9em;
    font-weight: 500;
    display: block;
    transition: opacity 0.75s ease;
    text-align: center;
    max-width: max-content;
    margin: 0 auto;
    background-color: rgba(255, 0, 189, 0.8);
  }

  .site-header-sticky {
    position: relative;
    height: 138.137px;
    top: 35.48px;
  }

  .site-header {
    padding: 0;
    border-bottom: 1px solid #e8e8e1;
    background: #fff;
  }

  .page-width {
    padding: 0 40px;
    max-width: 1500px;
    margin: 0 auto;
  }

  .header-layout {
    display: flex;
    justify-content: space-between;
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
    font-size: 1.47059em;
    margin: 13.33333px 0;
    display: block;
    font-family: ITC Avant Garde Gothic, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
    color: white;
    background-color: black;
    padding: 10px;
    user-select: none;
    cursor: pointer;
  }

  .header-item--navigation {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    text-align: center !important;
  }

  .site-navigation {
    margin: 0 auto;
    padding: 0;
    text-rendering: optimizeLegibility;
    text-align: center !important;
  }

  .site-nav__expanded-item {
    z-index: 6;
    position: relative;
    display: inline-block;
    margin: 0;
    :hover .site-nav__dropdown {
      visibility: visible;
      transition: all 1s;
    }
  }

  .site-nav__link--has-dropdown {
    position: relative;
    z-index: 6;
    font-size: 23px;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    padding: 7.5px 15px;
    white-space: nowrap;
    color: #000;
    font-weight: 500;
    background: 0;
  }

  .icon-chevron-down {
    margin-left: 10px;
    width: 10px;
    height: 10px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }

  .site-nav__dropdown {
    position: absolute;
    left: 0;
    margin: 0;
    text-align: left !important;
    z-index: 5;
    display: block;
    visibility: hidden;
    background-color: #fff;
    min-width: 100%;
    padding: 13.33333px 0 5px;
    box-shadow: 0 10px 20px rgb(0 0 0 / 9%);
    -webkit-transform: translate3d(0, -12px, 0);
    transform: translate3d(0, -12px, 0);
  }

  .site-nav__dropdown-item {
    position: relative;
    margin: 0;
    display: block;
  }

  .site-nav__dropdown-link--second-level {
    position: relative;
    z-index: 6;
    background-color: #fff;
    padding-right: 30px;
    font-size: 23px;
    display: block;
    white-space: nowrap;
    padding: 8px 15px;
    color: #000;
    text-decoration: none;
    background: 0;
  }

  .header-item--icons {
    flex: 0 0 200px;
    min-width: 130px;
    max-width: 50%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
  }

  .site-nav--icons {
    margin-right: -12px;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .site-nav__icons {
    white-space: nowrap;
  }

  .item-navigate {
    font-size: 23px;
    padding-left: 12px;
    padding-right: 12px;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    padding: 7.5px 15px;
    white-space: nowrap;
    color: #000;
    background: 0;
  }

  .icon-navigate {
    width: 28px;
    height: 28px;
    overflow: hidden;
    vertical-align: middle;
    fill: currentColor;
    display: inline-block;
    stroke-width: 1;
  }

  .product__usp {
    margin: 10px 0;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    padding: 0;
    border-top: 1px solid #e8e8e1;
    display: flex;
  }

  .usp {
    display: flex;
    border: none;
    justify-content: center;
    margin: 8px 0 0;
    flex: 1 1 50%;
    align-items: center;
  }

  .usp-location--image {
    width: 35px;
    height: 35px;
    margin-right: 13px;
    object-fit: contain;
    max-width: 100%;
    border: 0 none;
  }
  .star {
    margin-left: 13px;
  }

  .product__usp .usp p {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 500;
  }
`;
