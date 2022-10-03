import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfor.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Lượt truy cập</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">So với hôm qua</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Lượt xem</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">So với hôm qua</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Đơn hàng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">So với hôm qua</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Doanh số</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"><span className='featuredUnit'>₫</span>4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">So với hôm qua</span>
      </div>
    </div>
  );
}