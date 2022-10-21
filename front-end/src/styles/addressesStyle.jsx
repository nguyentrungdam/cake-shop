import styled from "styled-components";
export const AddressesWrapper = styled.div`
  padding-top: 100px;
  .main-content {
    min-height: 800px;
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
  .btn:not(.btn--no-animate):not(.btn--tertiary) {
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow-2x.png);
    background: #111
      url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow.png)
      no-repeat 150% 35%;
    background-size: 29px;
  }
  .section-header .btn {
    float: right;
    margin: 0;
  }
  .btn {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    display: inline-block;
    padding: 9px 20px;
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
    user-select: none;
    -webkit-appearance: none;
    border-radius: 0;
    color: #fff;
    transition: padding-right 0.3s, background 0.3s;
  }
  .btn:not(.btn--no-animate):not(.btn--tertiary):hover {
    padding-right: 55px;
    background-position: 91% 35%;
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
  .form-vertical {
    margin-bottom: 20px;
  }
  form {
    margin: 0;
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

  label[htmlFor] {
    cursor: pointer;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 0.76471em;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-family: Poppins, sans-serif;
    font-weight: 800;
  }
  input {
    background-color: transparent;
    color: inherit;
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
  }
  .form-vertical input {
    margin-bottom: 30px;
    width: 100%;
    min-width: 250px;
  }
  p {
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
  .form-vertical input[type="checkbox"] {
    display: inline-block;
  }
  input[type="checkbox"] {
    margin: 0 10px 0 0;
    padding: 0;
    width: auto;
  }
  .inline {
    display: inline;
  }
  .text-link {
    display: inline;
    border: 0 none;
    background: 0;
    padding: 0;
    margin: 0;
    color: #000;
    text-decoration: none;
  }
  .btn-add-address {
    max-width: 250px;
  }
  button {
    overflow: visible;
    cursor: pointer;
  }
  .h4,
  h4 {
    font-size: 0.94118em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
  }
  .btn--small {
    padding: 6px 12px;
    font-size: 0.82353em;
    min-width: 90px;
  }
  .hide {
    display: none;
  }
`;
