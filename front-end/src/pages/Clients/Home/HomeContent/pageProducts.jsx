import React, { useState, useEffect } from "react";
import Product from "../homeRecommendProducts/product";
import "./pageProducts.css";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import { getProducts } from "../../../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";


export default function PageProducts() {

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [idOfLastProduct, setIdOfLastProduct] = useState(0);
  const [idOfFirstProduct, setIdOfFirstProduct] = useState(0);
  const [productList, setProductList] = useState([]);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  const [pages, setPages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProduct = () => {
      dispatch(getProducts()).unwrap();
    }
    fetchAllProduct();
  }, [dispatch])
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const tempPages = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
  }, [products, itemsPerPage]);

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

  return (
    <>
      <Header />
      <div className="home_page">
        <div className="page_products_main">
          <div className="page_products_header">
            <h1 className="page_products_title">Tất cả</h1>
            <hr className="page_products_line"></hr>
          </div>

          <div className="page_products_list_product">
            {productList.length === 0 ?
              <div className="productIsLoading">Loading...</div> :
              <Product listProducts={productList} />
            }
          </div>

          <div className="page_controller">
            <button className="page_controller_btn btn_prev" onClick={() => showPrevious()}>&#10094;</button>

            {
              arrOfCurrButtons.map((number) => (
                <button
                  onClick={handleClick}
                  id={number}
                  key={number}
                  className={currentPage === number ? 'page_controller_btn_active' : 'page_controller_btn_no_outline'}
                >{number}</button>
              ))
            }

            <button className="page_controller_btn btn_next" onClick={() => showNext()}>&#10095;</button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
