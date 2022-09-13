import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogWrapper = styled.div`
  width: 400px;
  height: 100px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  border-radius: 5px;
  padding: 25px;
`;
const Title = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.textColorBlack};
`;

const Item = styled.div`
  margin: 30px;
  display: flex;
`;

const ButtonWhite = styled.button`
  height: 40px;
  width: 170px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.backGroundWhite};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;
  margin-left: 25px;

  :hover {
    background-color: ${({ theme }) => theme.backGroundBrown};
  }
`;

const ButtonPrimary = styled(ButtonWhite)`
  background-color: ${({ theme }) => theme.mainColor};
  border: none;
  margin-right: 25px;
  color: ${({ theme }) => theme.textColorWhite};

  :hover {
    background-color: ${({ theme }) => theme.btnPrimaryColorHover};
  }
`;

const DeleteAddressDialog = ({
  deleteAddress,
  showDeleteAddressDialog,
  setShowDeleteAddressDialog
}) => {
  return (
    <React.Fragment>
      {showDeleteAddressDialog ? (
        <Background>
          <DialogWrapper
            style={{ display: "inline-table" }}
          >
            <Title>Bạn có chắc muốn xoá địa chỉ này?</Title>
            <Item>
              <ButtonWhite
                onClick={() => setShowDeleteAddressDialog((prev) => !prev)}
                >TRỞ LẠI
              </ButtonWhite>
              <ButtonPrimary 
                onClick={deleteAddress}
                >XÓA
              </ButtonPrimary>
            </Item>
          </DialogWrapper>
        </Background>
      ) : null}
    </React.Fragment>
  );
};

export default DeleteAddressDialog;
