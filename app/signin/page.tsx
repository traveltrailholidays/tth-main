import SignIn from '@/components/auth/signin';
import ClientOnly from '@/components/features/ClientOnly';
import React from 'react';

const page = () => {
  return (
    <ClientOnly>
        <SignIn />
    </ClientOnly>
  )
}

export default page;