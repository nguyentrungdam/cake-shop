import React from "react";
import styled from "styled-components";
import { SearchOutlined, MailOutline, PhoneOutlined } from "@material-ui/icons";
import { hotQuestion, supportCategory } from "./data";
import { Link } from "react-router-dom";
import "../../../css/cart.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  height: 100%;
`;

const Header = styled.div`
  flex: 0 0 auto;
  height: 65px;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  box-shadow: inset 0 -1px 0 #eee;
  background: #fff;
  display: block;
`;

const BrandContainer = styled.div`
  display: flex;
  width: 998px;
  padding: 13px 0 15px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 114px;
  height: 37px;
  fill: none;
`;
const Brand = styled.div`
  position: relative;
  bottom: 3px;
  padding-top: 3px;
  padding-left: 11px;
  margin-left: 11px;
  font-size: 17px;
  line-height: 20px;
  color: #ee4d2d;
  border-left: 1px solid #ffc8b7;
`;

const Content = styled.div`
  flex: 1 1 auto;
  background: #fff;
`;

const SearchBar = styled.div`
  top: 65px;
  right: 0;
  display: block;
  left: 0;
  background: #ee4d2d;
`;

const FormContainer = styled.div`
  max-width: 800px;
  padding: 40px 0 31px;
  margin: 0 auto;
`;

const SearchTitle = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 59px;
  color: #fff;
  text-align: center;
`;

const SearchWrap = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 2px;
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;
`;

const Input = styled.input`
  flex: 1 1;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.87);
  border: 0;
  resize: none;
  -webkit-appearance: none;
  outline: none;
  font-family: inherit;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100%;
  cursor: pointer;
  background: #ff5722;
  border-radius: 3px;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      #ee4d2d;
  }
`;

const CategoryContainer = styled.div`
  width: 998px;
  margin: 0 auto;
`;
const Category = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const CategoryTitle = styled.h2`
  padding: 40px 0 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;
const CategoryCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const CategoryItemWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;
const CategoryItems = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease 0s;
`;
const CategoryItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  float: left;
  width: 238px;
  padding: 15px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.16);
`;
const CategoryItemIcon = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 50%;
`;
const IconCategory = styled.img`
  width: 100%;
  height: 100%;
  border-style: none;
`;
const CategoryItemTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

const HotQuestion = styled.div`
  padding: 40px 0 50px;
`;
const HotQuestions = styled.div`
  width: 1000px;
  margin: 0 auto;
  color: #262626;
`;
const HotQuestionTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  border-bottom: 1px dashed #e1e1e1;
`;
const ListHotQuestions = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const ItemHotQuestions = styled.div`
  padding: 16px 10px;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
  border-bottom: 1px dashed #e1e1e1;
`;

const FooterContainer = styled.div`
  flex: 0 0 auto;
`;

const ContactFooter = styled.div`
  padding: 40px 0;
  background: #f5f5f5;
`;

const Contact = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ContactText = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
`;

const ContactItems = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  font-weight: 500;
`;

const ContactItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 260px;
  padding: 12px;
  background: #fff;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const ItemLeft = styled.div`
  margin-right: 12px;
`;

const ItemRight = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ItemTitle = styled.div`
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.87);
`;

const ItemDesc = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.54);
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
`;

const WrapFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 1000px;
  height: 80px;
  padding: 0 28px 0 21px;
`;

const FooterLeft = styled.div`
  position: relative;
  top: 33px;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.6);
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
`;

const FooterRight = styled.div`
  position: relative;
  top: 33px;
  display: flex;
  flex: 0 0;
  align-items: center;
  padding-left: 8px;
`;

const FooterLogos = styled.div`
  display: flex;
  margin-right: 15px;
`;

const FooterLogo = styled.div`
  margin-right: 16px;
  line-height: 0;
  cursor: pointer;
`;

const NetworkLink = styled.img`
  width: 27px;
  height: 27px;
  border-style: none;
`;

const FooterTexts = styled.div`
  display: flex;
`;

const FooterText = styled.div`
  padding: 0 9px;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border-left: 1px solid rgba(0, 0, 0, 0.4);
  margin: 0;

  &:last-child {
    border-right: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

const Support = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Navbar>
            <BrandContainer>
              <LogoContainer>
                <Link to="/">
                  <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1280px-Shopee.svg.png"></Logo>
                </Link>
                <Brand>Trung tâm Hỗ trợ Shopee VN</Brand>
              </LogoContainer>
            </BrandContainer>
          </Navbar>
        </Header>

        <Content>
          <SearchBar>
            <FormContainer>
              <SearchTitle>
                Xin chào, Shopee có thể giúp gì cho bạn?
              </SearchTitle>
              <SearchWrap>
                <InputContainer>
                  <Input placeholder="Nhập từ khóa hoặc nội dung cần tìm"></Input>
                  <IconContainer>
                    <SearchOutlined
                      style={{ cursor: "pointer", color: "white" }}
                    />
                  </IconContainer>
                </InputContainer>
              </SearchWrap>
            </FormContainer>
          </SearchBar>

          <CategoryContainer>
            <Category>
              <CategoryTitle>Danh Mục</CategoryTitle>
              <CategoryCarousel>
                <CategoryItemWrap>
                  {supportCategory.map((item) => (
                    <CategoryItems item={item} key={item.id}>
                      <CategoryItem>
                        <CategoryItemIcon>
                          <IconCategory src={item.img}></IconCategory>
                        </CategoryItemIcon>
                        <CategoryItemTitle>{item.title}</CategoryItemTitle>
                      </CategoryItem>
                    </CategoryItems>
                  ))}
                </CategoryItemWrap>
              </CategoryCarousel>
            </Category>
          </CategoryContainer>

          <HotQuestion>
            <HotQuestions>
              <HotQuestionTitle>Câu hỏi thường gặp</HotQuestionTitle>
              {hotQuestion.map((item) => (
                <ListHotQuestions item={item} key={item.id}>
                  <ItemHotQuestions>{item.content}</ItemHotQuestions>
                </ListHotQuestions>
              ))}
            </HotQuestions>
          </HotQuestion>

          <FooterContainer>
            <ContactFooter>
              <Contact>
                <ContactText>
                  Bạn có muốn tìm thêm thông tin gì không?
                </ContactText>
                <ContactItems>
                  <ContactItem>
                    <ItemLeft>
                      <MailOutline style={{ opacity: "0.5" }} />
                    </ItemLeft>
                    <ItemRight>
                      <ItemTitle>Email</ItemTitle>
                      <ItemDesc>Gửi câu hỏi của bạn!</ItemDesc>
                    </ItemRight>
                  </ContactItem>
                  <ContactItem>
                    <ItemLeft>
                      <PhoneOutlined
                        style={{ opacity: "0.5", marginTop: "2px" }}
                      />
                    </ItemLeft>
                    <ItemRight>19001221</ItemRight>
                  </ContactItem>
                </ContactItems>
              </Contact>
            </ContactFooter>

            <Footer>
              <WrapFooter>
                <FooterLeft>
                  © 2021 Shopee. Tất cả các quyền được bảo lưu.
                </FooterLeft>
                <FooterRight>
                  <FooterLogos>
                    <FooterLogo>
                      <span>
                        <a
                          className="FooterLink"
                          href="https://www.facebook.com/ShopeeVN"
                        >
                          <NetworkLink src="data:image/png;base64,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"></NetworkLink>
                        </a>
                      </span>
                    </FooterLogo>
                    <FooterLogo>
                      <span>
                        <a
                          className="FooterLink"
                          href="https://www.instagram.com/Shopee_VN/"
                        >
                          <NetworkLink src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABO+SURBVHgBrVpZkB3Vef7POd19Z0ejhRFiNEJCIIkIMBYGsVkQJ0WCnUrsBBy7QmV5AKcKl5/ix5TykvJDKklFQBV+SGxiXAlynGAwwbYERoBtMFghaNdo30czo1nvzL23+5x8/1l6mRkZK6alO3379Olz/v3//r+voF/h2Lr1tWhwfOI6ysT9RHILGVoliFYYYxaTEIo+6sOQEcKkhsSoIHPWGHFcCPFj1ZI/nh6ZPLV9+yPZhy0hftnNL/7lS70x0d1CZH9qhLwd+3VjuF0YUkZQhLMMczVWAjX00R3YjYSWRqQaTAoSM6B2Bvu+BiafM1q8/dy2hyboShhjDZ25MH4/Vv4yGXMXNujAcAdmi7Dp5WSSgbmMb3km9UfKLPNqWsLIUTC4C9dPrl3y6be2bhV67sR5uz766LOdV9U6H8GDjxpDm7BUtzIFeYGllpRzni4uWHsZ7hs/3BLSPYlVPgpGeRnQNoEvPxNGf2c2Xvrt7f9w98zC1OD46l/8V3fLtP4Ik5/ArfXQVgeTJIyZt3hWIjCTorKU8WMaH0NOa2FOqsCwlw6ffh3zhY9PSSk+gBq39ZL87rZtDzXmMfbMY8/EJ2av+pLW9OdSm5tBUhSIFJW/nijj7jJdmhzhJizHGoOWLDP2PlmGeIEMJy2VY14UzP//GTQt7PtuJON/XL34we8Es4zC7bPTnQ8onX0uNmadKI2XxBO+OP8x/szXxpmYEZSfObJk2hOOKUobey/KmEnHiGCtknvWhjnhmLyyQ8TYamOmW382OPr90xj4iR3lP3/7B99comvqGyLLtuCyO8hOGG+GTvDkv1rC+cJJ3pESnrFEMoFzzJCfbUXKCoL9L2gr8/d5jK9T4UzWXLkCL0EwrzSyzse2P/3AlNVMW0T36lZrM6TXxeRI4wjnszTGBV4m1hgbGAMzmXTGqasuBumDUOWDB/62lEt1MnWBJYb2OPgYGE3KDIGLDGu3DOzUB51UuiCBPyfhHrN4bBmk3ItRuRBXeHwRVr+/S0/egctX1TObnol1l/gbLHcrzEVF2DTJMoozTRFWVMa4jzbFd//h+7GfI71AKt+1S3TSRmljGbKC084breBEsAwvTPJxxWYN+Q54/66U8g0IeAzm246JV2HGPFDAls1LaUnJ5x769veidLlcG2fZ3dBGzNqJzAJR0PuT8eO59nwkMawJ5XxFO8LwXTsTzNyuTWiC50vjzI8FwPNTnIM5Ks3zNTQs601SP4Plfunpp35/kHfZutXIw8OvfBFpbCseWSPEQolUdOLePScuvHBtVEv1pyCmhO3CSlgH4gNTc591YyFH5XN0Naxb8wVlGftVhA2SyM7TILzB89IU5sbUKfwT9rtis7RyF+eE0Nu3Pf3ZwbAtR7uHt+55vm34+BdA5Eo4YUILcIbHe7KktiWKjd4CVNaeYEOao6lggoE7pynHifBaCPE/9zvPnIArxHDe7jVLqHNpF3X0diAwENXHZmj80gwNn7hE0zMtrJ/ZZ5oQQArhGhuoxIwifWQu1du3bmw++sRL58D9NCYtxBjT1gGp/WYEf7ouTrOorBn2G2lMhWBHvvAKckEk5jABolo+bPPR1b+I+u66jvofuIEWrV1KUS1ecPtWI6WLx0fp0JtH6cjuszRyftJqq4m1pEZkTsUGTNtRfubL//RybfJgOgBBdF8+LcgIKrpefO+evz8DIvtArLKGkTFTc6BXOXmaUoQMeQffa/29tPzBDTTwexupY3kPXckxcXGKPvjhQdr/xlEaGamDOQXazVETJw//9bf++H2e8/zzRu3a8Z9/1RTiK4Boy1MlLpfUOWOcFq9s/jvGWDUODxwRZckci+fgf9CO8YkZsdAHEjdh8ebVtOIPP0aLPtZPcVcNMevKkpDBvo3pBp3ZP0TvvbSPju4b4gimUxWfTCPzckvVhrTRm5pK3IrP8qZSCacQ9ssFmIM1izpMUSuHJjKyQKc0Dw6MjwvRjicfHW2mcibZe88GWvH5T1DPxhWk2uIPKYQWPhiBtHW30YoNV8MvY0q+v4+O/Pwkp+uBzIiHpW42sSxKKNkGr5eGgkUpB9HmMgeAEymZQsAck7N8VOJaSJN7VC4K71vhe89ta+jaL9xO3TdfSzJZAIVx6B6fpanBizjXIUpJUU8bdSGg1BBMhKrm2nYwdy2Ys7ms0aIj75+TJpLLhHDIRGQumVTwACd1JSvMcZ0aRRKRSaQ+Q5LVkJS8QMnP5pZfuI5XLKFrPr+ZOtdePY+pbKZJU/vP0vh7x6h+bJgaIw3KQGgGXK1qEcmlndR1/VJafFs/9Wy4hqL2IsCoWNHyG5fRLb+7gcbPTNDF4WlYigWfzqJ8VKYQrCNyViSrQBoqa2LcaUuy2bG2RNnP3Ap5yvI4celv30Ldt1xHUXdHhanmxXGa/B8EgVf3grnz1ByepCxzjHPwZSJgIzT1v2do6uAFWvap9bTk4yupbVlXQRTSxDU3Laf1n1xDY9vfd3L1VUK5xLC0pOQHpIVhgbkojhqOcGhJ2kcD6DXOv+xHV5JysqKPln3mDlKdbRVNtobHaGzHezS6czfVjwyBIcVWYk1bG2nXsWcEi2xonEYRDetnJ6gxNEkrEFHbru7O10o6YrrpwXV05I0jdPH8lDVPxpU2sXA3xMte5Iwaa5YpgopVsIQZWvNTKYk8ERdBI/exUIixb925npK+3oqm9Mws1d8/ROOvvUONYxcsimAinK6BMtKYFPZgc0y9Chi6zRwaogs4t1/dRcvuW0tRh8u7EhLpAqOrN/XT2Iv7XPCyJLhCVTNOzby/560d1qKxQCBSUQsSZUZS55TMJJtmXjOWErVFmsAsW26nucfs4eM0+eY7lJ48QXEkrV9wZnRm6Co8myEYAAOQGkg3A3HglBqHL9DwjgPUBoTSu2mgsu71962h/S/soabXDp81TFk57qx2MlthAOeyRQiXAhA8Ukiy6TXlmKr6mFNziIiyp5tqa1ZWNjeoBhp7D1J69ChFdi1pTU5rkZufm8hEcMBm00SWyWI7yC4wfeAMgs0yWnRrPxgvomUvgkxnJ+bVU7tP7vEedLNZOzeSvqpwdEZR1AQzLStUiQ2tn5X8RlpmU3cRJ5SsRhSsVWGaHp+g7NRRonGYIEyI5WIZs9UFzBAMaF9pO2vO8gpCef9LRy7RzLEhak3OUtJbBCSGZEtWLqL0wEUAaO9Q9r8sEETGrGTWx4xy7hIlUd2rxgUJZ5bkpVDuS+JhhOJ42VU092idOkk0OUqcOrRwvQ3JjHGRarwhs4JYQ8K48K2NN28WhNNQNjZBdZhlcsfqyvo9izvpkuBglOUWRIpyOBfMwe5jXGkUsUPz1soHD/4XAoqo1GDcXUgo6l0AB05PgrsZYu0b7cwwEG+TayYqEMwai/CNIO0Z4/mtBqUT0/OW71zURjVmnBO011IACraiFz6akzNsGzwi1bIbKUjbbolEaLFeHgwLuxTsEgs0tFm7EQRjZJPdywYGg+gXoQLNdGTXDXzxPhxQUKPbZ6WQuQ/yPSHn43Z+Nm5xVe+qiRCsi1IJMlGRn+s2iiSCh4zzQO8Yy/uExjppaGQLiM005neVRU8PesW1fB12aJO1KGiI97BmaFxSZeI8JnB5zWtYtaOGA6yae+gRoA+tHVOBK1HSGrcdMu01BgCgmbGEYb3bjCxT5EVrKSJR4pGFbOBLc49o5WqSy3pJnMTDnKTYYuDoxtZ1TWfGFLAmJMyMM7yyJXXi2nMIMrUlbdS+um/e+un5CVLQWJKVemL2u861Fnorjl1mLJYOb8kSY9KbYwU0W6+E9E6jRdmAWdbyO7Kji6L+AdKnDpIeHXEJkwXY0g6mWRNpUhRAtMiTpHN5aCxe2kMda5bDh7uq2pptIVqepwhY0wiX8ov+o/EsudDf4oLFd9Yi0e43CkwJp61KTSXcPc7qZKYpO3ecooF1xX3AmPjGm0mfP06tqUteW8a2Bwx3h1KfX9I0J6f4K6z22m9cSR03r52H+OuD58hMTUEoGA/JHh7KrssuI33ziYtj7pplHkNGst3ZN/qpAUt6bXnGggZL7yCygz+tMoYjGlhL5uP3kBlDWD57wpoK7yrYr5rGphHjfSMSyJ2ZRzUsx4F+6r5vE5hbRXOP0Vc/wDKZFUBIwNxw4l4Mt/NMQBs2xzmG2W8jil1CJc9YHjxE0HIRPAKyzk7sJj3xGZLdiynvXybtpNZspHh8BJS+YZkzqS7KCypFWsO+17JuHK+6jtru3Uwdt6wj2V4EDlvLDY/T+NsHfMXBdSK37WTe09SZyN/scMNV2PahsU0h62M22gbzU67zaM9qTqkZKujpC5Tu3UnRbZ9GTVv4hOxZQvFtW0j2LqXW+z+h9PQgmXEONtoLwNd4+C4XL6Zk4EZK7ryPkps2klqyuKKpbHqGRl9+i9Kz52DpcV4+MScaatE2dSBIaPYtbh0yyU5zCacfNkH+sP+IWBbmKEPYJ4c+8/BoNU7ZkbdIXgOf6N8ILdcqzIn1n8AbgMUkj+0jfeEk6bFLZGYaVoOc5EX7IpJ9KyledzNFa24g0dZeZWpiimb2DtIkKgWbjrR0wgDBBmbJqMZ9sB+jfGRkHbM2tQ1EPBZZE4wdahf+zIGESj4svPZC355f3FBjmLIDPyKR1Ej1rYe4iipawCzj1TDLVRtIT49Tdv4UtDzp0k9nN6lrViHvdWPN+dnetFKUPado/IUdlA4NQSuxBc6hNnSNJTBjnClapCGNj4aUQ6xI1uCOscsyNoBIl6TzZrgUBS6zysRiidOdvrgHgSRx2u0dQALvrlKJtzHsh9YXf4XDzDaocegwTby4g+of7LOdS2R7B/dCN4Ddw8M2/if8ewTuhVq2bdtcmUgk8EygHw7NNuTHzs+Cpsi9+bGOW8aNdoznXtiNTD9Lat3vIEnfCG110GVeiFz+QDdY19FP3L+fpv77R9TYvZcLRQvBXYmSOvfUytWMNjLC3IwrZG1dx4wKFzUjoOUI2hoF8ugTiVIuaFChtRJmtGUNFW81A7K2fYdLByjbPUxm4C5Sax+AuS2lKzkyJPXZV39As2+8Tq1zw9g2ca7AKTBLctdW3GRSrsTSqcxpYxPkN0RWRpHIGqRGWWPnVKSWGFTuNmhEPuyrkuYsKsn5s36oG9omYG616iaXtiOkD71I+jQcvu9WkgN3klgMX4oWbrGbJpD82WPUeu9NRNB3KT0FRNPkteOgJ7uPAiMhNmtdAF2uv2KAbMac2oNgjx2zNq3PAiuq40j862UiazaBgjF8dxCLvFUFZilEfFE0UYybahLhEEcDCfrIDyg9+EMIppPEVdfC99AfSXos1DITY6QvDds8pycmgSpSK6QgemaEj1R4bFl6rcARUgU2UeBl/o2j1Vhq31fhralMQcaJCK9UX1cJbUFk7BS+NwEt5ok5D/lUaMwy1yad3RuX/W0jy0aUAEM5wk2RGRp0DMF0OJoavIwws/CZZmrrNevXWhT9Ql4ny6Guq+r9e9vQxrNVFwcVMOpEklB4Lx6lZgavP3fJWpvaiR5D3Yb6pNCWDe+y0qcqijzpNelNl/NfeFaGNWIvJFvItriNxZ1UrnswmDq4FftnlS/z3ZtB2xPhD2uIYa/0Ram042mRrH2wUP4liltCN1WmdkbUnBqkru5fgMClWKUjaGluuZeX4YbyfEY+Z7vClLuxDm277OIKChOICCW8RyBWKy7EOdQTuzXcK1HtW4DoRqnMYlkO3QFv2vYFBxLfnpFYK+LkLUSrqcVPs4lsUIpHtqOeUM9ivxkqaanKlSjqu9JPFiyDpahp0bbXvE1BiU/6dsz7bUA16ETlHwu6TSiqOP25FqDLTFYWeUvQC8OZYuYEwI+5N0XjIO+5x997vGUTjmpv7MKC72BwsqIi45kq82h8+V1SQn7YHTySiYRnRBQVg8WkPjfK6ieYfg7pvNbCpkWjKcuJc2bq54F2GMzbbVP2N1YOOIk7nx2BnW/Dzd2Gf2WWMyMKZqiEFQNa91kt7xl7dGCjZiQqwDonPgBt+ykwqfUzJSq5nbEha4rP3n8sY1KWe5+sPVNHGbMbY09+9p0nRnLG7NE9thMv176FpQ/Zxl+JqcCMybUkKuNl1YmS5nLm5moq7ByqdFHVeIgjVpzMlMwK1EPh5YkvVPknJcYcTjT9R99NnTuptLx7YOP2pjL0b3DBp3C5F5+Z+c5GoY9SZiMfrwwzE1GJGVvryRyH5k97pFPACP+cqK5d7k6HQXS06jC/PVj1ybpMvnH71x9vzWPMbnTvP0+qmngeo/+CZd/FapOFrxWKKZ8LZfnISJSbqpW8cgEil4FxETDUeiI0jkIdmOOnYORuyAaKUgMXjE7Cv34ulXiSYvXvD739lUr7bB5aFbd/fVye7n8amvsa1nsT243YorREcPG9xNTcdeyckm4jWVFCoalw7QNNbnKGXDOXcqF636oj5A/D33ahuvxa/Bt937z3ra9OLrj/5Q7z7mMohcUns5T+BIh6s3Fptx35AjgHwM22cKsvgK3JhBH+xdssIhawpEbHinsfZjpz2JJRCI/PwH8a/l4D13VGJfAovo8av9nsTIE40lTHda1VvZnWfpHp2r9GOtu1YedTI5ej/ZcyljO45+GExq6+QZv0t5DktyDproL8V4By+2Pnys9/So7PSdiAMUtk05+nEaL4e7iua4sVTctf83eek4KtJl1qNtvOtnR8XFPyujJq5+ThqcGN+7Y3P4zm/wN9PZ+eoKOS7gAAAABJRU5ErkJggg=="></NetworkLink>
                        </a>
                      </span>
                    </FooterLogo>
                  </FooterLogos>

                  <FooterTexts>
                    <FooterText>
                      <span>
                        <a
                          className="FooterTextLink"
                          href="https://help.shopee.vn/portal/article/77242"
                        >
                          Chính sách và Quy tắc của Shopee
                        </a>
                      </span>
                    </FooterText>
                    <FooterText>
                      <span>
                        <a
                          className="FooterTextLink"
                          href="https://help.shopee.vn/portal/article/77243"
                        >
                          Yêu cầu về chất lượng dịch vụ
                        </a>
                      </span>
                    </FooterText>
                    <FooterText>
                      <span>
                        <a
                          className="FooterTextLink"
                          href="https://help.shopee.vn/portal/article/77244"
                        >
                          Chính sách Bảo vệ Quyền riêng tư
                        </a>
                      </span>
                    </FooterText>
                  </FooterTexts>
                </FooterRight>
              </WrapFooter>
            </Footer>
          </FooterContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Support;
