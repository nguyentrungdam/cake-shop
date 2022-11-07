import React from "react";
import { useNavigate } from "react-router-dom";
import { ListProductWrapper } from "../styles/listProductStyle";

const ListProductLayout = ({ products }) => {
  const navigate = useNavigate();

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
                  <a
                    href={`/product/${item._id}`}
                    className="grid-product__link "
                  >
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
      </div>
    </ListProductWrapper>
  );
};

export default ListProductLayout;
