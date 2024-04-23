'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import styles from '@/styles/Style.module.scss';

const Logo = () => {
  return (
    <Link 
        href="/" 
        className={`flex items-center select-none gap-3`}
    >
        
        <Image 
            src={logo} 
            alt='logo' 
            priority 
            className={`w-10 md:w-12`}
        />
        
        <span 
            className={`${styles.text_primary} font-[500] text-2xl`}
        >
            travel trail holidays
        </span>

    </Link>
  )
}

export default Logo;