import React, { useState } from "react";
import styled from "styled-components";
import {
  getCategories,
  updateCategoryById,
} from "../../../slices/categorySlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const EditCategory = ({ categoryItem, showDetail, setShowDetail }) => {
  // console.log(category);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { category } = useSelector((state) => state.category);
  // console.log(category);

  const handleUpdate = async () => {
    const res = await dispatch(
      updateCategoryById({
        idCategory: categoryItem._id,
        Name: name,
        Description: description,
      })
    );
    console.log(res);
    dispatch(getCategories()).unwrap();
    if (res.payload.status === 201) {
      notify("Updated successfully!");
    }
    await setShowDetail(false);
  };

  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  return (
    <>
      {showDetail ? (
        <Background>
          <ToastContainer />
          <DialogWrapper style={{ display: "inline-table" }}>
            <ButtonWhite onClick={() => setShowDetail(false)}>X</ButtonWhite>
            <Title>Category detail: </Title>
            <Label>Name: </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              defaultValue={categoryItem.Name}
            />
            <Label>Description: </Label>
            <TexrAreaInput
              defaultValue={categoryItem.Description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="badge-info" onClick={handleUpdate}>
              Update
            </span>
          </DialogWrapper>
        </Background>
      ) : null}
    </>
  );
};
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0px;
`;
const Input = styled.input`
  height: 35px;
  width: 370px;
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 10px;
`;
const TexrAreaInput = styled.textarea`
  resize: none;
  height: 100px;
  width: 430px;
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 10px;
`;
const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .badge-info {
    background-color: black;
    text-align: center;
    padding: 4px 10px;
    border-radius: 3px;
    color: white;
    max-width: 200px;
    cursor: pointer;
    margin-left: 200px;
  }
  .order-status {
    display: flex;
  }
  .order-status-title {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .order-status-select {
    margin-left: 10px;
    width: 110px;
  }
  .cart-info-wrapper {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
  }
  .cart-items {
    flex-direction: column;
    margin-bottom: 10px;
    display: flex;
  }
  .cart-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .item-img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
  .item-info {
    margin-left: 14px;
  }
  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 2px;
  }
  .kind {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .price {
    font-size: 1rem;
    margin-top: 4px;
    font-weight: 600;
  }
  .price-total {
    font-size: 1.2rem;
    color: #ff01bd;
    font-weight: 600;
  }
  .sub-total-price {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }

  .sub-total-wrapper {
    display: flex;
  }
  .sub-total {
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const DialogWrapper = styled.div`
  background-color: #fff;
  width: 31.25rem;
  height: 20rem;
  padding: 1.25rem;
  overflow: visible;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  position: relative;
`;
const Title = styled.div`
  font-size: 1.5rem;
  color: #ff01bd;
  margin-top: 1.875rem;
  font-weight: 500;
`;

const ButtonWhite = styled.button`
  -webkit-line-clamp: 1;
  font-size: 1rem;
  box-sizing: border-box;
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  height: 30px;
  padding: 5px 5px;
  min-width: 30px;
  outline: 0;
  background: #fff;
  color: #555;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  position: absolute;
  top: 10px;
  right: 12px;
  overflow: visible;
  flex: 1;
  :hover {
    /* background: rgba(0, 0, 0, 0.02); */
    background: red;
    color: white;
  }
`;

export default EditCategory;
