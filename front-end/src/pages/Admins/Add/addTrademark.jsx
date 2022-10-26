import React from "react";
import styled from "styled-components";
import { GrUploadOption } from "react-icons/gr";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";

const Container = styled.div`
  height: 90vh;
  width: 81rem;
  margin-left: 15rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 20px;
`;
const Wrapper2 = styled.section`
  display: flex;
  flex-direction: column;
`;
const Wrapper1 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #ee4d2d;
  margin-left: 40px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;

  Label {
    padding-right: 10px;
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0px;
`;
const Input = styled.input`
  height: 35px;
  width: 400px;
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-left: 10px;
`;
const InputShort = styled(Input)`
  width: 100px;
  margin-right: 50px;
`;
const TexrAreaInput = styled.textarea`
  resize: none;
  height: 100px;
  width: 400px;
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 10px;
`;
const ButtonShort = styled.button`
  background: #ee4d2d;
  color: #fff;
  height: 35px;
  width: 100px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #e96a50;
  }
`;
const ImgProduct = styled.div`
  background-color: #999;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;
const ButtonPrimary = styled(ButtonShort)`
  height: 40px;
  width: 200px;
`;
const AddTrademark = () => {
  return (
    <React.Fragment>
      <Header />
      <LeftNavbar />
      <Container>
        <Title>THÔNG TIN THƯƠNG HIỆU</Title>
        <Wrapper1>
          <Wrapper2>
            <Label>Tên thương hiệu</Label>
            <Input />
            <Label>Mô tả</Label>
            <TexrAreaInput />
            <Label>Địa chỉ trụ sở</Label>
            <TexrAreaInput />
            <Label>Loại sản phẩm</Label>
            <Item>
              <InputShort />
              <InputShort />
              <ButtonShort>Thêm Loại</ButtonShort>
            </Item>
          </Wrapper2>
          <Wrapper2>
            <Label>Logo thương hiệu</Label>
            <ImgProduct>
              <GrUploadOption style={{ height: "35px", width: "35px" }} />
            </ImgProduct>
            <Wrapper1
              style={{
                justifyContent: "center",
                alignContent: "center",
                margin: "15px",
              }}
            >
              <ButtonShort style={{ width: "150px" }}>Upload Logo</ButtonShort>
            </Wrapper1>
          </Wrapper2>
        </Wrapper1>
        <Wrapper1 style={{ justifyContent: "center", alignContent: "center" }}>
          <ButtonPrimary style={{ margin: "20px" }}>CẬP NHẬT</ButtonPrimary>
        </Wrapper1>
      </Container>
    </React.Fragment>
  );
};

export default AddTrademark;
