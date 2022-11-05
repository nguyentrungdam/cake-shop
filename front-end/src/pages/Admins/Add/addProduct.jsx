import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { GrUploadOption } from "react-icons/gr";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../slices/productSlice";
import { getCategories } from "../../../slices/categorySlice";

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
// const Item = styled.div`
//   display: flex;
//   flex-direction: row;

//   Label {
//     padding-right: 10px;
//   }
// `;
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
// const InputShort = styled(Input)`
//   width: 100px;
//   margin-right: 50px;
// `;
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
`;
// const ButtonWhite = styled.button`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 40px;
//   width: 100px;
//   z-index: 1;
//   background-color: ${({ theme }) => theme.backGroundWhite};
//   cursor: pointer;
//   border: 1px solid ${({ theme }) => theme.lineColor};
//   border-radius: 2px;
// `;
const AddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(getCategories()).unwrap();
    };
    fetchData();
  }, [dispatch]);
  const { categories } = useSelector((state) => state.category);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
    }
    return options;
  };

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    discountPercent: 0,
    variants: { name: "red", quantity: 10 },
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

  const handleSaleOffProduct = async (e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, discountPercent: Number(e.target.value) });
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
    form.append("name", productInfo.name);
    form.append("price", productInfo.price);
    form.append("description", productInfo.description);
    form.append("category", productInfo.category);
    form.append("discountPercent", productInfo.discountPercent);
    form.append("variants", JSON.stringify(productInfo.variants));
    for (let pic of productInfo.productPictureToChange) {
      form.append("productPicture", pic);
    }
    try {
      const res = await dispatch(addProduct(form)).unwrap();
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
        <Title>THÔNG TIN SẢN PHẨM</Title>
        <Wrapper1>
          <Wrapper2>
            <Label>Tên sản phẩm</Label>
            <Input onChange={handleNameProduct} />
            <Label>Mô tả</Label>
            <TexrAreaInput onChange={handleDescProduct} />
            <Label>Giá sản phẩm</Label>
            <Input onChange={handlePriceProduct} />
            <Label>Giảm</Label>
            <Input onChange={handleSaleOffProduct} />
            <Label>ID Category</Label>
            <select
              className="form-control"
              value={productInfo.category}
              onChange={(e) =>
                setProductInfo({ ...productInfo, category: e.target.value })
              }
            >
              <option>Select category</option>
              {createCategoryList(categories).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
            {/* <Input onChange={handleCategory} /> */}
            {/* <Label>Màu</Label>
            <Item>
              <InputShort />
              <InputShort />
              <ButtonShort>Thêm Màu</ButtonShort>
            </Item>
            <Label>Size</Label>
            <Item>
              <InputShort />
              <InputShort />
              <ButtonShort>Thêm Size</ButtonShort>
            </Item> */}
            {/* <Item style={{ padding: "20px 0px" }}>
              <Label>Số lượng</Label>
              <InputShort />
            </Item> */}
          </Wrapper2>
          <Wrapper2>
            <Label>Hình ảnh</Label>
            <div
              style={{
                display: "flex",
                width: 410,
                height: 400,
                flexWrap: "wrap",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {productInfo.productPictures.length > 0 ? (
                productInfo.productPictures.map((pic, index) => (
                  <ImgProduct src={pic} />
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
                <ButtonShort style={{ position: "absolute" }}>
                  Upload Ảnh
                </ButtonShort>
              </div>
            </Wrapper1>
          </Wrapper2>
        </Wrapper1>
        <Wrapper1 style={{ justifyContent: "center", alignContent: "center" }}>
          <ButtonPrimary onClick={() => handleAddProduct()}>
            THÊM SẢN PHẨM
          </ButtonPrimary>
        </Wrapper1>
      </Container>
    </React.Fragment>
  );
};

export default AddProduct;
