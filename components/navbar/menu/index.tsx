'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import LargeDeviceMenu from '@/components/navbar/menu/large-device';
import { safeUser } from '@/types';
import Avatar from '@/app/components/libs/Avatar';

interface MenuProps {
  currentUser?: safeUser | null;
}

const Menu: FC<MenuProps> = ({ currentUser }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: any) => {
    setIsOpen((e) => !isOpen);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target instanceof HTMLElement && event.target.closest(".modal"))
      ) {
        setIsOpen(false);
      }
    };

    const handleBodyOverflow = () => {
      if (isOpen && !window.matchMedia("(min-width: 1024px)").matches) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    // handleBodyOverflow();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className='relative'>
      <div
        onClick={toggleMenu}
        className='border-2 p-2 rounded-full flex gap-2 items-center cursor-pointer'
      >
        <HiOutlineMenuAlt3 size={20} />
        <Avatar src={ currentUser?.image }/>
      </div>

      {isOpen && (
        <>
          <LargeDeviceMenu className='modal' currentUser={currentUser}/>
        </>
      )}
    </div>
  );
};

export default Menu;