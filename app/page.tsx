import ClientOnly from '@/components/features/ClientOnly';
import Header from '@/components/header';
import HomeHeroSection from '@/components/home/hero-section';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import React from 'react';

const page = async () => {

  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Header currentUser={currentUser}/>
      <HomeHeroSection />
    </ClientOnly>
  )
}

export default page;