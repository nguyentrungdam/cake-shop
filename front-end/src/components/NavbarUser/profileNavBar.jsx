import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdEdit } from 'react-icons/md'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 170px;
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor};
`
const Wrapper = styled.section`
  margin-left: 15px !important;
`
const ProfileImage = styled.img`
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 2rem;
  cursor: pointer;
`
const ProfileName = styled.h1`
  font-size: 14px;
  font-weight: 600;
`
const FrofileAction = styled.span`
  color: ${({ theme }) => theme.textColorBrown};
  cursor: pointer;
  font-weight: 500;
`
const CenterHandle = styled.div`
  width: 170px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`
const CssEditIcon = { "fontSize": "14px" }


const ProfileNavbar = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      {loading ? <CenterHandle>Loading...</CenterHandle> :
        (
          <Container>
            <Link to="account/profile"><ProfileImage src={user.profilePicture} /></Link>
            <Wrapper>
              <ProfileName>{user.name}</ProfileName>
              <Link to="account/profile"><FrofileAction><MdEdit style={CssEditIcon} />Sửa Hồ Sơ</FrofileAction></Link>
            </Wrapper>
          </Container>
        )}
    </React.Fragment>
  )
}

export default ProfileNavbar