import React from "react";
import Chart from "./Chart";
import FeaturedInfo from "./FeaturedInfor";
import "./dashboard.css";
import styled from "styled-components";
import Header from "../../../components/NavbarAdmin/Header";
import LeftNavbar from "../../../components/NavbarAdmin/LeftNavbar";

const Container = styled.div``;
export default function Dashboard() {
  const userData = [
    {
      name: "Jan",
      "₫": 4000,
    },
    {
      name: "Feb",
      "₫": 3000,
    },
    {
      name: "Mar",
      "₫": 5000,
    },
    {
      name: "Apr",
      "₫": 4000,
    },
    {
      name: "May",
      "₫": 3000,
    },
    {
      name: "Jun",
      "₫": 2000,
    },
    {
      name: "Jul",
      "₫": 4000,
    },
    {
      name: "Agu",
      "₫": 3000,
    },
    {
      name: "Sep",
      "₫": 4000,
    },
    {
      name: "Oct",
      "₫": 1000,
    },
    {
      name: "Nov",
      "₫": 4000,
    },
    {
      name: "Dec",
      "₫": 3000,
    },
  ];
  return (
    <Container>
      <Header name="Trang chủ" />
      <LeftNavbar />
      <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="Doanh Số" grid dataKey="₫" />
      </div>
    </Container>
  );
}
