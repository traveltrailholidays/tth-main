'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import getListings from '@/frontend/actions/getListings';
import React from 'react'

const PackageCard = async () => {

    const listings = await getListings();

  return (
    <Section>
        <Container>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
            >
                 
            </div>
        </Container>
    </Section>
  )
}

export default PackageCard;