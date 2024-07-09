import Container from '@/app/components/libs/Container';
import Logo from '@/app/components/libs/Logo';
import Section from '@/app/components/libs/Section';
import React from 'react';
import Navlink from '@/components/navbar/navlinks';
import Menu from '@/components/navbar/menu';

const Navbar = () => {
  return (
    <Section className='shadow-sm dark:border-b fixed top-0 w-full z-10 bg-background'>
      <Container className='w-full flex justify-between items-center'>
        <Logo />
        <div className='flex items-center gap-7'>
          <Navlink />
          <Menu />
        </div>
      </Container>
    </Section>
  )
}

export default Navbar;  