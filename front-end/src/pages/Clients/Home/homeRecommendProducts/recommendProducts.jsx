import React, { useEffect } from "react";
import Product from "./product";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./recommendProduct.css";
import { getProducts } from "../../../../slices/productSlice";
import { useState } from "react";

export default function RecommendProducts() {
  const dispatch = useDispatch();
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(getProducts()).unwrap();
    }
    fetchData();
  }, [dispatch])
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const currentProduct = products.slice(0, 24);
    setListProduct(currentProduct);
  }, [products])

  return (
    <div className="section_recommend_products_wrapper">
      <nav className="recommend_products_wrapper" style={{ top: "7.375rem" }}>
        <ul className="tabs_header">
          <li className="tabs_header_tab">
            <div className="tabs_header_tab_title">
              <span style={{ color: "rgb(238, 77, 45)" }}>GỢI Ý HÔM NAY</span>
            </div>
          </li>
        </ul>
      </nav>

      <div className="recommend_products_panels">
        <section className="recommend_products_panels__panel">
          <div className="panel">
            <Product listProducts={listProduct} />

            <div className="recommend_products_show_more">
              <Link
                className="recommend_products_btn_show_more"
                to="/page_products/*"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
