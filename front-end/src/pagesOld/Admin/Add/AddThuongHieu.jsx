import React from "react";
import styled from "styled-components";
import Header from "../../../components/NabarAdmin/Header";
import LeftNavbar from "../../../components/NabarAdmin/LeftNavbar";
import Infomation from "./Infomation";
import FormInfomation from "./FormInfomation";

const Headder = styled.section`
  display: block;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1220px;
`;

const Justify = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -45px;
`;
const Justify1 = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -45px;
  display: block;
`;
const TextCenter = styled.div`
  margin-bottom: 2rem !important;
`;
const HeadingSection = styled.h2`
  margin-top: 15px;
  margin-bottom: 0.5rem;
`;
const ColMd12 = styled.div`
  flex: 0 0 85%;
  max-width: 100%;
`;
const Wrapper = styled.div``;
const DIV = styled.div`
  color: #999591;
`;
const DIV1 = styled.div`
  margin-top: 37px;
  padding: 5px 0px;
  margin-bottom: 30px;
  font-size: 22px;
  border-bottom: 2px solid #bcb2b2;
`;
function AddThuongHieu() {
  return (
    <React.Fragment>
      <Headder>
        <Container>
          <Justify1>
            <TextCenter>
              <HeadingSection>Chi Tiết Thương Hiệu</HeadingSection>
              <DIV>Xem tình trạng shop và cập nhập hồ sơ Shop của bạn</DIV>
            </TextCenter>
            <DIV1>Thông tin cơ bản</DIV1>
          </Justify1>
          <Justify>
            <ColMd12>
              <Wrapper>
                <Justify>
                  <Infomation />
                  <FormInfomation />
                </Justify>
              </Wrapper>
            </ColMd12>
          </Justify>
        </Container>
      </Headder>
    </React.Fragment>
  );
}

export default AddThuongHieu;
