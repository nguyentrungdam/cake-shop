import React from "react";
import styled from "styled-components";
import BodyUserCoin from "./bodyUserCoin"
import HeaderUserCoin from "./headerUserCoin"

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
  box-shadow: 0px 0px 0.8px ${({theme}) => theme.boxShadowColor};
`

const UserCoin = () => {
    return(
      <Container>
        <HeaderUserCoin value={"4.100"}/>
        <BodyUserCoin/>
      </Container>
    )
}

export default UserCoin