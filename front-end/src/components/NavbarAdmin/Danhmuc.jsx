import React from "react";
import styled from "styled-components";


const Container1 = styled.div`
    height: 2.5rem;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(0,0,0,.09);
    font-size: .875rem;
    font-weight: 300;
    justify-content: space-between;
    display: flex;
    align-items: center;

`
const P1 =styled.p`
        color:rgba(0,0,0,0.5);
        margin-right:auto;
        display: block;
        font-size:large;
        font-weight:300;
       
`
const Danhmuc = ({value}) => {
    return(
      <Container1>
        <P1>ID</P1>
        <P1>NGƯỜI ĐẶT HÀNG</P1>
        <P1>NGÀY ĐẶT</P1>
        <P1>NGÀY GIAO DỰ KIẾN</P1>
        <P1>TỔNG TIỀN</P1>
        <P1>TÌNH TRẠNG</P1>
      </Container1>
    )
   
}

export default Danhmuc
