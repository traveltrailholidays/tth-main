import getCurrentUser from '@/actions/getCurrentUser';
import getListings from '@/actions/getListings';
import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import PackageCard from '@/components/packages/package-card';
import EmptyState from '@/components/packages/package-card/empty-state';
import React from 'react';

const ExplorePackages = async () => {

  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    )
  }

  return (
    <Section className='bg-background'>
      <Container className='my-20 w-full flex flex-col gap-16'>
        <div>
          <h1 className='heading w-full font-semibold text-gray-900 dark:text-gray-50'>
            Explore packages
          </h1>
          <h2 className='ml-[2px] mt-[2px] text-gray-800 dark:text-gray-50'>
            Highlighting well-known travel spots and their package options
          </h2>
        </div>
        <div className='flex justify-around flex-wrap gap-5'>
          {listings.map((listing: any) => {
            return (
              <PackageCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default ExplorePackages;