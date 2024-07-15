
import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React from 'react'
import EmptyState from './empty-state';
import getListings, { IListingsParams } from '@/frontend/actions/getListings';
import PackageCard from '../package-card';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import { SafeListing, safeUser } from '@/frontend/types';

interface AllPackagesProps {
    listings: any;
    currentUser?: safeUser | null;
}

const AllPackages: React.FC<AllPackagesProps> = async ({listings, currentUser}) => {

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