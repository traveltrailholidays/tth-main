'use client';

import React from 'react';
import Section from '../features/Section';
import Container from '../features/Container';
import Logo from '../features/Logo';
import Link from 'next/link';

const Footer = () => {
    return (
        <Section className='border-t dark:border-t-2 dark:border-gray-800'>
            <Container className='w-full pt-6'>
                <div className='w-full flex justify-center md:justify-between'>
                    <Logo className='mb-6' />
                </div>
                <div className='py-6 border-t border-b'>
                    
                </div>
                <div className='py-6 w-full flex justify-between flex-col text-center md:flex-row items-center gap-2'>
                    <span className={``}>Copyright © 2024 <Link href={`/`} className={`hover:underline`}>Travel Trail Holidays</Link>. All Rights Reserved.</span>
                    <span className={``}>
                        <span>Designed with <span className={`text-custom-clp text-lg select-none`}>&#x2665;</span> by <Link href={`https://diwakarjha.vercel.app/`} target="_blank" className={`text-custom-clp hover:underline`}>iamdkjha</Link>.</span>
                    </span>
                </div>
            </Container>
        </Section>
    )
}

export default Footer;