import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../slices/productSlice";
import { getCategories } from "../../../slices/categorySlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const EditProduct = () => {
  const { productDetail } = useSelector((state) => state.product);
  console.log(productDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(getCategories()).unwrap();
    };
    fetchData();
  }, [dispatch]);
  const { categories } = useSelector((state) => state.category);

  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    category: "",
  });

  const handleNameProduct = async (e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, name: e.target.value });
  };

  const handleDescProduct = async (e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, description: e.target.value });
  };

  const handlePriceProduct = async (e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, price: Number(e.target.value) });
  };
  const handleQuantity = async (e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, quantity: Number(e.target.value) });
  };
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  const handleAddProduct = async (id) => {
    try {
      const res = await dispatch(
        updateProduct({
          Id: id,
          Name: productInfo.name,
          Description: productInfo.description,
          Price: productInfo.price,
          Quantity: productInfo.quantity,
          Category: productInfo.category,
        })
      ).unwrap();
      console.log(res);
      if (res.status === 200) {
        notify("Update product successfully!");
      }
    } catch (err) {
      notify(err);
    }
  };

  return (
    <React.Fragment>
      <Header name="Edit product" />
      <ToastContainer />
      <LeftNavbar />
      <Container>
        <a href="/listproduct" className="btn-shopnow">
          Back
        </a>
        <Title>Product Information</Title>
        <Wrapper1>
          <Wrapper2>
            <Label>Name</Label>
            <Input
              defaultValue={productDetail.Name}
              onChange={handleNameProduct}
            />
            <Label>Description</Label>
            <TexrAreaInput
              defaultValue={productDetail.Description}
              onChange={handleDescProduct}
            />
            <Label>Price</Label>
            <Input
              defaultValue={productDetail.Price}
              onChange={handlePriceProduct}
            />
            <Label>Quantity</Label>
            <Input
              defaultValue={productDetail.Quantity}
              onChange={handleQuantity}
            />
            <Label>Category</Label>
            <select
              className="form-control"
              value={productInfo.category}
              onChange={(e) =>
                setProductInfo({ ...productInfo, category: e.target.value })
              }
            >
              {categories.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.Name}
                </option>
              ))}
            </select>
          </Wrapper2>
        </Wrapper1>
        <Wrapper1 style={{ justifyContent: "center", alignContent: "center" }}>
          <ButtonPrimary onClick={() => handleAddProduct(productDetail._id)}>
            Update Product
          </ButtonPrimary>
        </Wrapper1>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  height: 90vh;
  width: auto;
  margin-left: 21rem;
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
    margin: 20px 0 20px 0;
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
  color: #ff01bd;
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
  background: #ff01bd;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  height: 40px;
  width: 150px;
  z-index: 1;
  cursor: pointer;
  border-radius: 2px;
`;
const ImgProduct = styled.img`
  background-color: #999;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  object-fit: cover;
`;
const ButtonPrimary = styled(ButtonShort)`
  height: 40px;
  width: 200px;
  margin-top: 30px;
`;

export default EditProduct;
