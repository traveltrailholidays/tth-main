'use client';

import { safeUser } from '@/frontend/types';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
    lisitngId: string;
    currentUser?: safeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({ lisitngId, currentUser }) => {

    const hasFavourited = false;
    const toggleFavourite = () => {};

  return (
    <div
        onClick={toggleFavourite}
        className='relative hover:opacity-80 transition cursor-pointer'
    >
        <AiOutlineHeart 
            size={28}
            className='fill-white absolute -top-[2px] -right-[2px]'
        />
        <AiFillHeart 
            size={24}
            className={ hasFavourited ? 'fill-custom-clp' : 'fill-neutral-500/70'}
        />
    </div>
  )
}

export default HeartButton;