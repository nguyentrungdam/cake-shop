import React from "react";
import styled from "styled-components";
import { ListProductWrapper } from "../styles/listProductStyle";
import Loading from "./loading";

const ListProductLayout = ({ products, loading }) => {
  console.log(products);
  return (
    <>
      {loading ? (
        <NullCart>
          <h5 style={{ fontWeight: "500" }}>
            <Loading />
          </h5>
        </NullCart>
      ) : (
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
                      <a
                        href={`/product/${item._id}`}
                        className={
                          item.Quantity === 0 || item.isDelete
                            ? "disable-item grid-product__link"
                            : "grid-product__link "
                        }
                      >
                        <img
                          alt={item.Name}
                          className={
                            item.Quantity === 0 || item.isDelete
                              ? "grid-product__image-mask-2"
                              : "hide-sold-out "
                          }
                          src="https://www.pngplay.com/wp-content/uploads/6/Sold-Out-Hanging-Transparent-PNG.png"
                          style={{ opacity: "1" }}
                        />
                        <div
                          className="grid-product__image-mask"
                          style={
                            item.Quantity === 0 || item.isDelete
                              ? { opacity: "0.5" }
                              : {}
                          }
                        >
                          <div className={`image-wrap image-wrap-size `}>
                            <img
                              alt="product-img"
                              className="grid-product__image image-in-list"
                              src={item.Image.Url}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid-product__meta">
                        <div className="grid-product__title">{item.Name}</div>
                        <div className="flex" style={{ display: "flex" }}>
                          <div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </ListProductWrapper>
      )}
    </>
  );
};

const NullCart = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1400px;
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default ListProductLayout;
