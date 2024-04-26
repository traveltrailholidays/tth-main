'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Style.module.scss';

const Logo = () => {
  return (
    <Link 
        href="/" 
        className={`flex items-center select-none gap-3`}
    >
        
        <Image 
            src="/images/logo.png" 
            alt='logo' 
            priority
            width="100"
            height="100"
            className={`w-10 lg:w-12`}
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