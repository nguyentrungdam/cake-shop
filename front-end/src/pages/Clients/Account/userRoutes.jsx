import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Signin from "../Signs/signIn";

const Wrapper = styled.section`
  padding-left: 167px;
  float: left;
  display: flex;
  flex-direction: row;
`;

const UserMain = () => {
  return (
    <Wrapper>
      <Routes>
        {/* <Route path="/account/signin" element={<Signin />} /> */}
      </Routes>
    </Wrapper>
  );
};

export default UserMain;
