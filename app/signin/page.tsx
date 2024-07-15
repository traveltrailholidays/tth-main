import GoogleSignIn from '@/components/auth/google-signin';
import SignIn from '@/components/auth/signin';
import ClientOnly from '@/components/features/ClientOnly';
import { safeUser } from '@/frontend/types';
import React from 'react';

interface PageProps {
  currentUser?: safeUser | null;
}

const page: React.FC<PageProps> = ({currentUser}) => {
  return (
    <ClientOnly>
        {/* <SignIn /> */}
        <GoogleSignIn 
          currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default page;