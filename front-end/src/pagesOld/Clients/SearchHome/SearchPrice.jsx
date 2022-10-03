import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";


const DIV1 = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
`
const DIV2 = styled.div`
    color: #333;
    font-size: 0.85rem;
    padding: 0 0 10px;
`
const DIV3 = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.825rem;
    color: #333;
    padding: 8px 0;
    justify-content: space-between;
`
const DIV4 = styled.div`
    flex: 1;
    height: 1px;
    background: #bdbdbd;
    margin: 0 1.425rem;
`

const INPUT2 = styled.input`
    width: 76px;
    height: 24px;
    outline: none;
    border: 1px solid #999;
    padding: 8px;
`
const BUTTON1 = styled.button`
    width: 100%;
    margin: 8px 0;
    color: white;
    background-color: #fb5533;
    min-width: 142px;
    height: 34px;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 12px;
    border-radius: 2px;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const SearchPrice = () => {
    const [searchParams] = useSearchParams();

    const min_price = searchParams.get('min_price') === null ? '' : searchParams.get('min_price');
    const max_price = searchParams.get('max_price') === null ? '' : searchParams.get('max_price');
    const search = searchParams.get('search') === null ? '' : searchParams.get('search');
    return(
        <DIV1>
            <DIV2>Khoảng Giá</DIV2>
            <form method="GET">
            <DIV3>
                    <INPUT2  
                    defaultValue={min_price}
                    name="min_price" 
             
                    type="number"
                    placeholder="đ TỪ" />
                    <DIV4></DIV4>
                    <INPUT2 
                    defaultValue={max_price}
                    name="max_price" 
                    placeholder="đ ĐẾN"
                    type="number" />
            </DIV3>
            <BUTTON1 type="submit">Áp dụng</BUTTON1>
            </form>
        </DIV1> 
    )
}

export default SearchPrice