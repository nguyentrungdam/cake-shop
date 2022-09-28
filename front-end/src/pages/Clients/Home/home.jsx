import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Banner from "./HomeBanner/banner";
import Content from "./HomeContent/content";

function Home() {
  return (
    <>
      <Header />
      <div className="home_page">
        <Banner />
        <Content />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
