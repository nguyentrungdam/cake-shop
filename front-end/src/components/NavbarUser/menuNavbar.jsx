import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IconHoSo from "../../images/hosoicon.png"
import IconDonMua from "../../images/donmuaicon.png"
import IconThongBao from "../../images/thongbaoicon.png"
import IconKhoVoucher from "../../images/khovouchericon.png"
import IconShoppeXu from "../../images/shoppexuicon.png"

const Container = styled.div`
    margin-top: 1rem;
`

const ListItem = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const Icon = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 5px;
` 

const Item = styled.li`
    color: ${({theme}) => theme.textColorBlack};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    transition: 0.2s all ease-in-out;

    &:hover {
        color: ${({theme}) => theme.mainColor};
    }

    .Item__link {
    text-decoration: none;
        color: #000000DE;
    }

    .Item__link--chil {
        color: #555555CC;
    }

    .Item__link:hover,
    .Item__link--chil:hover{
        color: ${({theme}) => theme.mainColor};
    }    
`

const Wrapper = styled.section`
    padding-left: 26px;
`

const activeStyle = {
    color: "#EE4D2D"
}

const MenuNavbar = () => {
    return(
      <Container>
        <ListItem>
            <Item>
                <Icon src={IconHoSo}/>
                <NavLink to="account/profile" className="Item__link">Tài Khoản Của Tôi</NavLink>
            </Item>
            <Wrapper>
                <Item>
                    <NavLink to="account/profile" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Hồ Sơ</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/address" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Địa Chỉ</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/password" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Đổi Mật Khẩu</NavLink>
                </Item>
            </Wrapper>
            <Item>
                <Icon src={IconDonMua}/>
                <NavLink to="purchase" className="Item__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Đơn Mua</NavLink>
            </Item>
            <Item>
                <Icon src={IconThongBao}/>
                <NavLink to="notifications" className="Item__link">Thông Báo</NavLink>
            </Item>
            <Wrapper>
                <Item>
                    <NavLink to="notifications" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Cập Nhật Đơn Hàng</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/test" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Khuyến Mãi</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/test" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Cập Nhật Ví</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/test" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Hoạt Động</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/test" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Cập Nhật Đánh Giá</NavLink>
                </Item>
                <Item>
                    <NavLink to="account/test" className="Item__link--chil" style={({ isActive }) => isActive ? activeStyle : undefined}>Cập Nhật Shopee</NavLink>
                </Item>
            </Wrapper>
            <Item>
                <Icon src={IconKhoVoucher}/>
                <NavLink to="account/test2" className="Item__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Kho Voucher</NavLink>
            </Item>
            <Item>
                <Icon src={IconShoppeXu}/>
                <NavLink to="coin" className="Item__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Shoppe Xu</NavLink>
            </Item>
        </ListItem>
      </Container>
    )
}

export default MenuNavbar