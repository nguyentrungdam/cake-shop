import React from "react";
import { ListProductWrapper } from "../styles/listProductStyle";
const ListProductLayout = ({ products }) => {
  return (
    <ListProductWrapper>
      <div className="CollectionAjaxContent" id="CollectionAjaxContent">
        <div className="grid ">
          {products.length > 0 &&
            products.map((item) => (
              <div
                key={item._id}
                className="grid__item grid-product small--one-half medium-up--one-quarter aos-init aos-animate"
                data-aos="row-of-4"
              >
                <div className="grid-product__content">
                  <a href="/product-detail" className="grid-product__link ">
                    <div className="grid-product__image-mask">
                      <div className="image-wrap image-wrap-size">
                        <img
                          alt="product-img"
                          className="grid-product__image image-in-list"
                          src={item.Image.Url}
                        />
                      </div>
                    </div>

                    <div className="grid-product__meta">
                      <div className="grid-product__title">{item.Name}</div>
                      <div className="grid-product__price">
                        from{" "}
                        <span className="money">
                          £
                          {Number(item.Price).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <p className="free-delivery">Free Delivery</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
        {products.length === 0 ? (
          " "
        ) : (
          <div className="pagination">
            <span className="prev">
              <a href="/collections/all-cakes?page=1" title="">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-chevron-left"
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
        )}
      </div>
    </ListProductWrapper>
  );
};

export default ListProductLayout;
