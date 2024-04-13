'use client'

import { ThemeToggle } from '../theme/ThemeToggler';
import { UserRegular, DarkModeSolid, HelpSolid } from '@/assets/svgs/uiSvg';

import { MenuSolid, UserSolid } from '@/assets/svgs/uiSvg';
import { useState } from 'react';
import styles from '@/styles/Style.module.scss';

const MenuBtn = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
    };
  
  return (
    <>
        <div 
            className={`${isMenuVisible ? "md:shadow-md" : ""} border-[0.125rem] border-gray-600 rounded-full hover:cursor-pointer p-1 md:flex items-center gap-3 md:p-2 md:hover:shadow-md md:border-[0.05] md:dark:border-[0.15rem] md:border-gray-300 md:dark:border-gray-600`} 
            
            onClick={toggleMenu}
        >
              
            <MenuSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
              
            <div className='hidden md:flex'>
                <UserSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
            </div>
        
        </div>

        <div 
            className={`${isMenuVisible ? styles.menu_visible : styles.menu_hidden} flex absolute top-[3.7rem] md:top-[3.8rem] right-0 rounded-xl bg-light_bg dark:bg-dark_bg shadow-light_all_sides dark:shadow-dark_all_sides py-3 w-full max-w-[200px]`}
        >
            
            <div 
                className='w-full flex flex-col items-center gap-3 justify-center'
            >
                
                <div 
                    className='px-3 w-[90%] bg-light_bg dark:bg-dark_bg shadow-light_all_sides dark:shadow-dark_all_sides rounded-xl py-2 flex items-center justify-between hover:cursor-pointer'
                >
                    <div 
                        className='flex items-center gap-2'
                    >
                        <UserRegular height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
                        <span className='text-sm md:text-base font-[500]'>Account</span>
                    </div>
                </div>

                <div 
                    className='w-[90%] bg-light_bg dark:bg-dark_bg py-2 flex items-center justify-between hover:cursor-pointer'
                >
                    <div 
                        className='flex items-center gap-2'
                    >
                        <DarkModeSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
                        <span className='text-sm md:text-base font-[500]'>Theme</span>
                    </div>
                    
                    <ThemeToggle/>

                </div>

                <div 
                    className='w-[90%] bg-light_bg dark:bg-dark_bg py-2 flex items-center justify-between hover:cursor-pointer'
                >
                    <div 
                        className='flex items-center gap-2'
                    >
                        <HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
                        <span className='text-sm md:text-base font-[500]'>Help Centre</span>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default MenuBtn