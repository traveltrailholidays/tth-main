import ThemeSwitcher from '@/app/components/theme/themeSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { signOut } from 'next-auth/react';
import { safeUser } from '@/types';
import Avatar from '@/app/components/libs/Avatar';

interface LargeDeviceMenuProps {
  className: string;
  currentUser?: safeUser | null;
}

const LargeDeviceMenu: FC<LargeDeviceMenuProps> = ({ className, currentUser }) => {
  return (
    <div className={`${className} absolute right-0 bg-background rounded-xl py-1 w-[250px] shadow-all-side dark:shadow-white/5 top-[52px] hidden md:flex flex-col`}>
      {currentUser ? (
        <>
          <Link
            href={'/create-package'}
            className='hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer font-semibold flex gap-3 items-center px-3 h-16 justify-between border-b'
          >
            <div className='flex gap-3 items-center'>
              <div
                className={`rounded-full w-9 h-9 items-center justify-center flex bg-gray-300 dark:bg-gray-700`}
              >
                <MdDarkMode size={24} />
              </div>
              Create Package
            </div>
          </Link>
          <div className='font-semibold flex gap-3 items-center px-3 h-16 justify-between border-b'>
            <div className='flex gap-3 items-center'>
              <div
                className={`rounded-full w-9 h-9 items-center justify-center flex bg-gray-300 dark:bg-gray-700`}
              >
                <MdDarkMode size={24} />
              </div>
              Dark Mode
            </div>
            <ThemeSwitcher />
          </div>
          <div
            onClick={() => signOut()} 
            className=' hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer font-semibold flex gap-3 items-center px-3 h-16'
          >
            <Avatar src={ currentUser?.image }/>
            Logout
          </div>
        </>
      ) : (
        <>
          <Link
            href="/signin"
            className=' hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer font-semibold flex gap-3 items-center px-3 border-b h-16'
          >
            <Image
              src={`/avatar.png`}
              alt='profile'
              width={36}
              height={36}
              className='rounded-full hidden md:block'
            />
            Account
          </Link>
          <div className='font-semibold flex gap-3 items-center px-3 h-16 justify-between'>
            <div className='flex gap-3 items-center'>
              <div
                className={`rounded-full w-9 h-9 items-center justify-center flex bg-gray-300 dark:bg-gray-700`}
              >
                <MdDarkMode size={24} />
              </div>
              Dark Mode
            </div>
            <ThemeSwitcher />
          </div>
        </>
      )}

    </div>
  )
}

export default LargeDeviceMenu;