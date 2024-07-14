'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React from 'react';

const ExplorePackages = () => {
  return (
    <Section className='bg-background'>
      <Container className='my-20 w-full flex flex-col gap-16'>
        <div>
          <h1 className='heading w-full font-semibold text-gray-900 dark:text-gray-50'>
            Explore packages
          </h1>
          <h2 className='ml-[2px] mt-[2px] text-gray-800 dark:text-gray-50'>
            Highlighting well-known travel spots and their package options
          </h2>
        </div>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
        >
          
        </div>
      </Container>
    </Section>
  )
}

export default ExplorePackages;