'use client';

import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import React from 'react';

import { GiSelfLove } from "react-icons/gi";
import CategoryBox from '@/components/packages/package-category/category-box/index';
import { usePathname, useSearchParams } from 'next/navigation';

import { categories } from '@/data/categories';

const PackageCategories = () => {

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage) {
        return null;
    }

  return (
    <Section className='bg-custom-sbl dark:bg-custom-sbd'>
        <Container className='w-full flex flex-col gap-10'>
            <div>
                <h1 className='text-custom-clp text-sm font-semibold'>
                    Still undecided?
                </h1>
                <h1 className='font-semibold'>
                    Browse packages through holiday THEMES
                </h1>
            </div>
            <div className='flex justify-around'>
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                        className='border py-4 px-10 rounded cursor-pointer'
                    />
                ))}
            </div>
        </Container>
    </Section>
  )
}

export default PackageCategories;