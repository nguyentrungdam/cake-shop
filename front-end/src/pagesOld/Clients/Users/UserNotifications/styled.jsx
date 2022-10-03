import React from "react";
import styled from "styled-components";


const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 1.25rem;
  border-bottom: 1px solid rgba(0,0,0,.09);
  font-size: .875rem;
  font-weight: 300;
`
const P =styled.span`
  color: rgba(0,0,0,.26);
  cursor: default;
  display: block;
  margin-left:auto;
  font-size:14px ;
  font-weight:300;
  cursor: pointer;
`
const Inform = ({value}) => {
    return(
      <Container1>
        <P>Đánh dấu Đã đọc tất cả</P>
      </Container1>
    )
}

export default Inform