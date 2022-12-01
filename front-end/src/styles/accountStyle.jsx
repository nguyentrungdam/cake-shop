import styled from "styled-components";
export const AccountWrapper = styled.div`
  margin-top: 100px;
  .main-content {
    min-height: 700px;
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
  .section-header {
    margin-bottom: 50px;
  }
  .section-header__title {
    margin-bottom: 0;
    font-size: 1.76471em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  a {
    color: #000;
    text-decoration: none;
    background: 0;
  }
  .customers a {
    text-decoration: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    position: relative;
    font-weight: 500;
  }
  .customers a:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    border-bottom: 2px solid #000;
    transition: width 0.5s ease;
  }
  .customers a:hover:after {
    width: 100%;
  }
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -30px;
  }

  .grid__item {
    float: left;
    padding-left: 30px;
    width: 100%;
    min-height: 1px;
  }
  .medium-up--two-thirds {
    width: 66.66667%;
  }
  .h3,
  h3 {
    font-size: 1.47059em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  p {
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-weight: 500;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  .medium-up--one-third {
    width: 33.33333%;
  }
  .h5 {
    font-size: 0.88235em;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
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
