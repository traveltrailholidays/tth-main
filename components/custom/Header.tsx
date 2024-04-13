'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import styles from '@/styles/Style.module.scss';
import MenuBtn from './MenuBtn';


const Header = () => {
  return (
    <section 
      className='bg-light_bg dark:bg-dark_bg fixed top-0 z-40 w-full flex justify-center items-center shadow-light_all_sides dark:shadow-dark_all_sides h-20'
    >
      <div 
        className='max_container_width flex justify-between items-center relative'
      >
            
        <Link href="/" className='flex items-center select-none gap-3'>
          <Image src={logo} alt='logo' priority className={`w-10 md:w-12`}/>
          <span className={`${styles.text_primary} font-[500] text-2xl`}>travel trail holidays</span>
        </Link>

        <div
          className={``}
        >
          
          <MenuBtn/>
        </div>  
            
      </div>
    </section>
  )
}

export default Header