import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import React from 'react'

const CustomizePackage = () => {
  return (
    <Section className='bg-background'>
        <Container className='my-20 w-full flex flex-col gap-16'>
            <div>
              <h1 className='heading w-full font-semibold text-gray-900 dark:text-gray-50'>
                Customize package
              </h1>
              <h2 className='ml-[2px] mt-[2px] text-gray-800 dark:text-gray-50'>
                Design Your Ideal Escape: Tailored Travel Adventures Just for You
              </h2>
            </div>
            <div className='border p-5 rounded shadow-all-side'>
              hii
            </div>
        </Container>
    </Section>
  )
}

export default CustomizePackage;