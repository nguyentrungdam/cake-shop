import React from "react";
import styled from "styled-components";


const Container1 = styled.div`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 85.5px;
    overflow: hidden;
    overflow: visible;
    position: relative;
    z-index: 10;
    padding: 1rem 1.25rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    color: #f6a700;
`
const Container2 = styled.div`
  
`
const Img = styled.img`
   width: 48px;
    height: 48px;
    margin-right: 14px;
`
const Span1 = styled.span`
    font-size: 2rem;
    margin-right: 0.625rem;
    color: #f6a700;
`
const Span2 = styled.span`
    font-size: 1rem;
    margin-right: -0.625rem;
    color: #f6a700;
`
const A1 = styled.a`
    display: flex;
    align-items: center;
    font-size: .875rem;
    font-weight: 300;
    color: #929292;
    text-decoration: none;
`
const A2 = styled.a`
    text-decoration: none;
    color: rgba(0,0,0,.87);
    font-size: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: inherit;
`
const HeaderUserCoin = ({value}) => {
    return(
      <Container1>
        <Img src={"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/coins/75efaf1b556a8e2fac6ab9383e95d4e3.png"} />
        <Span1>{value}</Span1>
        <Container2>
            <Span2>Xu đang có</Span2>
            <A1 href="/#">{value} Shopee Xu sẽ hết hạn vào  31-07-2022</A1>
        </Container2>
        <A2 href="/#">Nhận thêm Xu!</A2>
      </Container1>
    )
}

export default HeaderUserCoin