import ClientOnly from '@/components/features/ClientOnly';
import Header from '@/components/header';
import ExplorePackages from '@/components/home/explore-packages';
import HomeHeroSection from '@/components/home/hero-section';
import HomeSelectCategory from '@/components/home/select-category';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import React from 'react';
import { Suspense } from 'react';

const page = async () => {

  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Header currentUser={currentUser}/>
      <HomeHeroSection />
      <ExplorePackages />
      <Suspense> {/* I have to use this, because i used the useSearchParams in select category component */}
        <HomeSelectCategory />
      </Suspense>
    </ClientOnly>
  )
}

export default page;

