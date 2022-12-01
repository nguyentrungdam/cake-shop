import React from "react";
import styled from "styled-components";

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
`;

const DialogWrapper = styled.div`
  background-color: #fff;
  width: 31.25rem;
  padding: 1.25rem;
  overflow: visible;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
`;
const Title = styled.div`
  font-size: 1.5rem;
  color: #ff01bd;
  margin-top: 1.875rem;
  font-weight: 500;
`;

const Item = styled.div`
  display: flex;
  margin-top: 6.25rem;
`;

const ShopeeAlertPopupMessage = styled.div`
  margin-top: 2.5rem;
  font-size: 1rem;
`;

const ButtonWhite = styled.button`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  flex-direction: column;
  font-size: 1rem;
  box-sizing: border-box;
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  height: 40px;
  padding: 0 20px;
  min-width: 70px;
  outline: 0;
  background: #fff;
  color: #555;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  position: relative;
  overflow: visible;
  flex: 1;
  max-width: 100%;

  :hover {
    background: rgba(0, 0, 0, 0.02);
  }
`;
const SpaceBetweenButton = styled.div`
  width: 0.625rem;
`;

const ButtonPrimary = styled(ButtonWhite)`
  color: #fff;
  position: relative;
  overflow: visible;
  outline: 0;
  background: #ff01bd;
  font-size: 1rem;

  :hover {
    background: #ff01bd;
    opacity: 0.8;
  }
`;

const DeleteItem = ({
  item,
  handleDeleteItem,
  showDeleteItem,
  setShowDeleteItem,
}) => {
  const handleDelete = async () => {
    await handleDeleteItem(item.Product);
    await setShowDeleteItem(false);
  };

  return (
    <React.Fragment>
      {showDeleteItem ? (
        <Background>
          <DialogWrapper style={{ display: "inline-table" }}>
            <Title>Do you definitely want to delete this product?</Title>
            <ShopeeAlertPopupMessage>{item.name}</ShopeeAlertPopupMessage>
            <Item>
              <ButtonPrimary onClick={handleDelete}>Yes</ButtonPrimary>
              <SpaceBetweenButton> </SpaceBetweenButton>
              <ButtonWhite onClick={() => setShowDeleteItem(false)}>
                No
              </ButtonWhite>
            </Item>
          </DialogWrapper>
        </Background>
      ) : null}
    </React.Fragment>
  );
};

export default DeleteItem;
