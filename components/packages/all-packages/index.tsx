
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

    if (listings.length === 0) {
        return (
            <EmptyState showReset />
        )
    }

    return (
        <Section>
            <Container className='w-full flex flex-col md:flex-row gap-6 flex-wrap justify-center'>
                {listings.map((listings: any) => {
                    return (
                        <PackageCard
                            currentUser={currentUser}
                            key={listings.id}
                            data={listings}
                        />
                    )
                })}
            </Container>
        </Section>
    )
}

export default AllPackages;