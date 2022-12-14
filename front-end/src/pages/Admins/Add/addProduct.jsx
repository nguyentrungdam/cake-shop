import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../slices/productSlice";
import { getCategories } from "../../../slices/categorySlice";

const AddProduct = () => {
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
    productPictures: [],
    productPictureToChange: [],
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

  const handleSelectImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProductInfo({
          ...productInfo,
          productPictures: [...productInfo.productPictures, reader.result],
          productPictureToChange: [
            ...productInfo.productPictureToChange,
            e.target.files[0],
          ],
        });
      } else return;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleAddProduct = async () => {
    console.log(productInfo);
    const form = new FormData();
    form.append("Name", productInfo.name);
    form.append("Price", productInfo.price);
    form.append("Description", productInfo.description);
    form.append("Category", productInfo.category);
    form.append("Quantity", productInfo.quantity);
    for (let pic of productInfo.productPictureToChange) {
      form.append("Image", pic);
    }
    console.log(form);
    try {
      const res = await dispatch(addProduct(form)).unwrap();
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
      <Header name="Thêm sản phẩm" />
      <LeftNavbar />
      <Container>
        <Title>Product Information</Title>
        <Wrapper1>
          <Wrapper2>
            <Label>Name</Label>
            <Input onChange={handleNameProduct} />
            <Label>Description</Label>
            <TexrAreaInput onChange={handleDescProduct} />
            <Label>Price</Label>
            <Input onChange={handlePriceProduct} />
            <Label>Quantity</Label>
            <Input onChange={handleQuantity} />
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
          <Wrapper2>
            <Label>Image</Label>
            <div
              style={{
                display: "flex",
                width: 410,
                height: 250,
                flexWrap: "wrap",
                gap: 5,
                justifyContent: "center",
              }}
            >
              {productInfo.productPictures.length > 0 ? (
                productInfo.productPictures.map((pic, index) => (
                  <ImgProduct src={pic} key={index} />
                ))
              ) : (
                <ImgProduct src="https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png" />
              )}
            </div>
            <Wrapper1
              style={{
                justifyContent: "center",
                alignContent: "center",
                margin: "15px",
              }}
            >
              <div className="wrapChooseImg">
                <input
                  className="chooseFile"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleSelectImage}
                />
                <ButtonShort style={{ position: "absolute", left: -20 }}>
                  Upload
                </ButtonShort>
              </div>
            </Wrapper1>
          </Wrapper2>
        </Wrapper1>
        <Wrapper1 style={{ justifyContent: "center", alignContent: "center" }}>
          <ButtonPrimary onClick={() => handleAddProduct()}>
            Create Product
          </ButtonPrimary>
        </Wrapper1>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  height: 90vh;
  width: auto;
  margin-left: 20rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 20px;
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

export default AddProduct;
