import React from "react";
import styled from "styled-components";


const Container1 = styled.div`
    height: 2.5rem;
    padding: 2rem 1.25rem;
    border-bottom: 1px solid rgba(0,0,0,.09);
    font-size: .875rem;
    font-weight: 300;
    justify-content: space-between;
    display: flex;
    align-items: center;

`
const P =styled.p`
        color:rgba(0,0,0,0.64);
        cursor: default;
        display: block;
        font-size:x-large;
        font-weight:300;
        
`

const Inform = ({value}) => {
    return(
      <Container1>
        <P>Danh sách đơn hàng</P>
      </Container1>
    )
   
}

export default Inform