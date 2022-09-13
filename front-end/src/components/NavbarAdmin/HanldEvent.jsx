
import React, { useState } from "react";


import Dbjson from "./data.json"
import styled from "styled-components";



const Container = styled.div`
    border-radius: 0.125rem;
   
    overflow: hidden;
`
const Container3 = styled.div`
   
`
const Container2 = styled.div`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-radius: 0.125rem;
    overflow: hidden;
    background-color: #fff;
    padding: 28px 14px 14px 14px;
    clear: both;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.09);
    text-decoration: none;
`
const Product = styled.div`
    display:flex;
    height:2.5rem;
    flex-grow: 1;
`
const P = styled.p`
   font-size: 1rem;
    color: rgba(0,0,0,.8);
    word-break: break-all;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:14px;
`
const P1 =styled.p`
    font-size: 1rem;
    width:191px;
    color: rgba(0,0,0,.8);
    word-break: break-all;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0px 1rem 14px 5.5rem;
`
const P2 =styled.p`
    font-size: 1rem;
    width:170px;
    color: rgba(0,0,0,.8);
    word-break: break-all;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:14px;
    margin-left:1.5rem;
`
const P3 =styled.p`
    font-size: 1rem;
    width:130px;
    color: rgba(0,0,0,.8);
    word-break: break-all;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:14px;
    margin-left:4.5rem;
`
const P4 =styled.p`
    font-size: 1rem;
    width:100px;
    color: rgba(0,0,0,.8);
    word-break: break-all;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:14px;
    margin-left:3.5rem;
`
const Button1 = styled.button`
   color: #FF8C00;
   text-align: right;
    min-width: 2rem;
    float: right;
    border: 1px solid rgba(0,0,0,.50);
    &:hover{
        color:red;
        border: 1px solid red;
        
    }
    padding: 0.5rem;
    
    margin-bottom:10px;
    background-color:#fff;
    out-line:none;
`


function ProductPaginate() {
 const [menuItem, setMenuItem] = useState(Dbjson);

  const displayUsers = menuItem
    .map((item) => {
      
      return (
        <Container3 key = {item.id}>
        <Container2 >
        <Product>
            <P>{item.id}</P>
            <P1>{item.name}</P1>
            <P2>{item.date_order}</P2>
            <P2>{item.date_ship}</P2>
            <P3>{item.total}</P3>
            <P4>{item.static}</P4>
        </Product>
        <Button1>Xóa</Button1>
        <Button1>Sửa</Button1>
        </Container2>
        </Container3>

        )   
    });
  return (
    <React.Fragment>
        <Container>
        {displayUsers}
      </Container> 
    </React.Fragment>
  );
  }

export default ProductPaginate;
