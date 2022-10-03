import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

export default function Product({ listProducts }) {
  return (
    <>
      {listProducts.map((product) => (
        <div className="product" key={product._id}>
          <Link
            className="list_product_a_hover"
            style={{ textDecoration: "none", backgroundColor: "transparent" }}
            to={`/product/${product.slug}`}
          >
            <div className="recommend_product_padding_bottom">
              <div className="recommend_product_border">
                <div style={{ pointerEvents: "none" }}>
                  <div className="recommend_product_frame">
                    <img
                      alt={product.name}
                      src={product.productPictures[0]}
                      className="recommend_product_img"
                      style={{ objectFit: "contain" }}
                    ></img>
                    <div className="recommend_product_discount">
                      <div className="recommend_product_discount_title">
                        <span>{product.discountPercent}%</span>
                        <span style={{ color: "#fff" }}>GIẢM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="recommend_product_card_header">
                  <div className="recommend_product_header">
                    <div className="recommend_product_header_title">
                      <div className="recommend_product_header__title">
                        {product.name}
                      </div>
                    </div>
                  </div>

                  <div className="recommend_product_price">
                    <div className="recommend_product_price_left_old">
                      ₫{Number(product.price).toLocaleString("vi")}
                    </div>
                    <div className="recommend_product_price_left">
                      <span style={{ fontSize: ".75rem", color: "#ee4d2d" }}>
                        ₫
                      </span>
                      <span className="recommend_product_price_left__price">
                        {Number(
                          Math.ceil((product.price * (100 - product.discountPercent)) /
                            100)
                        ).toLocaleString("vi")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="recommend_product_hover_footer">
                  Tìm sản phẩm tương tự
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
