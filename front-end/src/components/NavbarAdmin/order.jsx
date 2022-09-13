import React from "react";
import styled from "styled-components";
import HanldEvent from "./HanldEvent"
import Styled from "./Styled"
import Danhmuc from "./Danhmuc";
const Container = styled.div`
  background-color:${({theme}) => theme.backGroundWhite};
  position: relative;
  margin-top: 0px;
  left: 0;
  top: 0;
  width: 73.75rem;
 
  display: flex;
  flex-direction: column;
  border-radius: 1px;
  background-color:#fff;

`

const Main = () => {
    return(
      <Container>
        <Styled value={""}/>
        <Danhmuc value={""}/>
        <HanldEvent/>
      </Container>
    )
}

export default Main
