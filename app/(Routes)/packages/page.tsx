import ClientOnly from '@/components/features/ClientOnly';
import AllPackages from '@/components/packages/all-packages';
import PackagesHeroSection from '@/components/packages/packages-heroSection';
import React from 'react'

const page = () => {
  return (
    <ClientOnly>
      <PackagesHeroSection />
      <AllPackages />
    </ClientOnly>
  )
}

export default page;