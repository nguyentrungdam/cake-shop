import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  transform: translateZ(0);
  z-index: 100;
  background: #fff;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: 2px solid #ccc;
  height: 100vh;
  width: 15rem;
`;

const NavbarWrapper = styled.div`
  min-width: inherit;
  height: inherit;
  z-index: 400;
  background: transparent;
  position: absolute;
`;

const ContainerNavbar = styled.nav`
  width: inherit;
  min-width: 265px;
  min-height: 1200px;
  color: #000;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px 20px 25px;
  justify-content: space-between;
`;

const NavbarItems = styled.div``;

const ItemTitle = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-style: normal;
  font-weight: 700;
  margin-left: 10px;
`;

const NavbarItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover ${ItemTitle} {
    cursor: pointer;
    color: #ee4d2d;
  }
`;

const ItemImg = styled.img`
  width: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const LeftNavbar = () => {
  return (
    <Container>
      <NavbarWrapper>
        <ContainerNavbar>
          <NavbarItems>
            <NavbarItem>
              <Link to="/admin">
                <ItemImg src="https://scontent.xx.fbcdn.net/v/t1.15752-9/294949062_3109940432650712_5868132305618352140_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=O3AJlDRb5D8AX9LNbes&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJupH4Twkkxvr9e7ikUTj4I3HyzQG9OlR3aeyLIiRCyHw&oe=6313D078" />
                <ItemTitle>Dashboard</ItemTitle>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link to="/listproduct">
                <ItemImg src="https://scontent.xx.fbcdn.net/v/t1.15752-9/292400588_1752744948398141_5773032048932831310_n.png?stp=cp0_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=GjsJeiG851EAX9dfiV7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIphj3hn0aO-qfKXnpMJoR6a2HWR0WMKf1fTIyGAsKukg&oe=63140777" />
                <ItemTitle>Quản lý sản phẩm</ItemTitle>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link to="/listUser">
                <ItemImg src="https://scontent.xx.fbcdn.net/v/t1.15752-9/285987155_7707237642680636_4370171135936883137_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qsSVH0khad8AX9fCd7Z&_nc_oc=AQnMk7516v0B4zhcVJ3WG303I0tyVSj0pikWl0pFypW_0tfPGWLRF0Zl0iVmMrqF4Gc2TbdOxh3M4BzCQGBa2frR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLPplKl6sqEbH6pK8h5R9LPKMISYEkZyQizmCa6xtv5Nw&oe=6310E3D3" />
                <ItemTitle>Quản lý người dùng</ItemTitle>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link to="/listorder">
                <ItemImg src="https://scontent.xx.fbcdn.net/v/t1.15752-9/289851327_620396612717398_1944980771515204186_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=vqgsaj-01NcAX-gqFla&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLVPmfMuJ9wUo2sJZOVeZA16_ZVbjC5dr70xcDj6hw18Q&oe=63102A9F" />
                <ItemTitle>Quản lý đơn hàng</ItemTitle>
              </Link>
            </NavbarItem>

            {/* <NavbarItem>
              <ItemImg src="https://scontent.xx.fbcdn.net/v/t1.15752-9/293399506_580204216928459_2370290565086217206_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=zg20Hjb_cx0AX_t6rzE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLmU3w5cxAnnbqteJ6I-wH5Y_jxmPVliTwuVnTwTuOozg&oe=6311F30C" />
              <ItemTitle>Xem thống kê</ItemTitle>
            </NavbarItem> */}
          </NavbarItems>
        </ContainerNavbar>
      </NavbarWrapper>
    </Container>
  );
};

export default LeftNavbar;