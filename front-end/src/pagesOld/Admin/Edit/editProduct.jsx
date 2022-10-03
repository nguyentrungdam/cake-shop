import React from "react";
import styled from "styled-components";
// import { GrUploadOption } from "react-icons/gr";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";
import { getProductBySlug, updateProduct } from "../../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
// const ImgProduct = styled.div`
//   background-color: #999;
//   width: 400px;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   cursor: pointer;
// `;
const ButtonPrimary = styled(ButtonShort)`
  height: 40px;
  width: 200px;
`;
const EditProduct = () => {

    const dispatch = useDispatch();
    let idProduct = useParams();
    
    // const [category, setCategory] = useState('');
    const { productDetail } = useSelector((state) => state.product);
    const _id = productDetail._id;

    const [name, setName] = useState(productDetail.name);
    const [description, setDesc] = useState(productDetail.description);
    const [price, setPrice] = useState(productDetail.price);
    const [discountPercent, setSaleOff] = useState(productDetail.discountPercent);

    useEffect(() => {
        const fetchData = async () => {
            const response = await dispatch(getProductBySlug(idProduct.id)).unwrap();
        };
        // console.log(productDetail);
        fetchData();
    }, []);

    const handleName = async(e) => {
      e.preventDefault();
      setName(e.target.value);
    }

    const handleDesc = async(e) => {
      e.preventDefault();
      setDesc(e.target.value);
    }

    const handlePrice = async(e) => {
      e.preventDefault();
      setPrice(e.target.value);
    }

    const handleSaleOff = async(e) => {
      e.preventDefault();
      setSaleOff(e.target.value);
    }

    // const handleCategory = async(e) => {
    //   e.preventDefault(); 
    //   setCategory(e.target.value);
    // }

    const handleEditProduct = async () => {
      const response = await dispatch(updateProduct({ _id, name, description, price, discountPercent })).unwrap();
      if(response.status === 202){
        alert('Edit Thành Công');
      }
    }

    return (
        <React.Fragment>
            <Header />
            <LeftNavbar />
            <Container>
                <Title>THÔNG TIN SẢN PHẨM</Title>
                <Wrapper1>
                    <Wrapper2 key={productDetail._id}>
                        <Label>Tên sản phẩm</Label>
                        <Input 
                          name={productDetail._id} 
                          defaultValue={productDetail.name} 
                          onChange={handleName}
                        />
                        <Label>Mô tả</Label>
                        <TexrAreaInput 
                          name={productDetail._id}  
                          defaultValue={productDetail.description} 
                          onChange={handleDesc}
                        />
                        <Label>Giá sản phẩm</Label>
                        <Input 
                          name={productDetail._id} 
                          defaultValue={productDetail.price} 
                          onChange={handlePrice}
                        />
                        <Label>Giảm</Label>
                        <Input 
                          name={productDetail._id} 
                          defaultValue={productDetail.discountPercent} 
                          onChange={handleSaleOff}
                        />
                        {/* <Label>ID Categories</Label>
                        <Input 
                          name={productDetail._id} 
                          defaultValue={productDetail.category.name} 
                          onChange={handleCategory}
                        /> */}
                        <Item style={{ padding: "20px 0px" }}>
                            <Label>Phân loại hàng</Label>
                            <InputShort name={productDetail._id} defaultValue={productDetail.variants?.[0].name}/>
                            <Label>Số lượng</Label>
                            <InputShort name={productDetail._id} defaultValue={productDetail.variants?.[0].quantity}/>
                        </Item>
                    </Wrapper2>
                    <Wrapper2>
                        <Label>Hình ảnh</Label>
                        <img  
                            style={{ height: "25rem", width: "25rem" }} 
                            name={productDetail._id} 
                            src={productDetail.productPictures?.[0]}
                        />
                        <Wrapper1
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                margin: "15px",
                            }}
                        >
                            <ButtonShort>Upload Ảnh</ButtonShort>
                        </Wrapper1>
                    </Wrapper2>
                </Wrapper1>
                <Wrapper1 style={{ justifyContent: "center", alignContent: "center" }}>
                    <ButtonPrimary 
                      onClick={() => handleEditProduct()}
                    >
                      Lưu
                    </ButtonPrimary>
                </Wrapper1>
            </Container>
        </React.Fragment>
    );
};

export default EditProduct;
