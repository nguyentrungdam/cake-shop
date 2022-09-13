import React, { useState } from "react";
import Dbjson from "./data.json";
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
    padding: 12px 12px 8px;
    clear: both;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.09);
    text-decoration: none;
`
const IMG = styled.div`
   float: left;
    min-width: 5rem;
    height: 5rem;
    border: 1px solid #f5f5f5;
    flex-basis: 5rem;
    background-size: cover;
`
const Product = styled.div`
    padding: 0 0.625rem;
    width: 6.25rem;
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
`
const SPAN = styled.span`
       font-size: 14px;
    color: #333333;
    line-height: 1.5;
`
const P2 = styled.p`
   margin-bottom: 0;
   word-break: break-all;
    font-size: .875rem;
    color: rgba(0,0,0,.54);
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Button1 = styled.button`
   color: #333333;
   text-align: right;
    min-width: 5rem;
    float: right;
    border: 1px solid rgba(0,0,0,.09);
    &:hover{
        color:red;
        border:1px solid red;
    }
    padding: 0.25rem;
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
        <IMG style={{backgroundImage: `url(../../img/product2/${item.id}.PNG)`}}></IMG>
        <Product>
            <P>{item.name}</P>
            <SPAN>{item.info}</SPAN>
            <P2>{item.date}</P2>
        </Product>
        <Button1>{item.btn}</Button1>
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
