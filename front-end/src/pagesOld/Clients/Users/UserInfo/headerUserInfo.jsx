import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 930px;
  margin-left: 20px;
  border-bottom: 1px solid ${({theme}) => theme.lineColor};
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`
const Note = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.textColorBrown};
`

const HeaderUserInfo = () => {
    return(
      <Container>
        <Title>Hồ Sơ Của Tôi</Title>
        <Note>Quản lý thông tin hồ sơ để bảo mật tài khoản</Note>
      </Container>
    )
}

export default HeaderUserInfo