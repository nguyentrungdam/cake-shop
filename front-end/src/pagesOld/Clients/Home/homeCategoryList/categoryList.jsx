import React, { useEffect } from "react";
import "./categoryList.css";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import required modules
import { Grid, Navigation } from "swiper";
import Category from "./category";
import { getCategories } from "../../../../slices/categorySlice";

export default function CategoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(getCategories()).unwrap();
    }
    fetchData();
  },[dispatch])

  const { categories } = useSelector((state) => state.category);

  return (
    <div className="section_category_list">
      <div className="home_category_list">
        <div className="category_title">
          <div className="title">DANH MỤC</div>
        </div>
        <Swiper
          slidesPerView={10}
          grid={{
            rows: 2
          }}
          spaceBetween={0}
          navigation={{
            clickable: true
          }}
          modules={[Grid, Navigation]}
          className="mySwiper slider-thuonghieu2"
        >
          {categories.map((num) => (
            <SwiperSlide key={num._id}>
              <Category categoryList={num} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
