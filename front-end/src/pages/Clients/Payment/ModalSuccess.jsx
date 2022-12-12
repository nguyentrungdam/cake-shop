import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalSuccess = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {showModal ? (
        <Background>
          <DialogWrapper style={{ display: "inline-table" }}>
            <Title>You have successfully ordered!</Title>
            <img
              className="img-success"
              src="https://www.shareicon.net/data/2016/10/05/838505_success_512x512.png"
              alt=""
            />
            <Item>
              <ButtonPrimary onClick={() => navigate("/list-product")}>
                Continute shopping
              </ButtonPrimary>
              <SpaceBetweenButton> </SpaceBetweenButton>
              <ButtonWhite onClick={() => navigate("/order-history")}>
                View ordered history
              </ButtonWhite>
            </Item>
          </DialogWrapper>
        </Background>
      ) : null}
    </React.Fragment>
  );
};
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
  .img-success {
    position: absolute;
    width: 100px;
    right: 46.2%;
  }
`;

const DialogWrapper = styled.div`
  background-color: #fff;
  width: 31.25rem;
  padding: 1.25rem;
  overflow: visible;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  z-index: 100;
`;
const Title = styled.div`
  font-size: 1.5rem;
  color: #ff01bd;
  margin-top: 1.875rem;
  font-weight: 500;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  margin-top: 7rem;
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
export default ModalSuccess;
