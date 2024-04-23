'use client'

import React from 'react'
import { SearchSolid, HomeRegular, HeartRegular } from '@/assets/svgs/uiSvg';
import styles from '@/styles/Style.module.scss';

const FooterBar = () => {
  return (
    <section className={`${styles.footer_bar} shadow-light_all_sides dark:shadow-dark_all_sides bg-light_bg dark:bg-dark_bg`}>
        <div className={`${styles.footer_bar_container}`}>
            <div className='flex flex-col items-center gap-1'>
                <HomeRegular height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
                <span className='text-[0.7rem] text-[#6b7280]'>Home</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <SearchSolid height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
                <span className='text-[0.7rem] text-[#6b7280]'>Search</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <HeartRegular height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
                <span className='text-[0.7rem] text-[#6b7280]'>Favourites</span>
            </div>
        </div>
    </section>
  )
}

export default FooterBar