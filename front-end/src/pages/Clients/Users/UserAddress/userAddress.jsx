import React from "react"
import styled from "styled-components"
import BodyAddress from "./bodyAddress";

const Main = styled.div`
background-color:${({theme}) => theme.backGroundWhite};
position: relative;
margin-top: 20px;
left: 0;
top: 0;
width: 970px;
height: auto;
display: flex;
flex-direction: column;
border-radius: 1px;
box-shadow: 0px 0px 0.8px ${({theme}) => theme.boxShadowColor};
`

const UserAddress = () => {
    return(
      <Main>
         <BodyAddress/>
      </Main>
    )
}

export default UserAddress