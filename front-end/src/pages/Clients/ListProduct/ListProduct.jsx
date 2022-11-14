/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListProductLayout from "../../../components/ListProductLayout";
import { filterProducts, getProducts } from "../../../slices/productSlice";
import { ListProductWrapper } from "../../../styles/listProductStyle";

const ListProduct = () => {
  const dispatch = useDispatch();
  const { products, data } = useSelector((state) => state.product);
  console.log(data.total);
  const [category, setCategory] = useState("");
  const [sortName, setSortName] = useState("");

  const limit = 8;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const obj = {
    category,
    sortName,
    page: nextPage,
  };

  useEffect(() => {
    dispatch(filterProducts("all"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(filterProducts(obj));
    };
    if (category || sortName) {
      fetchData();
      console.log(fetchData());
    }
  }, [category, sortName]);

  useEffect(() => {
    dispatch(filterProducts(obj));
    console.log(data.total);
    return () => {
      setNextPage(1);
      setPageCount();
    };
  }, [nextPage]);

  useEffect(() => {
    if (!data.success) return;
    setPageCount(Math.ceil(data.total / limit));
  }, [data, itemOffset, category, sortName]);

  const handlePageClick = async (event) => {
    const newOffset = (event.selected * limit) % products.length;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
    window.scrollTo(0, 600);
  };

  return (
    <>
      <Header></Header>
      <ListProductWrapper>
        <main className="main-content">
          <div className="shopify-section">
            <div className="" id="CollectionSection">
              <div className="collection-hero--container">
                <div className="collection-hero">
                  <div className="collection-hero__image"></div>
                </div>
                <div className="collection--description rte">
                  <div className="animation-contents">All Cakes</div>
                  <div id="truncatedDesc">
                    <p>
                      Whether you're in need of a birthday cake, christening
                      cake, or an occasion cake, you'll be sure to find the...
                      <br />
                      <a id="read-more-collection" href="/">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="page-width page-content">
                <div className="collection-filter">
                  <div className="grid grid--uniform">
                    <div className="grid__item small--one-half medium-up--one-quarter">
                      <label htmlFor="SortTags">Filter by</label>
                      <select
                        name="SortTags"
                        id="SortTags"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="all">All Cakes</option>
                        <option value="Weddings">Weddings</option>
                        <option value="Cupcakes">Cupcakes</option>
                        <option value="Cakes For Kids">Cakes For Kids</option>
                        <option value="Tray Bakes">Tray Bakes</option>
                      </select>
                    </div>
                    <div className="grid__item small--one-half medium-up--one-quarter ">
                      <label htmlFor="SortBy">Sort by</label>
                      <select
                        name="SortBy"
                        id="SortBy"
                        value={sortName}
                        onChange={(e) => setSortName(e.target.value)}
                      >
                        <option value="nameAsc">Alphabetically, A-Z</option>
                        <option value="nameDesc">Alphabetically, Z-A</option>
                        <option value="priceAsc">Price, low to high</option>
                        <option value="priceDesc">Price, high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                      initialPage={0}
                    />
                  </div>
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

export default ListProduct;
