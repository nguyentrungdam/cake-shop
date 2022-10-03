import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { itemListProduct } from "../../../data/itemHomePage";
import { ListProductWrapper } from "../../../styles/listProductStyle";
const ListProduct = () => {
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
                      <select name="SortTags" id="SortTags">
                        <option value="/collections/all-cakes">
                          All Cakes
                        </option>
                        <option value="/collections/celebration-cakes">
                          Celebration Cakes
                        </option>
                        <option value="/collections/customisable-cakes-cupcakes/custom">
                          Customisable Cakes
                        </option>
                        <option value="/collections/cakes-for-kids">
                          Cakes For Kids
                        </option>
                      </select>
                    </div>
                    <div className="grid__item small--one-half medium-up--one-quarter ">
                      <label htmlFor="SortBy">Sort by</label>
                      <select name="SortBy" id="SortBy">
                        <option value="manual">Featured</option>
                        <option value="best-selling">Best selling</option>
                        <option value="title-ascending">
                          Alphabetically, A-Z
                        </option>
                        <option value="title-descending">
                          Alphabetically, Z-A
                        </option>
                        <option value="price-ascending">
                          Price, low to high
                        </option>
                        <option value="price-descending">
                          Price, high to low
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="CollectionAjaxContent"
                  id="CollectionAjaxContent"
                >
                  <div className="grid ">
                    {itemListProduct.length > 0 &&
                      itemListProduct.map((item) => (
                        <div
                          key={item.id}
                          className="grid__item grid-product small--one-half medium-up--one-quarter aos-init aos-animate"
                          data-aos="row-of-4"
                        >
                          <div className="grid-product__content">
                            <a
                              href="/collections/all-cakes/products/90s-love"
                              className="grid-product__link "
                            >
                              <div className="grid-product__image-mask">
                                <div className="image-wrap image-wrap-size">
                                  <img
                                    alt="product-img"
                                    className="grid-product__image image-in-list"
                                    src={item.img}
                                  />
                                </div>
                              </div>

                              <div className="grid-product__meta">
                                <div className="grid-product__title">
                                  {item.itemName}
                                </div>
                                <div className="grid-product__price">
                                  from{" "}
                                  <span className="money">
                                    £
                                    {Number(item.price).toLocaleString(
                                      "en-US",
                                      {
                                        minimumFractionDigits: 2,
                                      }
                                    )}
                                  </span>
                                </div>
                                <p className="free-delivery">Free Delivery</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="pagination">
                    <span className="prev">
                      <a href="/collections/all-cakes?page=1" title="">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-chevron-left"
                          viewBox="0 0 284.49 498.98"
                        >
                          <path d="M249.49 0a35 35 0 0 1 24.75 59.75L84.49 249.49l189.75 189.74a35.002 35.002 0 1 1-49.5 49.5L10.25 274.24a35 35 0 0 1 0-49.5L224.74 10.25A34.89 34.89 0 0 1 249.49 0z"></path>
                        </svg>
                      </a>
                    </span>
                    <span className="page current">1</span>
                    <span className="page">
                      <a href="/collections/all-cakes?page=2" title="">
                        2
                      </a>
                    </span>
                    <span className="page">
                      <a href="/collections/all-cakes?page=3" title="">
                        3
                      </a>
                    </span>
                    <span className="next">
                      <a href="/collections/all-cakes?page=2" title="">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon-chevron-right"
                          viewBox="0 0 284.49 498.98"
                        >
                          <path d="M35 498.98a35 35 0 0 1-24.75-59.75l189.74-189.74L10.25 59.75a35.002 35.002 0 0 1 49.5-49.5l214.49 214.49a35 35 0 0 1 0 49.5L59.75 488.73A34.89 34.89 0 0 1 35 498.98z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
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
