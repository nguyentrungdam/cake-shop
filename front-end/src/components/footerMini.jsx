import React from "react";
import styled from "styled-components";
import { KeyboardArrowRight } from "@material-ui/icons";

const FooterMini = () => {
  return (
    <Container>
      <BottomFooter>
        <BottomFirst>
          <FirstTop>
            <ColumnContent>
              <ColumnTitle>CHĂM SÓC KHÁCH HÀNG</ColumnTitle>
              <ColumnItems>
                <ColumnItem>Trung Tâm Trợ Giúp</ColumnItem>
                <ColumnItem>Shopee Blog</ColumnItem>
                <ColumnItem>Shopee Mall</ColumnItem>
                <ColumnItem>Hướng Dẫn Mua Hàng</ColumnItem>
                <ColumnItem>Hướng Dẫn Bán Hàng</ColumnItem>
                <ColumnItem>Thanh Toán</ColumnItem>
                <ColumnItem>Shopee Xu</ColumnItem>
                <ColumnItem>Vận Chuyển</ColumnItem>
                <ColumnItem>Trả Hàng & Hoàn Tiền</ColumnItem>
                <ColumnItem>Chăm Sóc Khách Hàng</ColumnItem>
                <ColumnItem>Chính Sách Bảo Hành</ColumnItem>
              </ColumnItems>
            </ColumnContent>

            <ColumnContent>
              <ColumnTitle>VỀ SHOPEE</ColumnTitle>
              <ColumnItems>
                <ColumnItem>Giới Thiệu Về Shopee Việt Nam</ColumnItem>
                <ColumnItem>Tuyển Dụng</ColumnItem>
                <ColumnItem>Điều Khoản Shopee</ColumnItem>
                <ColumnItem>Chính Sách Bảo Mật</ColumnItem>
                <ColumnItem>Chính Hãng</ColumnItem>
                <ColumnItem>Kênh Người Bán</ColumnItem>
                <ColumnItem>Flash Sales</ColumnItem>
                <ColumnItem>Chương Trình Tiếp Thị Liên Kết Shopee</ColumnItem>
                <ColumnItem>Liên Hệ Với Truyền Thông</ColumnItem>
              </ColumnItems>
            </ColumnContent>

            <ColumnContent>
              <ColumnTitle>THANH TOÁN</ColumnTitle>
              <ColumnItems>
                <ColumnPaymentImg src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/299872895_622464565969528_2825450168957160395_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mPb9KcHFjMkAX9wiEoa&_nc_ht=scontent.fsgn4-1.fna&oh=03_AVIsnmtaAqE4I_oxRWYnvQC8aFSTPZ2Klq7KAqVLlGYQ9g&oe=632BD43F"></ColumnPaymentImg>
              </ColumnItems>
              <ColumnTitle>ĐƠN VỊ VẬN CHUYỂN</ColumnTitle>
              <ColumnItems>
                <ColumnPaymentImg src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/298589009_1218674058972144_9150878573697815633_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pLZlBb2ns-cAX8Hs_Ui&_nc_ht=scontent.fsgn8-3.fna&oh=03_AVIuLuRIPTrcqp0w1XC-Jg9hoLGmyYiH-4fAjg-v6AT_Uw&oe=6328B12F"></ColumnPaymentImg>
              </ColumnItems>
            </ColumnContent>

            <ColumnContent>
              <ColumnTitle>THEO DÕI CHÚNG TÔI TRÊN</ColumnTitle>
              <ColumnItems>
                <ColumnItem>
                  <span>
                    <a
                      className="SocialLink"
                      href="https://facebook.com/ShopeeVN"
                    >
                      <SocialItem></SocialItem>
                      Facebook
                    </a>
                  </span>
                </ColumnItem>
                <ColumnItem>
                  <span>
                    <a
                      className="SocialLink"
                      href="https://instagram.com/Shopee_VN"
                    >
                      <SocialItem>
                        <SocialImg
                          style={{ paddingBottom: "5.5px" }}
                          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/299460750_486305956167877_4877891201357763081_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mw7M2vpr6aoAX81dgEK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJAsCfwF0CKBD3wQuQUYFrmzygaA7wqEz0DHP_42PmUFQ&oe=632B2665"
                        ></SocialImg>
                      </SocialItem>
                      Instagram
                    </a>
                  </span>
                </ColumnItem>
                <ColumnItem>
                  <span>
                    <a
                      className="SocialLink"
                      href="https://linkedin.com/company/shopee"
                    >
                      <SocialItem>
                        <SocialImg
                          style={{ paddingBottom: "5px" }}
                          src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/298921705_1976352202560977_5875448747266143903_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Y2A0BviIeiEAX-iIMfa&_nc_oc=AQlIg4Ol5nqiRtMIszoSeMIvsi5X2kB58IwQbv-5XM21lEFTNWNK--c45g0RJ1TUGHY&_nc_ht=scontent.fsgn8-4.fna&oh=03_AVJQV6uxATeSkgMygJIj0Nd1NY7hlgHGRl74wGLGyxoBWQ&oe=6329D672"
                        ></SocialImg>
                      </SocialItem>
                      Linkedln
                    </a>
                  </span>
                </ColumnItem>
              </ColumnItems>
            </ColumnContent>

            <ColumnContent>
              <ColumnTitle>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</ColumnTitle>
              <NoReferrer>
                <QrImgBottom src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"></QrImgBottom>
                <AppsBottom>
                  <AppBottom src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"></AppBottom>
                  <AppBottom src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"></AppBottom>
                  <AppBottom src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"></AppBottom>
                </AppsBottom>
              </NoReferrer>
            </ColumnContent>
          </FirstTop>

          <FirstBottom>
            <CopyRight>© 2022 Shopee. Tất cả các quyền được bảo lưu.</CopyRight>
            <Nation>
              <Area>Quốc gia & Khu vực:</Area>
              <AreaItem>
                <AreaItemLink>Singapore</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Indonesia</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Đài Loan</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Thái Lan</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Malaysia</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Việt Nam</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Philippines</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Brazil</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>México</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Colombia</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Chile</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Poland</AreaItemLink>
              </AreaItem>
              <AreaItem>
                <AreaItemLink>Argentina</AreaItemLink>
              </AreaItem>
            </Nation>
          </FirstBottom>
        </BottomFirst>

        <BottomLast>
          <BottomLastContent>
            <PrivacyPolicy>
              <PrivacyPolicyContent>
                <PrivacyPolicyLink>
                  <PrivacyPolicyTilte>CHÍNH SÁCH BẢO MẬT</PrivacyPolicyTilte>
                </PrivacyPolicyLink>
              </PrivacyPolicyContent>

              <PrivacyPolicyContent>
                <PrivacyPolicyLink>
                  <PrivacyPolicyTilte>QUY CHẾ HOẠT ĐỘNG</PrivacyPolicyTilte>
                </PrivacyPolicyLink>
              </PrivacyPolicyContent>

              <PrivacyPolicyContent>
                <PrivacyPolicyLink>
                  <PrivacyPolicyTilte>CHÍNH SÁCH VẬN CHUYỂN</PrivacyPolicyTilte>
                </PrivacyPolicyLink>
              </PrivacyPolicyContent>

              <PrivacyPolicyContent>
                <PrivacyPolicyLink>
                  <PrivacyPolicyTilte>
                    CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
                  </PrivacyPolicyTilte>
                </PrivacyPolicyLink>
              </PrivacyPolicyContent>
            </PrivacyPolicy>

            <Certification>
              <span className="CertificationLink">
                <CertificationImg src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.15752-9/299517344_1047060882615476_4786780353538463741_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8MH9wE8Z6M0AX8fc0A7&_nc_ht=scontent.fsgn13-3.fna&oh=03_AVIbYieYh-9t9q4GNXSF7sz59-QgAYOqeSsflp2Cu2FMLg&oe=63295A13"></CertificationImg>
              </span>

              <span className="CertificationLink">
                <CertificationImg src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.15752-9/299517344_1047060882615476_4786780353538463741_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8MH9wE8Z6M0AX8fc0A7&_nc_ht=scontent.fsgn13-3.fna&oh=03_AVIbYieYh-9t9q4GNXSF7sz59-QgAYOqeSsflp2Cu2FMLg&oe=63295A13"></CertificationImg>
              </span>

              <span className="CertificationLink">
                <CertificationImg
                  src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/300602731_421136799996225_8184681558569382451_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=j4JHweBJwz0AX9yTTDG&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJnlNMFiAiI6Vfu0FufSkO6hxWvmDF8a8KplAZ1OYez9A&oe=63298DE6"
                  style={{
                    backgroundSize: "1379.1666666666667% 447.9166666666667%",
                    backgroundPosition:
                      "1.6286644951140066% 92.21556886227545%",
                    width: "3.4rem",
                    height: "3.4rem",
                  }}
                ></CertificationImg>
              </span>
            </Certification>

            <Company>Công ty TNHH Shopee</Company>

            <ShopeeInfo>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
              Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
              đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </ShopeeInfo>
            <ShopeeInfo>
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
              liên hệ: 024 73081221 (ext 4678)
            </ShopeeInfo>
            <ShopeeInfo>
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
              cấp lần đầu ngày 10/02/2015
            </ShopeeInfo>
            <ShopeeInfo>
              © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
            </ShopeeInfo>
          </BottomLastContent>
        </BottomLast>
      </BottomFooter>
    </Container>
  );
};

const Container = styled.footer`
  min-width: 75rem;
  border-top: 4px solid #ee4d2d;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.54);
  border-top-color: #ee4d2d;
  visibility: visible;
`;

const BottomFooter = styled.div`
  background-color: #fbfbfb;
  color: rgba(0, 0, 0, 0.54);
`;

const BottomFirst = styled.div`
  width: 75rem;
  margin: auto;
  color: rgba(0, 0, 0, 0.54);
`;

const FirstTop = styled.div`
  padding: 0.3125rem;
  margin: 0 -0.3125rem;
  width: 100%;
  align-items: flex-start;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
`;

const ColumnContent = styled.div`
  width: 20%;
  box-sizing: border-box;
  width: 20%;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.54);
`;

const ColumnTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
  text-transform: uppercase;
`;

const ColumnItems = styled.ul`
  text-decoration: none;
  display: block;
  color: rgba(0, 0, 0, 0.54);
  list-style-type: none;
  margin: 0 0 1.5625rem;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ColumnItem = styled.li`
  text-transform: capitalize;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  align-content: center;
  display: flex;
  text-align: -webkit-match-parent;
  color: rgba(0, 0, 0, 0.54);
  list-style-type: none;

  &:hover {
    color: #ee4d2d;
    cursor: pointer;
  }
`;

const ColumnPaymentImg = styled.img`
  width: 75%;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  align-content: center;
  display: flex;
  background-color: transparent;
  cursor: pointer;
  text-transform: capitalize;
  text-align: -webkit-match-parent;
  list-style-type: none;
  font-size: 0.75rem;

  &:hover {
    color: #ee4d2d;
    cursor: pointer;
  }
`;

const SocialItem = styled.div`
  height: 1rem;
  width: 1rem;
  margin-bottom: 0.25rem;
  margin-right: 0.625rem;
  background-size: 2068.75% 671.875%;
  background-position: 1.5873015873015872% 28.415300546448087%;
  color: rgba(0, 0, 0, 0.54);
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png);
`;

const SocialImg = styled.img`
  width: 100%;
`;

const NoReferrer = styled.a`
  width: 100%;
  flex-direction: row;
  display: flex;
  text-decoration: none;
  background-color: transparent;
  color: -webkit-link;
  cursor: pointer;
`;

const QrImgBottom = styled.img`
  height: 5.25rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.09);
  width: 5.25rem;
  margin-right: 0.9375rem;
  color: -webkit-link;
  cursor: pointer;
`;

const AppsBottom = styled.div`
  height: 5.25rem;
  justify-content: space-around;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  color: -webkit-link;
  cursor: pointer;
`;

const AppBottom = styled.img`
  width: 5rem;
  border: 0;
  color: -webkit-link;
  cursor: pointer;
`;

const FirstBottom = styled.div`
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.54);
  padding: 2.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
`;

const CopyRight = styled.div`
  flex-shrink: 0;
  margin-right: 25px;
  line-height: 1.125rem;
  color: rgba(0, 0, 0, 0.54);
`;

const Nation = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
`;

const Area = styled.div`
  flex: 1 0 auto;
  text-align: right;
  margin-left: 5.5px;
  line-height: 1.125rem;
  color: rgba(0, 0, 0, 0.54);
`;

const AreaItem = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 5px;
  color: rgba(0, 0, 0, 0.54);

  &:last-child {
    border-right: none;
  }
`;

const AreaItemLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.125rem;
  background-color: transparent;
  cursor: pointer;
`;

const BottomLast = styled.div`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
  padding: 2.625rem 0 2.3125rem;
  background: #f5f5f5;
`;

const BottomLastContent = styled.div`
  width: 75rem;
  margin: 0 auto;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
`;

const PrivacyPolicy = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
`;

const PrivacyPolicyContent = styled.div`
  padding: 0 1.5625rem;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  text-transform: uppercase;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
`;

const PrivacyPolicyLink = styled.a`
  text-decoration: none;
  display: block;
  color: rgba(0, 0, 0, 0.54);
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const PrivacyPolicyTilte = styled.span`
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const Certification = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 0;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
`;

const CertificationLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 1.25rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.75rem;
`;

const CertificationImg = styled.img`
  width: 7.5rem;
  height: 2.8126rem;
  background-size: 551.6666666666666% 477.77777777777777%;
  background-position: 14.391143911439114% 99.41176470588235%;
`;

const Company = styled.div`
  margin-bottom: 1.5625rem;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
`;

const ShopeeInfo = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
`;

export default FooterMini;
