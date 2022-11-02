/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListProductLayout from "../../../components/ListProductLayout";
import { searchProducts } from "../../../slices/productSlice";
import { ListProductWrapper } from "../../../styles/listProductStyle";
import ReactPaginate from "react-paginate";

const Search = () => {
  const dispatch = useDispatch();
  const { products, data } = useSelector((state) => state.product);
  const [show, setShow] = useState("false");
  const [keyword, setKeyword] = useState("");
  const limit = 8;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const obj = {
    keyword,
    page: nextPage,
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    await dispatch(searchProducts(obj));
    setShow("true");
  };
  useEffect(() => {
    dispatch(searchProducts(obj));
    return () => {
      setNextPage(1);
      setPageCount();
    };
  }, [nextPage]);

  useEffect(() => {
    if (!data.success) return;
    setPageCount(Math.ceil(data.total / limit));
  }, [data, itemOffset]);

  const handlePageClick = async (event) => {
    const newOffset = (event.selected * limit) % products.length;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Header />
      <ListProductWrapper>
        <main className="main-content">
          <div className="shopify-section">
            <div className="" id="CollectionSection">
              <div className="page-width-little-padding  ">
                <header className="section-header">
                  <h1 className="section-header__title">Search</h1>
                </header>

                <form
                  action="/search"
                  method="get"
                  className="input-group search-bar search-bar--page"
                  role="search"
                  onSubmit={handleSearch}
                >
                  <input
                    type="text"
                    placeholder="Search our store"
                    className="input-group-field"
                    aria-label="Search our store"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        className="icon icon-search"
                        viewBox="0 0 30 30"
                      >
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                      </svg>
                    </button>
                  </span>
                </form>
              </div>
              <div className="page-width-padding ">
                {show === "true" ? (
                  <>
                    <hr className="hr--medium"></hr>
                    {data.total <= 1 ? (
                      <h2>{data.total} result</h2>
                    ) : (
                      <h2>{data.total} results</h2>
                    )}
                    <ListProductLayout products={products} />
                    {products.length === 0 ? (
                      " "
                    ) : (
                      <div className="contain-pagination">
                        <ReactPaginate
                          breakLabel="..."
                          nextLabel=">"
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={5}
                          pageCount={pageCount}
                          previousLabel="<"
                          renderOnZeroPageCount={null}
                          className="pagination"
                          pageLinkClassName={pageCount === 1 ? `a active` : "a"}
                          activeLinkClassName="active"
                          pageClassName="li"
                          previousClassName="li"
                          nextClassName=" li"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  " "
                )}
              </div>
            </div>
          </div>
        </main>
      </ListProductWrapper>
      <Footer />
    </>
  );
};

export default Search;
