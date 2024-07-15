'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import Image from 'next/image';
import React from 'react'

const PackagesHeroSection = () => {
    return (
        <>
            <div className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-xl relative'>
                <Image
                    fill
                    src="/packageHeroBg.jpg"
                    alt='Package Image'
                    className='object-cover w-full'
                />
            </div>
            <Section>
                <Container className='w-full relative'>
                    <div className='absolute -top-[67px] bg-custom-sbl dark:bg-custom-sbd shadow dark:shadow-white/25 py-4 px-6 rounded-t-xl'>
                        <span className='font-semibold'>
                            Search for your desired tour package
                        </span>
                    </div>
                    <div className='absolute -top-3 bg-background shadow dark:shadow-white/25 py-4 px-6 rounded-b-xl w-full'>
                        hii
                    </div>
                    <h1 className='heading mt-20 font-semibold'>
                        All Packages
                    </h1>
                </Container>
            </Section>
        </>
    )
}

export default PackagesHeroSection;