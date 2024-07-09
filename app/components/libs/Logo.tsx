import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href="/"
    >
      <span className='font-semibold text-2xl text-custom-clp'>
        Travel Trail Holidays
      </span>
    </Link>
  )
}

export default Logo;