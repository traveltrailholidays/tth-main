'use client';

import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import FilterBox from './filter-box';
import { LuHeartHandshake } from "react-icons/lu";

const FilterPackage = () => {

  

  return (
    <Section className='bg-custom-sbl dark:bg-custom-sbd'>
      <Container className='py-20 w-full flex flex-col gap-10'>
        <div>
          <h1 className='text-sm text-custom-clp font-semibold'>
            Still Undecided?
          </h1>
          <h1 className='text-xl text-gray-800 dark:text-gray-50 font-semibold'>
            Browse packages through holiday THEMES
          </h1>
        </div>
        <div className='flex gap-10 justify-around mt-5'>
          <FilterBox label='Romantic' icon={LuHeartHandshake}/>
        </div>
      </Container>
    </Section>
  )
}

export default FilterPackage;