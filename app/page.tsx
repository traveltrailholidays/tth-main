import React from 'react';
import Header from '@/components/custom/Header';
import FooterBar from '@/components/custom/FooterBar';
import HeroSection from '@/components/custom/HeroSection';
import ExploreDestination from '@/components/custom/ExploreDestination';
import Footer from '@/components/custom/Footer';

const Home = () => {
  return (
    <main className=''>
      <Header/>
      <HeroSection/>
      <ExploreDestination/>
      <Footer/>
      <FooterBar/>
    </main>
  )
}

export default Home