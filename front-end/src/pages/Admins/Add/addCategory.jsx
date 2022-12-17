import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../slices/categorySlice";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [CategoryInfo, setCategoryInfo] = useState({
    name: "",
    description: "",
  });

  const handleNameProduct = async (e) => {
    e.preventDefault();
    setCategoryInfo({ ...CategoryInfo, name: e.target.value });
  };

  const handleDescProduct = async (e) => {
    e.preventDefault();
    setCategoryInfo({ ...CategoryInfo, description: e.target.value });
  };

  const handleAddCategory = async () => {
    const form = new FormData();
    form.append("Name", CategoryInfo.name);
    form.append("Description", CategoryInfo.description);
    try {
      const res = await dispatch(createCategory(form)).unwrap();
      console.log(res);

      if (res.status === 201) {
        alert("Add Thành Công !");
      }
    } catch (err) {
      alert("Vui lòng kiểm tra lại các thông tin cho chính xác !");
    }
  };

  return (
    <React.Fragment>
      <Header name="Add category" />
      <LeftNavbar />
      <Container>
        <a href="/listcategory" className="btn-shopnow">
          Back
        </a>
        <Title>Category Information</Title>
        <Wrapper1>
          <Wrapper2>
            <Label>Name</Label>
            <Input onChange={handleNameProduct} />
            <Label>Description</Label>
            <TexrAreaInput onChange={handleDescProduct} />
          </Wrapper2>
        </Wrapper1>
        <Wrapper1
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: "40px",
          }}
        >
          <ButtonPrimary onClick={() => handleAddCategory()}>
            Add Category
          </ButtonPrimary>
        </Wrapper1>
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  height: 90vh;
  width: 81rem;
  margin-left: 20rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 20px;
  .btn-shopnow {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    display: inline-block;
    user-select: none;
    -webkit-appearance: none;
    border-radius: 0;
    color: #fff;
    padding: 9px 20px;
    transition: padding-right 0.3s, background 0.3s;
    width: 100px;
    min-width: 90px;
    line-height: 1.42;
    font-size: 0.94118em;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    letter-spacing: 0;
    margin: 20px;
    background: #111
      url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow.png)
      no-repeat 150% 35%;
    background-size: 29px;
    background-image: url(//cdn.shopify.com/s/files/1/0261/0108/8359/t/2/assets/button-arrow-2x.png);
  }
  .btn-shopnow:hover {
    padding-right: 55px;
    background-position: 91% 35%;
  }
`;
const Wrapper2 = styled.section`
  display: flex;
  flex-direction: column;
  .wrapChooseImg {
    position: relative;

    &:hover {
      button {
        background-color: #e96a50;
      }
    }
  }

  .chooseFile {
    position: relative;
    max-width: 100px;
    height: 40px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
  }
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
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  height: 40px;
  width: 100px;
  z-index: 1;
  cursor: pointer;
  border-radius: 2px;
`;

const ButtonPrimary = styled(ButtonShort)`
  height: 40px;
  width: 200px;
`;
export default AddCategory;
