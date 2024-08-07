import ClientOnly from '@/components/features/ClientOnly';
import Footer from '@/components/footer';
import Header from '@/components/header';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import React from 'react';

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout: React.FC<RoutesLayoutProps> = async ({ children }) => {

  const currentUser = await getCurrentUser();

  return (
    <>
      <ClientOnly>
        <Header currentUser={currentUser} />
      </ClientOnly>
      {children}
      <Footer />
    </>
  )
}

export default RoutesLayout;