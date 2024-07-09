import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import React from 'react';

const Counter = () => {
  return (
    <Section className='bg-custom-sbl dark:bg-custom-sbd'>
      <Container className='my-10 w-full flex justify-around flex-wrap gap-10'>
        <div className='flex flex-col items-center gap-5 text-center'>
          <span className='text-3xl border-gray-800 dark:border-gray-400 border-2 p-5 rounded'>
            100+
          </span>
          <span className='text-xl font-semibold'>
            TRAVEL PACKAGES
          </span>
        </div>
        <div className='flex flex-col items-center gap-5 text-center'>
          <span className='text-3xl border-gray-800 dark:border-gray-400 border-2 p-5 rounded'>
            100+
          </span>
          <span className='text-xl font-semibold'>
            TOTAL TRAVELERS
          </span>
        </div>
        <div className='flex flex-col items-center gap-5 text-center'>
          <span className='text-3xl border-gray-800 dark:border-gray-400 border-2 p-5 rounded'>
            100+
          </span>
          <span className='text-xl font-semibold'>
            POSITIVE REVIEWS
          </span>
        </div>
      </Container>
    </Section>
  )
}

export default Counter;