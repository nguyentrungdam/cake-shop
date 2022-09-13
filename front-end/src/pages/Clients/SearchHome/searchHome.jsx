import { getProducts } from "../../../slices/productSlice.js";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import "./main.css"
import SearchPrice from "./SearchPrice"
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard.jsx";
import Button from "./button";

import { useSearchParams } from "react-router-dom";
//========== Xử lý chỗ download =============

const allCategories = ['Phổ Biến','Mới Nhất','Bán Chạy','Tăng Dần','Giảm Dần'];

// console.log(allCategories);
const Home = () => {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [idOfLastProduct, setIdOfLastProduct] = useState(0);
    const [idOfFirstProduct, setIdOfFirstProduct] = useState(0);
    const [productList, setProductList] = useState([]);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
    const [pages, setPages] = useState([]);

    const [check, setCheck] = useState(0);
    const [buttons] = useState(allCategories);
    const [showJob, setShow] = useState(false);
    const dispatch = useDispatch();

    
  
  useEffect(() => {
    const fetchData = () => {
      dispatch(getProducts()).unwrap();
    }
    fetchData();
  },[])

  const { products } = useSelector((state) => state.product);

  const handleChangePageSize = (products) => {
    const tempPages = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
  }

  useEffect(() => {
    setProductList(products)
    handleChangePageSize(products)
  },[products])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage]);

  useEffect(() => {
    setIdOfLastProduct(currentPage * itemsPerPage);
    setIdOfFirstProduct(idOfLastProduct - itemsPerPage);
    const currentProduct = products.slice(idOfFirstProduct, idOfLastProduct);
    setProductList(currentProduct);
  }, [currentPage, idOfFirstProduct, idOfLastProduct, products]);

  
  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]

    let dotsInitial = '...'
    let dotsLeft = '... '
    let dotsRight = ' ...'

    if (pages.length < 6) {
      tempNumberOfPages = pages
    }

    else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial]
    }

    else if (currentPage >= 4 && currentPage <= 5) {
      const sliced = pages.slice(0, 7)
      tempNumberOfPages = [...sliced, dotsInitial]
    }

    else if (currentPage === 6) {
      tempNumberOfPages = ([1, 2, dotsLeft, 4, 5, 6, 7, 8, dotsRight])
    }

    else if (currentPage === 7) {
      tempNumberOfPages = ([1, 2, dotsLeft, 5, 6, 7, 8, 9]);
    }

    setArrOfCurrButtons(tempNumberOfPages)

  }, [arrOfCurrButtons, currentPage, pages]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const showNext = () => {
    if (currentPage < 9 && currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const showPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const filterResult = (catItem) => {
    const result = products.filter((curDate) => {
        return curDate.filter === catItem;
    });
    setProductList(result);
    handleChangePageSize(result);
}
const Addresses = (catItem) => {
    const result = products.filter((curDate) => {
        return curDate.origin === catItem;
    });
    setProductList(result);
    handleChangePageSize(result);
}
const Filter = (catItem) => {
  const result = products.filter((curDate) => {
      return curDate.discountPercent > catItem;
  });
  setProductList(result);
  handleChangePageSize(result);
}
const Status = (catItem) => {
  const result = products.filter((curDate) => {
      return curDate.discountPercent < catItem;
  });
  setProductList(result);
  handleChangePageSize(result);
}





useEffect(() => {
  filterProducts();
}, []);
const [searchParams] = useSearchParams();
const min_price = searchParams.get('min_price') === null ? '' : searchParams.get('min_price');
const max_price = searchParams.get('max_price') === null ? '' : searchParams.get('max_price');
const search = searchParams.get('search') === null ? '' : searchParams.get('search');
const filterProducts = () => {
  // check minimum one entry occur
  if (search.length || min_price.length || max_price.length) {

      const min = parseFloat(min_price);
      const max = parseFloat(max_price);

      // filter products with these conditions
      const filtered = products.filter(product => {
          // if min price > product price get product
          if (min > 0 && min > product.price) {
              return false;
          }

          // max price max price < product price get product
          if (max > 0 && max < product.price) {
              return false;
          }

          // search
          if (search.length > 0 && ! product.name.toLowerCase().includes(search.toLowerCase())) {
              return false;
          }

          return true;
      })

      // set products
      setProductList(filtered);
      handleChangePageSize(filtered);
  }
}




const filter = (button) =>{

    // if(button === 'Tất Cả'){
    //   setProductList(productList);
    //   setCheck(0);
    //   return;
    // }
   
    if(button === 'Phổ Biến'){
        const filteredData = productList.sort((a, b) => a.id > b.id ? 1:-1 );
        setProductList(filteredData);
        // handleChangePageSize(filteredData);
        setCheck(0);
         return;
    }
      if(button === 'Mới Nhất'){
        const filteredData = productList.sort((a, b) => a.discountPercent < b.discountPercent ? 1:-1 );
      setProductList(filteredData)
      setCheck(1)
      }
        if(button === 'Bán Chạy'){
            const filteredData = productList.sort((a, b) => a.discountPercent > b.discountPercent ? 1:-1 );
        setProductList(filteredData)
         setCheck(2)
    }        
     if(button === 'Tăng Dần'){
         const filteredData = productList.sort((a, b) => a.price > b.price ? 1:-1 );
         
         setProductList(filteredData);
         setCheck(3)
         
         }
     if(button === 'Giảm Dần'){
         const filteredData = productList.sort((a, b) => a.price < b.price ? 1:-1);
         setProductList(filteredData);
         setCheck(4)
      
    }
  }
  return (
    <React.Fragment>
        <Header/>
      <Contariner>
            <Grid>
                <Gutter>
                <Navigator>
            <H3>
                
            <I className="fas fa-list-ul"/>BỘ LỌC TÌM KIẾM
             </H3>  
             <DIV1>

            <DIV2>Theo Danh Mục</DIV2>
            <UL1>
                <LI1>
                    <SpanFillter onClick={() => filterResult('USB')}>USB</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => filterResult('Dép và giày')}>Dép và giày</SpanFillter>
                </LI1> 
               
                 {showJob === false ? <Add onClick={() => setShow(prev => !prev)}>Thêm<IconDown className="fas fa-angle-down"/></Add>
                    :
                 <>
                <LI1>
                <SpanFillter onClick={() => filterResult('Thời trang')}>Thời trang nam nữ</SpanFillter> 
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => filterResult('Phụ kiện')}>Phụ kiện laptop</SpanFillter> 
                </LI1> 
                </>
                }
            </UL1>
        </DIV1> 
            <DIV1>
            <DIV2>Nơi Bán</DIV2>
            <UL1>
                <LI1>
                <SpanFillter onClick={() => Addresses('Lâm Đồng')}>Lâm Đồng</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Addresses('Hà Nội')}>Hà Nội</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Addresses('Hồ Chí Minh')}>Hồ Chí Minh</SpanFillter>
                </LI1> 
              
            </UL1>
            
            </DIV1>
        <DIV1>
            <DIV2>Đơn Vị Vận Chuyển</DIV2>
            <UL1>
                <LI1>
                <SpanFillter onClick={() => Filter(25)}>Hỏa tốc</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Filter(30)}>Nhanh</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Filter(22)}>Tiết Kiệm</SpanFillter>
                </LI1> 
            </UL1>
        </DIV1> 
        <DIV1>
            <DIV2>Thương Hiệu</DIV2>
            <UL1>
                <LI1>
                <SpanFillter onClick={() => Filter(26)}>KingSton</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Filter(33)}>Sandisk</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Filter(23)}>Seagate</SpanFillter>
                </LI1> 
            </UL1>
        </DIV1>
     
        <SearchPrice/>
        <DIV1>
            <DIV2>Tình Trạng</DIV2>
            <UL1>
                <LI1>
                <SpanFillter onClick={() => Status(12)}>Mới</SpanFillter>
                </LI1> 
                <LI1>
                <SpanFillter onClick={() => Status(10)}>Đã sử dụng</SpanFillter>
                </LI1>      
            </UL1>
        </DIV1> 
        <BUTTON2>XÓA TẤT CẢ</BUTTON2>
        </Navigator>
                    
                    <PopularProduct>
                    <Button button={buttons} filter={filter} check={check}/>
                        <SmGutter>
                        <ProductCard listProducts={productList} />
                    
                        </SmGutter>
                        <div className="page_controller">
                             <button className="page_controller_btn btn_prev" onClick={() => showPrevious()}>&#10094;</button>
                              {
                                  arrOfCurrButtons.map((number) => (
                                <button 
                                  onClick={handleClick}
                                  id={number}
                                  key={number}
                                  className={currentPage === number ? 'page_controller_btn_active' : 'page_controller_btn_no_outline'}
                                 >{number}
                                </button>
                                     ))
                              }

                                 <button className="page_controller_btn btn_next" onClick={() => showNext()}>&#10095;</button>
                         </div>
                    </PopularProduct>
                </Gutter>
            </Grid>
      </Contariner>

   <Footer/>

    </React.Fragment>
  );
}

export default Home;
const Navigator = styled.nav`
     padding-left: 4px;
    padding-right: 4px;
    -webkit-flex: 0 0 16.66667%;
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    display: block;

`
const H3 = styled.h3`
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.8rem;
    margin: 8px 0;
`
const DIV1 = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
`
const DIV2 = styled.div`
    color: #333;
    font-size: 0.95rem;
    padding: 0 0 10px;
`

const UL1 = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const LI1 = styled.li`
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    color: #333;
    padding: 4px 0;
`

const BUTTON2 = styled.button`
    width: 100%;
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
    margin: 20px 0;
`
const I = styled.i`
    font-size: 1rem;
    margin-right: 4px;
`
const SpanFillter = styled.i`
   overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1rem;
    max-height: 3rem;
    cursor: pointer;
    font-size: 0.85rem;
    word-wrap: break-word;
    padding: 8px 0;
`
const Contariner = styled.div`
    background-color: var(--contain-color);
    padding-top: 24px;
`
const Grid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: block;
    padding: 0;
`
const Gutter = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
`
const PopularProduct  = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    display: block;

`
const SmGutter = styled.div`
    margin-left: -5px;
    margin-right: -5px;
    display: flex;
    flex-wrap: wrap;
`

const Add = styled.div`    
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    color: #333;
    cursor: pointer;
    padding: 4px 0;
    color: #887878;
`
const IconDown = styled.i`    
    font-size: 11px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 6px;
    margin-top: 4px;
`