import Link from 'next/link';
import React, { FC } from 'react';

interface LogoProps {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${className}`}
    >
      <span className='font-semibold text-2xl text-custom-clp'>
        Travel Trail Holidays
      </span>
    </Link>
  )
}

export default Logo;