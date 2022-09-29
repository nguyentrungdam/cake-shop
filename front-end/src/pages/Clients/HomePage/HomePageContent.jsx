import React from "react";
import { itemHomePage1, itemHomePage2 } from "../../../data/itemHomePage";
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

                        {/* btn shop now */}
                        <a href="/" className="btn-shopnow">
                          Shop Now
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

        {/* free delivery */}
        <div
          id="shopify-section-1654610128902c367f"
          className="shopify-section index-section"
        >
          <div className="page-width">
            <div className="feature-row aos-init aos-animate" data-aos="">
              <div className="feature-row__item">
                <div className="feature-row__item--image">
                  <a href="/" className="feature-row__item--image--link">
                    <div className="image-wrap">
                      <img
                        className="feature-row__image lazyautosizes lazyloaded"
                        data-widths="[180, 360, 540, 720, 900, 1080]"
                        data-aspectratio="1.0"
                        data-sizes="auto"
                        alt=""
                        data-srcset="//cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_180x.png?v=1664367379 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_360x.png?v=1664367379 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_540x.png?v=1664367379 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_720x.png?v=1664367379 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_900x.png?v=1664367379 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_1080x.png?v=1664367379 1080w"
                        sizes="500px"
                        srcSet="//cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_180x.png?v=1664367379 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_360x.png?v=1664367379 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_540x.png?v=1664367379 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_720x.png?v=1664367379 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_900x.png?v=1664367379 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/mix_n_match_1080x.png?v=1664367379 1080w"
                      />
                    </div>
                  </a>
                </div>
              </div>

              <div className="feature-row__item feature-row__text feature-row__text--left larger-text">
                <p className="subtitle">THE PERFECT TREAT BOX</p>
                <h2 className="h3">FREE DELIVERY TO YOUR DOOR!</h2>
                <div className="rte featured-row__subtext">
                  <p>
                    Try out all of your favourite cupcakes, tray bakes and
                    cookie pie slices by creating one of our tasty cake Treat
                    Boxes! And if you're looking to send your loved ones some
                    treats or cupcakes by post, they also make the perfect
                    gift&nbsp;💝
                  </p>
                  <p>
                    It’s simple: all you need to do is pick your Mix 'n' Match
                    Box (6 or 12 treats)
                  </p>
                </div>
                <a href="/" className="btn-shopnow">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Calling all Vegans */}
        <div className="index-section" id="shopify-section-1569848435063">
          <div id="CollectionSection-1569848435063">
            <div className="page-width">
              <div className="section-header">
                <h2 className="section-header__title">
                  Calling all Vegans🌿
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
                    {itemHomePage2.length > 0 &&
                      itemHomePage2.map((item) => (
                        <div className="grid-product__content" key={item.id}>
                          <div className="grid-product__tags grid-product__tag--usps">
                            <div className="grid-product__tag--usp grid-product__tag--usp__vegan"></div>
                          </div>

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

        {/* Delivery box */}
        <div
          id="shopify-section-1624614674770c6c7a"
          class="shopify-section index-section--flush--delivery"
        >
          <div
            class="background-media-text--delivery  "
            data-aos="background-media-text__animation"
          >
            <div class="background-media-text__image lazyloaded">
              <div class="background-media-text__inner--delivery">
                <div class="page-width">
                  <div class="background-media-text__aligner background-media-text--left">
                    <div class="animation-cropper">
                      <div class="animation-contents">
                        <div class="background-media-text__text larger-text">
                          <p class="subtitle"></p>
                          <h2 class="h3 ">
                            FREE Nationwide delivery on your chosen date, with
                            all cakes sent frozen in protective boxes using our
                            specialist courier.
                          </h2>
                          <a href="/" class="btn-shopnow">
                            View Process
                          </a>
                        </div>
                      </div>
                    </div>
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
