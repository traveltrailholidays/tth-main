import React from 'react';
import { GoClockFill } from "react-icons/go";
import { FaHotel, FaTaxi } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineDinnerDining } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import EmptyState from './empty-state';
import getListings from '@/actions/getListings';

const PackageCard = async () => {

  const listings = await getListings();

  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    )
  }

  return (
    <>

      {listings.map((listing: any) => {
        return (
          <div className='border w-[400px] rounded relative shadow '>
            <img
              src={listing.imageSrc}
              alt=""
              className='rounded-t select-none w-full'
            />
            <div className='py-5 w-full px-3 flex flex-col gap-4'>
              <span className='text-xl font-semibold'>
                {listing.title}
              </span>
              <div className='flex flex-col gap-2 border-b'>
                <span className='text-custom-clp font-semibold'>
                  {listing.location}
                </span>
                <div className='mb-3 flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <GoClockFill />
                    <span className='text-sm'>
                      {listing.nights} Nights / {listing.days} Days
                    </span>
                  </div>
                  <div className='flex gap-2'>
                    <FaHotel />
                    <FaTaxi />
                    <SiGooglemaps />
                    <MdOutlineDinnerDining />
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-2 '>
                  <IoStar size={15} className='mt-[1px]' />
                  <span className='text-sm'>
                    {listing.rating}
                  </span>
                </div>
                <div className='flex gap-5'>
                  <span>
                    &#8377; {listing.price}
                  </span>
                  <span>
                    &#8377; {listing.price}
                  </span>
                </div>
              </div>
            </div>
            <div className='absolute bg-custom-clp top-2 left-2 rounded px-2 py-1 text-xs text-white font-medium'>
              10 &#37; OFF
            </div>
          </div>
        )
      })}


    </>
  )
}

export default PackageCard;