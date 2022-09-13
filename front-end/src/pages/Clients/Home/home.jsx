import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Banner from './HomeBanner/banner';
import Content from './HomeContent/content';

function Home() {
  return (
    <>
      <Header />
      <div className='home_page'>
        <Banner />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default Home;