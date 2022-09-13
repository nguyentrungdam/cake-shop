
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Button from "./button";

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
const COIN = styled.div`
    color: #f6a700;
    text-align: right;
    min-width: 5rem;
    float: right;
    font-size: 1.25rem;
    padding: 0.625rem;
`

const CenterHandle = styled.div`
  background-color: #fff;
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const allCategories = ['TẤT CẢ LỊCH SỬ','ĐÃ NHẬN','ĐÃ DÙNG'];

const BodyUserCoin = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuItem, setMenuItem] = useState([]);
  const [buttons] = useState(allCategories);
  const [check, setCheck] = useState(0);
    useEffect(()=> { 
      fetch("../../dataCoin.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMenuItem(result.filter(item => (check === 0) ? (item.type !== check) : (item.type === check)));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[check])


  if(error) {
    return <CenterHandle>Error: {error.message}</CenterHandle>;
  }
  else if (!isLoaded) {
    return (
      <React.Fragment>
        <Button button={buttons} setcheck={setCheck} check={check}/>
        <CenterHandle>Loading...</CenterHandle>
      </React.Fragment>
    )
  }
  else if (menuItem.length === 0)
    return (
      <React.Fragment>
        <Button button={buttons} setcheck={setCheck} check={check}/>
        <CenterHandle>Không có lịch sử</CenterHandle>
      </React.Fragment>
    )
  else {
    return (
      <React.Fragment>
        <Button button={buttons} setcheck={setCheck} check={check}/>
        <Container>
          {menuItem.map(item => (
            <Container3 key = {item.id}>
            <Container2 >
              <IMG style={{backgroundImage: `url(../../img/product/${item.id}.PNG)`}}></IMG>
              <Product>
                  <P>{item.name}</P>
                  <SPAN>{item.info}</SPAN>
                  <P2>{item.date}</P2>
              </Product>
              <COIN>{item.coin}</COIN>
            </Container2>
          </Container3>
        ))}
        </Container> 
      </React.Fragment>
    );
  }
}

export default BodyUserCoin;
