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
                  BEST SELLERS 🔥
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
          className="shopify-section index-section--flush--delivery"
        >
          <div
            className="background-media-text--delivery  "
            data-aos="background-media-text__animation"
          >
            <div className="background-media-text__image lazyloaded">
              <div className="background-media-text__inner--delivery">
                <div className="page-width">
                  <div className="background-media-text__aligner background-media-text--left">
                    <div className="animation-cropper">
                      <div className="animation-contents">
                        <div
                          className="background-media-text__text larger-text"
                          style={{ height: "420px" }}
                        >
                          <p className="subtitle"></p>
                          <h2 className="h3 ">
                            FREE Nationwide delivery on your chosen date, with
                            all cakes sent frozen in protective boxes using our
                            specialist courier.
                          </h2>
                          <a href="/" className="btn-shopnow">
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

        {/* Shop by */}
        <div
          className="shopify-section index-section-shopby"
          id="shopify-section-1499789718857"
        >
          <div className="page-width">
            <div className="section-header">
              <h2 className="section-header__title">Shop by...</h2>
            </div>
            <div className="grid grid--small-gutters">
              <div className="grid__item medium-up--one-half skrim__item collection--square-large ">
                <a href="/" className="skrim__link skrim__item-content">
                  <div className="skrim__overlay grid__image"></div>
                  <div className="skrim__title">
                    <div className="skrim__underline-me">All Cakes</div>
                  </div>
                </a>
              </div>
              <div className="grid__item medium-up--one-quarter skrim__item small--one-half collection--square-small ">
                <a
                  href="/collections/corporate-cakes"
                  className="skrim__link skrim__item-content"
                >
                  <div
                    className="skrim__overlay grid__image "
                    style={{
                      backgroundImage:
                        "url(https://cdn.shopify.com/s/files/1/0261/0108/8359/collections/colour_match_360x.png?v=1654606754)",
                    }}
                  ></div>

                  <div className="skrim__title">
                    <div className="skrim__underline-me">Corporate Cakes</div>
                  </div>
                </a>
              </div>
              <div className="grid__item medium-up--one-quarter skrim__item small--one-half collection--square-small ">
                <a
                  href="/collections/corporate-cakes"
                  className="skrim__link skrim__item-content"
                >
                  <div
                    className="skrim__overlay grid__image "
                    style={{
                      backgroundImage:
                        "url(https://cdn.shopify.com/s/files/1/0261/0108/8359/collections/vegan_logo_360x.png?v=1646405985)",
                    }}
                  ></div>

                  <div className="skrim__title">
                    <div className="skrim__underline-me">
                      Vegan Cake Delivery
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid__item medium-up--one-half skrim__item collection--wide ">
                <a href="/" className="skrim__link skrim__item-content">
                  <div
                    className="skrim__overlay grid__image"
                    style={{
                      backgroundImage:
                        "url(https://cdn.shopify.com/s/files/1/0261/0108/8359/collections/m_m_900x.jpg?v=1624457918)",
                    }}
                  ></div>
                  <div className="skrim__title">
                    <div className="skrim__underline-me">Treat Boxes</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Easy top */}
        <div
          id="shopify-section-1570459510672"
          className="shopify-section index-section"
          style={{ height: "90px", paddingTop: "30px" }}
        >
          <div
            data-section-id="1570459510672"
            data-section-type="featured-content-section"
            className="text-center"
          >
            <div className="page-width">
              <div className="grid">
                <div className="grid__item medium-up--three-quarters medium-up--push-one-eighth">
                  <h2 className="h2-easy">Easy as 1-2-3</h2>

                  <div className="rte">
                    <div className="enlarge-text">
                      <p>
                        Choose your perfect cake, buy online and await delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Easy bottom */}
        <div
          id="shopify-section-1570439891441"
          className="shopify-section index-section"
        >
          <div className="page-width">
            <div className="grid grid--uniform grid--flush-bottom">
              <div
                className="grid__item medium-up--one-third text-left aos-init aos-animate"
                data-aos="row-of-3"
              >
                <div className="image-wrap--easy text-spacing">
                  <img
                    className="lazyautosizes lazyloaded"
                    data-widths="[180, 360, 540, 720, 900, 1080]"
                    data-aspectratio="1.5"
                    data-sizes="auto"
                    alt="cakes liverpool"
                    data-srcset="//cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_180x.jpg?v=1613536603 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_360x.jpg?v=1613536603 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_540x.jpg?v=1613536603 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_720x.jpg?v=1613536603 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_900x.jpg?v=1613536603 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_1080x.jpg?v=1613536603 1080w"
                    sizes="334px"
                    srcSet="//cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_180x.jpg?v=1613536603 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_360x.jpg?v=1613536603 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_540x.jpg?v=1613536603 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_720x.jpg?v=1613536603 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_900x.jpg?v=1613536603 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_step_1_1080x.jpg?v=1613536603 1080w"
                  />
                </div>
                <h3 className="h3-easy">1. Pick your cake or treats</h3>
                <div className="rte-setting text-spacing">
                  <p>
                    Choose from our range of flavour-packed cakes and treats.
                    From celebration cakes to cupcake boxes, there's something
                    for everyone!
                  </p>
                </div>
              </div>
              <div
                className="grid__item medium-up--one-third text-left aos-init aos-animate"
                data-aos="row-of-3"
              >
                <div className="image-wrap--easy text-spacing">
                  <img
                    className="lazyautosizes lazyloaded"
                    data-widths="[180, 360, 540, 720, 900, 1080]"
                    data-aspectratio="1.5"
                    data-sizes="auto"
                    alt="buy cake online"
                    data-srcset="//cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_180x.jpg?v=1613536605 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_360x.jpg?v=1613536605 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_540x.jpg?v=1613536605 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_720x.jpg?v=1613536605 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_900x.jpg?v=1613536605 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_1080x.jpg?v=1613536605 1080w"
                    sizes="334px"
                    srcSet="//cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_180x.jpg?v=1613536605 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_360x.jpg?v=1613536605 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_540x.jpg?v=1613536605 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_720x.jpg?v=1613536605 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_900x.jpg?v=1613536605 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cba_checkout_1080x.jpg?v=1613536605 1080w"
                  />
                </div>
                <h3 className="h3-easy">2. Buy online</h3>
                <div className="rte-setting text-spacing">
                  <p>
                    Choose your delivery date and purchase through our online
                    checkout.
                  </p>
                </div>
              </div>
              <div
                className="grid__item medium-up--one-third text-left aos-init aos-animate"
                data-aos="row-of-3"
              >
                <div className="image-wrap--easy text-spacing">
                  <img
                    className="lazyautosizes lazyloaded"
                    data-widths="[180, 360, 540, 720, 900, 1080]"
                    data-aspectratio="1.4979166666666666"
                    data-sizes="auto"
                    alt=""
                    data-srcset="//cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_180x.jpg?v=1625495984 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_360x.jpg?v=1625495984 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_540x.jpg?v=1625495984 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_720x.jpg?v=1625495984 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_900x.jpg?v=1625495984 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_1080x.jpg?v=1625495984 1080w"
                    sizes="334px"
                    srcSet="//cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_180x.jpg?v=1625495984 180w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_360x.jpg?v=1625495984 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_540x.jpg?v=1625495984 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_720x.jpg?v=1625495984 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_900x.jpg?v=1625495984 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/await_delivery_1080x.jpg?v=1625495984 1080w"
                  />
                </div>
                <h3 className="h3-easy">3. Await delivery</h3>
                <div className="rte-setting text-spacing">
                  <p>
                    Once your order has been confirmed, all you need to do is
                    sit back, relax and wait for your delivery!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About bottom */}
        <div
          id="shopify-section-1624617711a30538ae"
          className="shopify-section"
        >
          <div className="custom-content">
            <div className="custom__item one-whole align--top-middle">
              <div className="custom__item-inner custom__item-inner--image ">
                <div className="aos-animate">
                  <div className="image-wrap--about">
                    <img
                      className="lazyautosizes lazyloaded"
                      data-widths="[360, 540, 720, 900, 1080, 1600]"
                      data-aspectratio="1.885014137606032"
                      data-sizes="auto"
                      alt=""
                      data-srcset="//cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_360x.jpg?v=1625497330 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_540x.jpg?v=1625497330 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_720x.jpg?v=1625497330 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_900x.jpg?v=1625497330 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_1080x.jpg?v=1625497330 1080w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_1600x.jpg?v=1625497330 1600w"
                      sizes="1074px"
                      srcSet="//cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_360x.jpg?v=1625497330 360w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_540x.jpg?v=1625497330 540w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_720x.jpg?v=1625497330 720w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_900x.jpg?v=1625497330 900w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_1080x.jpg?v=1625497330 1080w, //cdn.shopify.com/s/files/1/0261/0108/8359/files/cakes_2a80a058-2395-411a-b4cd-a68a91765506_1600x.jpg?v=1625497330 1600w"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="shopify-section-1498163293234"
          className="shopify-section index-section--bottom"
          style={{ height: "293px" }}
        >
          <div
            data-section-id="1498163293234"
            data-section-type="featured-content-section"
            className="text-center"
          >
            <div className="page-width">
              <div className="grid">
                <div className="grid__item medium-up--three-quarters medium-up--push-one-eighth">
                  <div className="rte">
                    <div className="enlarge-text">
                      <p>
                        From our family-run cake shop, we&nbsp;create delicious
                        cakes for every occasion. Our unique, innovative
                        approach has led us to become one of the most respected
                        cake makers in Liverpool and now the VietNam!
                      </p>
                      <p>
                        Looking for a last minute cake? You'll be glad to hear
                        that we now offer next day delivery! Order your cake
                        online from Cakes By Damn now. 🎂
                      </p>
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
