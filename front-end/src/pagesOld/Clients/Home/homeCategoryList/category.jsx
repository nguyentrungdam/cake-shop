import React from "react";
import { Link } from "react-router-dom";

export default function Category({ categoryList }) {
  return (
    <>
      <Link className="home_category_list_grid" to={`/category/${categoryList.slug}`}>
        <div className="home_category_list_grid_item">
          <div className="home_category_list_grid_item_header">
            <div className="home_category_list_grid_item_header_frame">
              <div
                className="home_category_list_grid_item_header_img"
                style={{ backgroundImage: `url(${categoryList.categoryImage})` }}
              ></div>
            </div>
          </div>
          <div className="home_category_list_grid_item_titles">
            <div className="home_category_list_grid_item_title">
              {categoryList.name}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
