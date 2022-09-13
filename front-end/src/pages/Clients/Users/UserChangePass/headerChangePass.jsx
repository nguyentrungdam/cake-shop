import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 930px;
  height: 85px;
  margin-left: 20px;
  border-bottom: 1px solid ${({theme}) => theme.lineColor};
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

const HeaderChangePass = () => {
    return(
      <Container>
        <Title>Đổi Mật Khẩu</Title>
        <Note>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</Note>
      </Container>
    )
}

export default HeaderChangePass