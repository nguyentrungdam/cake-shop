import React from "react";
import { ThemeProvider } from "styled-components";
import "../../../index.css";
import { Theme } from "../../../styles/theme";
import UserMain from "./userRoutes";
import Header from "../../../components/header";
import FooterMini from "../../../components/footerMini";
import { useEffect } from "react";
const User = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingnBottom: "30px",
      }}
    >
      <Header />
      <div style={{ paddingBottom: "70px" }}>
        <ThemeProvider theme={Theme}>
          <UserMain />
        </ThemeProvider>
      </div>
      <FooterMini />
    </div>
  );
};

export default User;
