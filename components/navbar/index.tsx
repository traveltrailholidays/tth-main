import Container from '@/app/components/libs/Container';
import Logo from '@/app/components/libs/Logo';
import Section from '@/app/components/libs/Section';
import React, { FC } from 'react';
import Navlink from '@/components/navbar/navlinks';
import Menu from '@/components/navbar/menu';
import { safeUser } from '@/types';

interface NavbarProps {
  currentUser?: safeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {  
  return (
    <Section className='shadow-sm dark:border-b fixed top-0 w-full z-10 bg-background'>
      <Container className='w-full flex justify-between items-center'>
        <Logo />
        <div className='flex items-center gap-7'>
          <Navlink />
          <Menu currentUser={currentUser}/>
        </div>
      </Container>
    </Section>
  )
}

export default Navbar;  