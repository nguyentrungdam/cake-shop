import React from "react";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
const Content = styled.div`
  height: 100vh;
`;
function HomePage() {
  return (
    <>
      <Header />
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
