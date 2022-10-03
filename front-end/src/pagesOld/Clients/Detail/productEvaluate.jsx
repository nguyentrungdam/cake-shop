import React from "react";
import { ChatOutlined, StorefrontOutlined } from "@material-ui/icons";
export default function ProductEvaluate() {
  const state = {
    products: [
      {
        _id: "1",
        title: "Váy đầm hai dây",
        src: [
          "https://cf.shopee.vn/file/efaefbef9c07d308ead92f695a674d3b",
          "https://cf.shopee.vn/file/f52040a9b4d58db84e57c51d58606c4a_tn",
          "https://cf.shopee.vn/file/2dd0e62db712914635bc4f6676fa393c_tn",
          "https://cf.shopee.vn/file/da81c21bea1cb240310ff5d0806d02f1_tn",
        ],
        Coupons: 10,
        Transport: "Miễn phí vận chuyển",
        description:
          "XƯỞNG MAY PANOSI-CHUYÊN SẢN XUẤT BAN BUÔN BÁN LẺ SỐ LƯỢNG LỚN THỜI TRANG NỮ",
        content: "Hàng Việt Nam Giá Rẻ",
        promotion: "Mua 2 tặng 1",
        price: 100,
        colors: ["red", "black", "crimson", "teal"],
        size: ["36-37", "38-39", "40-41"],
        count: 1,
        Factory: "Xuongmayhiennguyen",
        Evaluate: 27.7,
        NumberOfProduct: 300,
        ResponseRate: 100,
        ResponseRateTime: "trong vài giờ",
        participation: 4,
        NumberOfFollowers: 60.7,
      },
    ],
    index: 0,
  };
  const { products, index } = state;
  return (
    <div className="JfALJ page-product__shop">
      {products.map((item) => (
        <div className="logocompany" key={item._id}>
          <a
            className="display"
            href="/xuongmayhiennguyen?categoryId=17208087779"
          >
            <div className="shopee-avatar uUR7C3">
              <img
                className="shopee-avatar__img"
                src="https://cf.shopee.vn/file/0f4a5cb398ea3972dabca9c1074f213e_tn"
              />
            </div>
            <div className="favourite">
              <div className="wri-r3 JW0gMM zCtnYl">Yêu Thích+</div>
            </div>
          </a>
          <div className="companyInformation">
            <div className="factoryName">{item.Factory}</div>
            <div className="companyOperatingTime">Online 2 giờ trước</div>
            <div className="seeShop">
              <button
                type="button"
                className="btn btn-tinted btn--s btn--inline g8YUai"
              >
                <ChatOutlined
                  style={{
                    width: "18px",
                    margin: "0 5px 0 0",
                  }}
                />
                Chat Ngay
              </button>
              <a
                className="btn btn-light btn--s btn--inline btn-light--link WFQI1W"
                href="/thienyettttttttt?categoryId=100017&amp;itemId=13333573351"
              >
                <StorefrontOutlined
                  style={{
                    width: "18px",
                    marginRight: "5px",
                  }}
                />
                Xem Shop
              </a>
            </div>
          </div>
        </div>
      ))}

      {products.map((item) => (
        <div className="productFeedback" key={item._id}>
          <div className="productReviews">
            <div className="Evaluate cgFEJd">
              <label className="productEvaluate">Đánh giá</label>
              <span className="informationEvaluate">{item.Evaluate}k</span>
            </div>
            <a className="Um7a0Z cgFEJd" href="/doancuong1995#product_list">
              <label className="productEvaluate">Sản phẩm</label>
              <span className="informationEvaluate g54jiy">
                {item.NumberOfProduct}
              </span>
            </a>
          </div>
          <div className="productReviews">
            <div className="Evaluate cgFEJd">
              <label className="productEvaluate">Tỉ lệ phản hồi</label>
              <span className="informationEvaluate">{item.ResponseRate}%</span>
            </div>
            <div className="Evaluate cgFEJd">
              <label className="productEvaluate">Thời gian chờ phản hồi</label>
              <span className="informationEvaluate">
                {item.ResponseRateTime}
              </span>
            </div>
          </div>
          <div className="productReviews">
            <div className="Evaluate cgFEJd">
              <label className="productEvaluate">Tham Gia</label>
              <span className="informationEvaluate">
                {item.participation} tháng trước
              </span>
            </div>
            <div className="Evaluate cgFEJd">
              <label className="productEvaluate">Người theo dõi</label>
              <span className="informationEvaluate">
                {item.NumberOfFollowers}k
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
