import React, { useState } from "react";
import styled from "styled-components";
import AddressDialog from "../../../../components/addressDialog";
import DeleteAddressDialog from "../../../../components/deleteAddressDialog";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  deleteAddress,
  setDefaultDeliveryInfoAddress,
} from "../../../../slices/addressSlice";

const Container = styled.div`
  width: 930px;
  margin-left: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor};
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const ButtonPrimary = styled.button`
  height: 40px;
  width: 180px;
  background-color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.textColorWhite};

  :hover {
    background-color: ${({ theme }) => theme.btnPrimaryColorHover};
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CssIconPlus = {
  marginRight: "10px",
};

const ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Item = styled.div`
  margin-bottom: 12px;
  display: flex;
`;

const AddressCss = styled.div`
  margin-top: 12px;
  margin-left: 40px;
`;

const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;
const AddressItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px dotted ${({ theme }) => theme.lineColor};
`;

const TextActionCss = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.textColorBrown};
  margin-left: 20px;
  cursor: pointer;
`;

const LabelBrown = styled.label`
  color: ${({ theme }) => theme.textColorBrown};
  display: inline-block;
  width: 150px;
  height: 20px;
  max-width: 100%;
  text-align: right;
  margin-right: 27px;
`;

const ButtonWhite = styled.button`
  height: 40px;
  width: 150px;
  color: ${({ theme }) => theme.textColorBrown};
  background-color: ${({ theme }) => theme.backGroundWhite};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;

  :hover {
    background-color: ${({ theme }) => theme.backGroundBrown};
  }
`;
const CenterHandle = styled.div`
  width: 970px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const DefaultValue = styled.div`
  border: 2px solid #ee4d2d;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ee4d2d;

  margin-left: 15px;
`;

const AddressDetail = styled.span`
  display: block;
  font-size: 16px;
  line-height: 16px;
  max-height: 32px;
  max-width: 560px;
`;

const InfoAddress = () => {
  const [showAddressDialog, setShowAddressDialog] = useState(false);
  const [showDeleteAddressDialog, setShowDeleteAddressDialog] = useState(false);
  const [addressId, setAddressId] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState({
    _id: "",
    name: "",
    phoneNumber: "",
    address: "",
    isDefault: false,
  });
  const [formMode, setFormMode] = useState(true);
  const dispatch = useDispatch();
  const { deliveryInfo, loading } = useSelector((state) => state.address);

  const handleName = (event) => {
    setDeliveryAddress({ ...deliveryAddress, name: event.target.value });
  };

  const handlePhoneNumber = (event) => {
    setDeliveryAddress({ ...deliveryAddress, phoneNumber: event.target.value });
  };

  const handleAddress = (event) => {
    setDeliveryAddress({ ...deliveryAddress, address: event.target.value });
  };

  const handleAddBtn = () => {
    setShowAddressDialog((prev) => !prev);
    setFormMode(true);
    setDeliveryAddress({
      name: "",
      phoneNumber: "",
      address: "",
    });
  };

  const handleEditBtn = (item) => {
    setDeliveryAddress(item);
    setShowAddressDialog((prev) => !prev);
    setFormMode(false);
  };

  const handleUpdateAddress = async () => {
    if (
      deliveryAddress.name &&
      deliveryAddress.phoneNumber &&
      deliveryAddress.address
    ) {
      dispatch(addAddress({ address: deliveryAddress }));
      setShowAddressDialog((prev) => !prev);
      setDeliveryAddress({
        _id: "",
        name: "",
        phoneNumber: "",
        address: "",
        isDefault: false,
      });
    } else {
      alert("Điền đủ thông tin");
    }
  };

  const handleAddAddress = async () => {
    if (
      deliveryAddress.name &&
      deliveryAddress.phoneNumber &&
      deliveryAddress.address
    ) {
      dispatch(addAddress({ address: deliveryAddress }));
      setShowAddressDialog((prev) => !prev);
      setDeliveryAddress({
        name: "",
        phoneNumber: "",
        address: "",
      });
    } else {
      alert("Điền đủ thông tin");
    }
  };

  const handleDeleteBtn = async (id) => {
    setAddressId(id);
    setShowDeleteAddressDialog((prev) => !prev);
  };

  const handleDeleteAddress = async () => {
    dispatch(deleteAddress({ addressId: addressId }));
    setShowDeleteAddressDialog((prev) => !prev);
    setAddressId("");
  };

  const handleSetDefaultBtn = async (_id) => {
    dispatch(setDefaultDeliveryInfoAddress({ addressId: _id }));
  };

  return (
    <React.Fragment>
      <div>
        <Container>
          <Title>Địa Chỉ Của Tôi</Title>
          <ButtonPrimary onClick={handleAddBtn}>
            <Wrapper>
              <BsPlusLg style={CssIconPlus} />
              <span>Thêm Địa Chỉ Mới</span>
            </Wrapper>
          </ButtonPrimary>
        </Container>
      </div>
      <div>
        {loading ? (
          <CenterHandle>Loading...</CenterHandle>
        ) : deliveryInfo.address?.length === 0 ||
          deliveryInfo.address === undefined ? (
          <CenterHandle>Không có địa chỉ</CenterHandle>
        ) : (
          <React.Fragment>
            {deliveryInfo.address?.map((item) => (
              <AddressItem key={item._id}>
                <AddressCss>
                  <Item>
                    <LabelBrown>Họ và tên</LabelBrown>
                    <span style={{ fontSize: "16px" }}>{item.name}</span>
                    {item.isDefault ? (
                      <DefaultValue>Mặc định</DefaultValue>
                    ) : (
                      <></>
                    )}
                  </Item>
                  <Item>
                    <LabelBrown>Số điện thoại</LabelBrown>
                    <span>{item.phoneNumber}</span>
                  </Item>
                  <Item
                    styled={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <LabelBrown>Địa chỉ</LabelBrown>
                    <AddressDetail>{item.address}</AddressDetail>
                  </Item>
                </AddressCss>
                <WrapperBody>
                  <Item>
                    <TextActionCss onClick={() => handleEditBtn(item)}>
                      Cập nhật
                    </TextActionCss>
                    <TextActionCss onClick={() => handleDeleteBtn(item._id)}>
                      Xóa
                    </TextActionCss>
                  </Item>
                  <Item>
                    <ButtonWhite onClick={() => handleSetDefaultBtn(item._id)}>
                      Thiết Lập Mặc Định
                    </ButtonWhite>
                  </Item>
                </WrapperBody>
              </AddressItem>
            ))}
          </React.Fragment>
        )}
      </div>
      <div>
        <AddressDialog
          formMode={formMode}
          deliveryAddress={deliveryAddress}
          changeName={handleName}
          changePhoneNumber={handlePhoneNumber}
          changeAddress={handleAddress}
          addAddress={handleAddAddress}
          updateAddress={handleUpdateAddress}
          showAddressDialog={showAddressDialog}
          setShowAddressDialog={setShowAddressDialog}
        />
        <DeleteAddressDialog
          deleteAddress={handleDeleteAddress}
          showDeleteAddressDialog={showDeleteAddressDialog}
          setShowDeleteAddressDialog={setShowDeleteAddressDialog}
        />
      </div>
    </React.Fragment>
  );
};

const BodyAddress = () => {
  return (
    <ContainerBody>
      <InfoAddress />
    </ContainerBody>
  );
};

export default BodyAddress;
