import React from "react";
import styled from "styled-components";
import HeaderChangePass from "./headerChangePass";
import BodyChangePass from "./bodyChangePass";

const Main = styled.div`
background-color:${({theme}) => theme.backGroundWhite};
position: relative;
margin-top: 20px;
left: 0;
top: 0;
width: 970px;
height: 425px;
display: flex;
flex-direction: column;
border-radius: 1px;
box-shadow: 0px 0px 0.8px ${({theme}) => theme.boxShadowColor};
`

const UserChangePass = () => {
    return(
      <Main>
        <HeaderChangePass/>
        <BodyChangePass/>
      </Main>
    )
}

export default UserChangePass