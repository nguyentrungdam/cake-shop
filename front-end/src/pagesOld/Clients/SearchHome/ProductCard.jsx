import React from "react";
import styled from 'styled-components';
const ItemLink = styled.a`
    position: relative;
    margin: 5px 0;
    text-decoration: none;
    display: block;
    background-color: var(--white-color);
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
    transition: transform linear 0.1s;
    &:hover{
        transform: translateY(-2px);
        border: 1px solid var(--primary-color);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        z-index: 2;
    }
`
const ItemImg = styled.img`
     width: 100%;
     object-fit: contain;
     height: 177px;
`
const ItemInfo = styled.div`
    padding: 10px;
  
`
const ItemName = styled.h4`
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--text-color);
    line-height: 1.4rem;
    margin: 0 0 20px;
    height: 2.8rem;
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  
`
const ItemPrice = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`
const PriceOld = styled.p`
    margin: 0;
    font-size: 0.85rem;
    color: #999;
    text-decoration: line-through;
`
const PriceNew = styled.p`
      margin: 0;
    font-size: 0.85rem;
    color: var(--primary-color);
    margin-right: auto;
    margin-left: 5px;
`
const PriceIcon = styled.i`
    font-size: 0.85rem;
    color: lightseagreen;
`
const ItemFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`
const ItemSave = styled.div`
    
 `
const Input = styled.input`
     display: none;
     
    
 `
const Label = styled.label`
    
     font-size: 0.85rem;
     color: #999;
     cursor: pointer;
 `
 const ItemStar = styled.div`    
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    margin-left: auto;
    margin-right: 5px;
`
const StarCheck = styled.i`    
    color: #ffe400;
    font-weight: 900;
`
const StarUncheck = styled.i`    
    color: #ffe400;
    font-weight: unset;
`
const ItemSaled = styled.div`    
    color: #333;
    font-size: 0.85rem;
`
const ItemOrigin = styled.div`    
    text-align: right;
    font-size: 0.85rem;
    color: var(--text-color);
    margin: 5px 0;
`
const ItemFavourite = styled.div`    
    position: absolute;
    top: 10px;
    left: -4px;
    color: var(--white-color);
    background-color: var(--primary-color);
    font-size: 0.85rem;
    padding: 0 4px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
`
const ItemSaleoff = styled.div`    
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    &::after{
        content: "";
    width: 0;
    height: 0;
    left: 0;
    bottom: -4px;
    position: absolute;
    border-color: transparent rgba(255,212,36,.9);
    border-style: solid;
    border-width: 0 18px 4px;
    }
`
const SaleLayout = styled.div`    
       display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    font-weight: 400;
    line-height: .8125rem;
    color: #ee4d2d;
    text-transform: uppercase;
    width: 36px;
    padding: 4px 2px 3px;
    background-color: rgba(255,212,36,.9);

    font-size: .75rem;
`
const ItemSaleoffvalue = styled.span`    
       display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    font-weight: 400;
    line-height: .8125rem;
    color: #ee4d2d;
    text-transform: uppercase;
    font-size: .75rem;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    padding: 4px 2px 3px;
   
    background-color: rgba(255,212,36,.9);
`
const ItemSaleofflabel = styled.div`    
        color: white;
    font-size: 0.75rem;
    font-weight: 500;
`
export default function ProductCard({ listProducts }) {
  return (
    <>
       {listProducts.map((post) => (
            <div key={post._id} className="col l-2-4 m-3 c-6 home-product-item">
            <ItemLink >
              <ItemImg  alt={post.name} src={post.productPictures[0]} ></ItemImg>
                <ItemInfo>
                 <ItemName>{post.name}</ItemName>
                 <ItemPrice>
                     <PriceOld >10000đ</PriceOld>
                      <PriceNew >{post.price}đ</PriceNew>
                
                     <PriceIcon className="fas fa-shipping-fast"></PriceIcon>
                 </ItemPrice>
                 <ItemFooter>
                     <ItemSave>
                         <Input type="checkbox" id={post.id} />
                         <Label htmlFor={post.id} className="far fa-heart"></Label>
                     </ItemSave>
                     <ItemStar>
                         <StarCheck className="far fa-star"></StarCheck>
                         <StarCheck className="far fa-star"></StarCheck>
                         <StarCheck className="far fa-star"></StarCheck>
                         <StarCheck className="far fa-star"></StarCheck>
                         <StarUncheck className="far fa-star"></StarUncheck>
                     </ItemStar>
                     <ItemSaled>Đã bán 34k</ItemSaled>
                 </ItemFooter>
                 <ItemOrigin>{post.origin}</ItemOrigin>
                 <ItemFavourite>
                     Yêu thích
                 </ItemFavourite>
                 <ItemSaleoff> 
                     <SaleLayout>
                     <ItemSaleoffvalue>{post.discountPercent}%</ItemSaleoffvalue>
                     <ItemSaleofflabel>GIẢM</ItemSaleofflabel>
                     </SaleLayout>
                 </ItemSaleoff>
             </ItemInfo>
             <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
             
         </ItemLink>
      </div>
       )
       )}
    </>
  );
}
