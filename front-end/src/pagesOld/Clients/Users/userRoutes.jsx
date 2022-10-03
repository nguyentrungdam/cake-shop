import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import NavbarUser from "../../../components/NavbarUser/navbarUser";
import UserAddress from "./UserAddress/userAddress";
import UserChangePass from "./UserChangePass/userChangePass";
import UserInfo from "./UserInfo/userInfo";
import UserPurchase from "./UserPurchase/userPurchase";
import Notifications from "./UserNotifications/inform";
import UserCoin from "./UserCoin/userCoin";

const Wrapper = styled.section`
  padding-left: 167px;
  float: left;
  display: flex;
  flex-direction: row;
`

const UserMain = () => { 
    return(
      <Wrapper>
        <NavbarUser/>
        <Routes>
            <Route path="/account/profile" element={<UserInfo />} />
            <Route path="/account/address" element={<UserAddress />} />
            <Route path="/account/password" element={<UserChangePass />} />
            <Route path="/purchase" element={<UserPurchase />}/>
            <Route path="/notifications" element ={<Notifications />}/>
            <Route path="/coin" element={<UserCoin/>}/>
        </Routes>
      </Wrapper>
    )
}

export default UserMain;
