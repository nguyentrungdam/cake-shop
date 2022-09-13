import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtpToEmail, updateUserInfo } from "../../../../slices/authSlice";
// import { Password } from "@mui/icons-material";
// import { AlternateEmail } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`

const Item = styled.div`
  margin-bottom: 25px;
`

const ChangePassCss = styled.div`
  margin-left: 100px;
  margin-top: 22px;
`

const TextActionCss = styled.a`
  color: ${({ theme }) => theme.textColorBrown};
  margin-left: 20px;
  cursor: pointer;
`

const LabelBrown = styled.label`
  color: ${({ theme }) => theme.textColorBrown};
  display: inline-block;
  width: 150px;
  height: 20px;
  max-width: 100%;
  text-align: right;
  margin-right: 27px;
`
const InputText = styled.input`
  height: 35px;
  width: 350px;
  background-color: ${({ theme }) => theme.backGroundWhite};
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;
  padding-left: 10px;
`

const ButtonPrimary = styled.button`
  height: 40px;
  width: 100px;
  background-color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.textColorWhite};

  :hover {
    background-color: ${({ theme }) => theme.btnPrimaryColorHover};
  }
`

const InfoChangePass = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const [otp, setOtp ] = useState('');
  const [ pass, setPass ] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = user.email;
  // const userId = user._id;
  const name = user.name;
  
  const handleGetOTP = async (e) => {
    e.preventDefault();
    setOtp(e.target.value);
  }

  const handleNewPass = async (e) => {
    e.preventDefault();
    setPass(e.target.value)
  }

  const handleconfirmPass = async (e) => {
    e.preventDefault();
    setConfirmPass(e.target.value)
  }

  const handleOTP = async (e) => {
    e.preventDefault();
    if(isAuthenticated){
      const res = await dispatch(sendOtpToEmail({email})).unwrap()
      if(res.status === 201){
        alert('Mã OTP đã gửi. Xin hãy kiểm tra email')
      }
    }
  };

  const handleChangePass = async (e) => {
    e.preventDefault();
    // console.log(res);
    const change = await dispatch(updateUserInfo({name, pass, otp})).unwrap()
    // console.log(change);
    if(change.status === 202)
    {
      alert('Đổi mật khẩu thành công')
      navigate("/signin");
    }
    else if(change.status === 400)
    {
      alert('Bạn sai 1 cái gì đó')
    }
    else if(pass !== confirmPass){
      alert('Mật khẩu không trùng khớp');
    }
  }

  return (
    <ChangePassCss>
      <Item>
        <LabelBrown>Xác nhận mã OTP</LabelBrown>
        <InputText onChange={handleGetOTP} type="text"/>
        <TextActionCss onClick={handleOTP}>Lấy mã OTP</TextActionCss>
      </Item>
      <Item>
        <LabelBrown>Mật Khẩu Mới</LabelBrown>
        <InputText onChange={handleNewPass} type="password"/>
      </Item>
      <Item>
        <LabelBrown>Xác Nhận Mật Khẩu</LabelBrown>
        <InputText onChange={handleconfirmPass} type="password"/>
      </Item>
      <Item>
        <LabelBrown />
        <ButtonPrimary onClick={handleChangePass}>Xác Nhận</ButtonPrimary>
      </Item>
    </ChangePassCss>
  )
}

const BodyChangePass = () => {
  return (
    <Container>
      <InfoChangePass />
    </Container>
  )
}

export default BodyChangePass
