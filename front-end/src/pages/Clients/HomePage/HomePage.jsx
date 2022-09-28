import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import HomePageContent from "./HomePageContent";

function HomePage() {
  return (
    <>
      <Header />
      <HomePageContent></HomePageContent>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
