'use client';

import { ThemeToggle } from '@/components/ui/theme/ThemeToggler';
import { UserRegular, DarkModeSolid, HelpSolid } from '@/assets/svgs/uiSvg';

import { MenuSolid, UserSolid } from '@/assets/svgs/uiSvg';
import { useCallback, useState } from 'react';
import MenuItem from '@/components/navbar/MenuItem';
import useAccountModal from '@/hooks/useAccountModal';
import { signOut } from 'next-auth/react';

import { SafeUser } from '@/types';
import Avatar from './Avatar';

interface MenuBtnProps {
    currentUser?: SafeUser | null;
}

const MenuBtn: React.FC<MenuBtnProps> = ({
    currentUser
}) => {

    const accountModal = useAccountModal();

    const [isMenuVisible, setIsMenuVisible] = useState(false);
  
    const toggleMenu = useCallback(() => {
      setIsMenuVisible((value) => !value);
    }, []);
    
    const handleAccount = () => {
        toggleMenu();
        accountModal.onOpen();
    }

  return (
    <>
        <div 
            className={`${isMenuVisible ? "lg:shadow-lg" : ""} border-[0.125rem]  rounded-full cursor-pointer p-1 lg:flex items-center gap-3 lg:p-2 lg:hover:shadow-lg border-gray-600 lg:border-gray-300 dark:border-gray-600`} 
            
            onClick={toggleMenu}
        >
              
            <MenuSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
              
            <div className='hidden lg:flex'>
                <Avatar src={currentUser?.image}/>
            </div>
        
        </div>

        {isMenuVisible && (
            <div
                className={`flex absolute lg:top-[3.5rem] left-0 lg:left-auto lg:right-20 lg:rounded-xl bg-light_bg dark:bg-dark_bg shadow-light_all_sides dark:shadow-dark_all_sides lg:py-3 w-full lg:max-w-[200px] text-white lg:text-black lg:dark:text-white backdrop-blur-lg z-50 h-screen lg:h-auto top-0`}
            >   
            
                <div 
                    className='w-full flex flex-col items-center gap-3 justify-center p-5 lg:p-0'
                >
                    
                    {currentUser ? (

                        <>

                            <div                     
                                onClick={() => {}}
                                className='px-3 w-[90%] shadow-light_all_sides dark:shadow-dark_all_sides rounded-xl py-3 flex items-center justify-between hover:cursor-pointer'
                            >
                                <div
                                    className='flex items-center gap-2'
                                >
                                    <Avatar src={currentUser?.image}/>
                                    <span className='text-sm lg:text-base font-[500]'>{currentUser.name}</span>
                                </div>
                            </div>

                            <div 
                                className={`w-full flex flex-col items-center gap-3 justify-center lg:hidden`}
                            >                   
                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Home" href="/" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Packages" href="/packages" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="About" href="/about" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Contact" href="/contact" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Payments" href="/payments" />
                            </div>

                            <div 
                                className='w-full px-4 py-2 flex items-center justify-between hover:cursor-pointer'
                            >
                                <div 
                                    className='flex items-center gap-2'
                                >
                                    <DarkModeSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
                                    <span className='text-sm lg:text-base font-[500]'>Theme</span>
                                </div>

                                <ThemeToggle/>

                            </div>

                            <div 
                                className={`w-full flex flex-col items-center gap-3 justify-center`}
                            >
                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Help Center" href="/help-center" />
                            </div>

                            <div
                                onClick={() => signOut()}
                                className='w-full px-4 py-2 flex items-center justify-between hover:cursor-pointer'
                            >
                                <div 
                                    className='flex items-center gap-2'
                                >
                                    <DarkModeSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
                                    <span className='text-sm lg:text-base font-[500]'>Logout</span>
                                </div>

                            </div>
                        
                        </>

                    ) : (

                        <>

                            <div                     
                                onClick={handleAccount}
                                className='px-3 w-[90%] shadow-light_all_sides dark:shadow-dark_all_sides rounded-xl py-3 flex items-center justify-between hover:cursor-pointer'
                            >
                                <div
                                    className='flex items-center gap-2'
                                >
                                    <Avatar src={null}/>
                                    <span className='text-sm lg:text-base font-[500]'>Account</span>
                                </div>
                            </div>

                            <div 
                                className={`w-full flex flex-col items-center gap-3 justify-center lg:hidden`}
                            >                   
                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Home" href="/" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Packages" href="/packages" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="About" href="/about" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Contact" href="/contact" />

                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Payments" href="/payments" />
                            </div>

                            <div 
                                className='w-full px-4 py-2 flex items-center justify-between hover:cursor-pointer'
                            >
                                <div 
                                    className='flex items-center gap-2'
                                >
                                    <DarkModeSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor"/>
                                    <span className='text-sm lg:text-base font-[500]'>Theme</span>
                                </div>

                                <ThemeToggle/>

                            </div>

                            <div 
                                className={`w-full flex flex-col items-center gap-3 justify-center`}
                            >
                                <MenuItem onClickFunctions={[toggleMenu]} icon={<HelpSolid height="1.7rem" width="1.7rem" fillColor="#4b5563" strokeWidth="0" strokeColor="currentColor" />} label="Help Center" href="/help-center" />
                            </div>

                        </>

                    )}

                </div>
            </div>
        )}

    </>
  )
}

export default MenuBtn;