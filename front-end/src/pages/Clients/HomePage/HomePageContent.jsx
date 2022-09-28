import React from "react";
import { itemHomePage1 } from "../../../data/itemHomePage";
import { HomeContentWrapper } from "../../../styles/homeStyle";

const HomePageContent = () => {
  return (
    <HomeContentWrapper>
      <main className="main-content" id="MainContent">
        {/* banner */}
        <div
          className="index-section--flush"
          id="shopify-section-16246141981a65edb5"
        >
          <div className="background-media-text">
            <div className="background-media-text__inner">
              <div className="page-width">
                <div className="background-media-text__aligner ">
                  <div className="animation-cropper">
                    <div className="animation-contents">
                      <div className="background-media-text__text larger-text">
                        <p className="subtitle"></p>

                        <h2 className="h3">
                          Cakes, Cupcakes, Treats and Home baking kits,
                          Deliciously delivered direct to your door!
                        </h2>

                        <a href="/">
                          <button className="btn-banner">Shop Now</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* best seller */}
        <div className="index-section" id="shopify-section-1569848435063">
          <div id="CollectionSection-1569848435063">
            <div className="page-width">
              <div className="section-header">
                <h2 className="section-header__title">
                  BEST SELLERS
                  <a
                    href="/collections/may-promotions"
                    className="section-header__link"
                  >
                    View all
                  </a>
                </h2>
              </div>
            </div>

            <div className="page-width--flush-small">
              <div className="grid-overflow-wrapper">
                <div className="grid">
                  <div className="grid__item grid-product">
                    {itemHomePage1.length > 0 &&
                      itemHomePage1.map((item) => (
                        <div className="grid-product__content" key={item.id}>
                          <a href="/" className="grid-product__link">
                            <div className="grid-product__image-mask">
                              <div className="image-wrap">
                                <img
                                  src={item.img}
                                  alt="Cake pic"
                                  className="grid-product__image"
                                />
                              </div>
                            </div>
                            <div className="grid-product__meta">
                              <div className="grid-product__title">
                                {item.itemName}
                              </div>
                              <div className="grid-product__price">
                                from
                                <span className="money">
                                  {" "}
                                  £
                                  {Number(item.price).toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                  })}
                                </span>
                              </div>
                              <p className="free-delivery">Free Delivery</p>
                            </div>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HomeContentWrapper>
  );
};

export default HomePageContent;
