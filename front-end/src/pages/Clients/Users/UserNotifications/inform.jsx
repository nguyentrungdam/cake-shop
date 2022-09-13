import React from "react";
import styled from "styled-components";
import HanldEvent from "./hanldEvent";
import Styled from "./styled";
const Container = styled.div`
  background-color:${({theme}) => theme.backGroundWhite};
  position: relative;
  margin-top: 20px;
  left: 0;
  top: 0;
  width: 970px;
 
  display: flex;
  flex-direction: column;
  border-radius: 1px;
  background-color:#fff;

`

const Notifications = () => {
    return(
      <Container>
        <Styled value={""}/>
        <HanldEvent/>
      </Container>
    )
}

export default Notifications