import ClientOnly from '@/components/features/ClientOnly';
import AllPackages from '@/components/packages/all-packages';
import React from 'react'

const page = () => {
  return (
    <ClientOnly>
      <AllPackages />
    </ClientOnly>
  )
}

export default page;