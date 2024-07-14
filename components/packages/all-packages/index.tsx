
import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React from 'react'
import EmptyState from './empty-state';
import getListings from '@/frontend/actions/getListings';
import PackageCard from '../package-card';
import getCurrentUser from '@/frontend/actions/getCurrentUser';

const AllPackages = async () => {

    const listings = await getListings();
    const currentUser = await getCurrentUser();

    if(listings.length === 0) {
        return (
            <EmptyState showReset/>
        )
    }

  return (
    <Section>
        <Container className='mt-40'>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
            >
                {listings.map((listings: any) => {
                    return (
                        <PackageCard
                            currentUser={currentUser}
                            key={listings.id}
                            data={listings}
                        />
                    )
                })}
            </div>
        </Container>
    </Section>
  )
}

export default AllPackages;