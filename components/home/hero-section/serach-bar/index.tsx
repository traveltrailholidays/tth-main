'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React from 'react';
import { IoSearch  } from "react-icons/io5";

const SearchBar = () => {
  return (
    <Section className='absolute bottom-0 translate-y-1/2 w-full left-0'>
      <Container className='bg-background rounded-3xl w-[95%] shadow-all-side dark:shadow-gray-500/5 flex items-center'>
        <form 
          className='w-full px-7 py-5 border-r rounded-l-3xl'>
          Select destination
        </form>
        <div className='w-full px-7 py-5 border-r'>
          Select duration
        </div>
        <div className='w-full px-7 py-5'>
          Select Month
        </div>
        <div className='bg-custom-clp h-full w-fit px-7 flex justify-center items-center rounded-r-3xl text-white font-semibold gap-3'>
          <IoSearch />
          Search
        </div>
      </Container>
    </Section>
  )
}

export default SearchBar;