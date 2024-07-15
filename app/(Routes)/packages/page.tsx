'use client';

import ClientOnly from '@/components/features/ClientOnly';
import AllPackages from '@/components/packages/all-packages';
import PackagesHeroSection from '@/components/packages/packages-heroSection';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import getListings, { IListingsParams } from '@/frontend/actions/getListings';
import { SafeListing } from '@/frontend/types';
import React from 'react'

interface PageProps {
  searchParams: IListingsParams;
}

const page = async ({searchParams}: PageProps) => {
        
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <PackagesHeroSection />
      <AllPackages 
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default page;