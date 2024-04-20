'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import styles from '@/styles/Style.module.scss';
import MenuBtn from './MenuBtn';
import Navlink from "@/components/feature/Navlink";


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
          className={`flex items-center gap-10`}
        >
          <div className={`gap-5 items-center hidden md:flex font-[500]`}>
            <Navlink href="/" exact  className={``}>
              <span>Home</span>
            </Navlink>
            <Navlink href="/about" exact  className={``}>
              <span>About</span>
            </Navlink>
            <Navlink href="/contact" exact  className={``}>
              <span>Contact</span>
            </Navlink>
            <Navlink href="/payments" exact  className={``}>
              <span>Payments</span>
            </Navlink>
          </div>
          <MenuBtn/>
        </div>  
            
      </div>
    </section>
  )
}

export default Header