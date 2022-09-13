import React from "react";
import { useEffect } from "react";
import Slider from "../slider";
import "./banner.css";

export default function Banner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const listBannerBot = [
    {
      id: 1,
      link: "https://shopee.vn/m/khung-gio-san-sale",
      title: "Khung Giờ Săn Sale",
      img: "https://cf.shopee.vn/file/46a2a2c810622f314d78455da5e5d926_xhdpi",
    },
    {
      id: 2,
      link: "https://shopee.vn/m/gi-cung-re-freeship",
      title: "Gì Cũng Rẻ - Mua Là Freeship",
      img: "https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
    },
    {
      id: 3,
      link: "https://shopee.vn/m/mien-phi-van-chuyen",
      title: "Miễn Phí Vẫn Chuyển",
      img: "https://cf.shopee.vn/file/c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi",
    },
    {
      id: 4,
      link: "https://shopee.vn/m/shopee-cashback",
      title: "Hoàn Xu 6% - Lên Đến 200K",
      img: "https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi",
    },
    {
      id: 5,
      link: "https://shopee.vn/m/sale-hang-hieu-gia-tot",
      title: "Hàng Hiệu Giá Tốt",
      img: "https://cf.shopee.vn/file/8d6d5ee795e7675fed39d31ba04c3b92_xhdpi",
    },
    {
      id: 6,
      link: "https://shopee.vn/m/sandealquocte-1807",
      title: "Hàng Quốc Tế - Deal Hot 1K",
      img: "https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi",
    },
    {
      id: 7,
      link: "https://shopee.vn/digital-product/shop/others",
      title: "Nạp Thẻ, Hóa Đơn & Phim",
      img: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
    },
    {
      id: 8,
      link: "https://shopee.vn/m/deal-1k",
      title: "Deal Sốc Từ 1K",
      img: "https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi",
    },
    {
      id: 9,
      link: "https://shopee.vn/m/shopeesogiday",
      title: "Chọn 6 Số Trúng Tiền Triệu",
      img: "https://cf.shopee.vn/file/ed849a82e8c66bbff8ec0f2869c6fbb7_xhdpi",
    },
  ];

  const sliderImage = [
    {
      link: "https://shopee.vn/m/freeship-xtra-plus",
      urls: "https://cf.shopee.vn/file/dac3d4eaeade1da6aa1e5d8baf1fd8fb_xxhdpi",
    },
    {
      link: "https://shopee.vn/m/tro-lai-san-deal-jan",
      urls: "https://cf.shopee.vn/file/5b678401fea50c49d3c28ca099837630_xxhdpi",
    },
    {
      link: "https://shopee.vn/colosmulti",
      urls: "https://cf.shopee.vn/file/f3c2f1a82edf748c4c499e23298d90a5_xxhdpi",
    },
    {
      link: "https://shopee.vn/m/15-sale-dong-gia",
      urls: "https://cf.shopee.vn/file/a59c93d8248b38b8d529e108d008801a_xxhdpi",
    },
    {
      link: "https://shopee.vn/m/top-deal-hot-trend",
      urls: "https://cf.shopee.vn/file/36ce729bbe6fe902baee6df2f24007c4_xxhdpi",
    },
    {
      link: "https://shopee.vn/Nhacuadoisong",
      urls: "https://cf.shopee.vn/file/4efd195ecf3f92950bca26cc70286499_xxhdpi",
    },
    {
      link: "https://shopee.vn/TopShopThoiTrang",
      urls: "https://cf.shopee.vn/file/a77cbf2526e3d30b61492156cedcb951_xxhdpi",
    },
    {
      link: "https://shopee.vn/samsung-day",
      urls: "https://cf.shopee.vn/file/8cf68b712e97307a52fb9240347d9e5f_xxhdpi",
    },
    {
      link: "https://shopee.vn/DealHotThoiTrang",
      urls: "https://cf.shopee.vn/file/0cbb7b8176df269c7b113bed1bb72d98_xxhdpi",
    },
    {
      link: "https://shopee.vn/sandealquocte",
      urls: "https://cf.shopee.vn/file/28e9bbaf5d238ffbc8b1e4115f37e563_xxhdpi",
    },
    {
      link: "https://shopee.vn/book-club",
      urls: "https://cf.shopee.vn/file/cb2372b2c980ea368b5d5ef81283d440_xxhdpi",
    },
    {
      link: "https://shopee.vn/m/sieu-sale-nganh-hang",
      urls: "https://cf.shopee.vn/file/41c777a278dc162540f8b43ad5bd8586_xxhdpi",
    },
  ];

  return (
    <div className="home_banner">
      <div className="full_home_banners_wrapper">
        <div className="top_banner">
          <div className="full_home_banners">
            <div className="full_home_banner_main_left">
              <div className="stardust_carousel">
                <Slider sliderImage={sliderImage} />
              </div>
            </div>

            <div className="full_home_banner_main_right_wrapper">
              <a
                className="full_home_banner_main_right_banner"
                href="https://shopee.vn/m/shopeepay"
              >
                <div className="full_home_banner_main_right_banner_frame">
                  <div
                    className="full_home_banner_main_right_banner_img"
                    style={{
                      backgroundImage: `url(https://cf.shopee.vn/file/478196166f180404559e2244bb57d289_xhdpi)`,
                    }}
                  ></div>
                </div>
              </a>

              <a
                className="full_home_banner_main_right_banner"
                href="https://shopee.vn/mothestandardchartered"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="full_home_banner_main_right_banner_frame">
                  <div
                    className="full_home_banner_main_right_banner_img"
                    style={{
                      backgroundImage: `url(https://cf.shopee.vn/file/53708213793ca86ff191fc8d5ee781a0_xhdpi)`,
                    }}
                  ></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bot_banner">
          {listBannerBot.map((banner) => (
            <a href={banner.link} className="bot_banner_a" key={banner.id}>
              <div className="bot_banner_hover" style={{ width: 100 }}>
                <div className="bot_banner_header">
                  <div className="bot_banner_header_frame">
                    <div
                      className="bot_banner_header_img"
                      style={{ backgroundImage: `url(${banner.img})` }}
                    ></div>
                  </div>
                </div>
                <div className="bot_banner_title">{banner.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
