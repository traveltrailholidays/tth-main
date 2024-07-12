'use client';

import React, { FC, useCallback } from 'react';
import { GoClockFill } from "react-icons/go";
import { FaHotel, FaTaxi } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineDinnerDining } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { Listing, Reservation } from '@prisma/client';
import { SafeListing, safeUser } from '@/types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PackageCardProps {
  data: SafeListing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: safeUser | null;
}

const PackageCard: FC<PackageCardProps> = async ({ data, reservation, onAction, disabled, actionLabel, actionId = "", currentUser }) => {

  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId)
    }, [onAction, actionId, disabled])

  return (

    <Link 
      href={`/packages/${data.id}`}
      className='border w-[400px] rounded relative shadow '>
      <img
        src={data.imageSrc}
        alt=""
        className='rounded-t select-none w-full'
      />
      {/* <div className='absolute top-3 right-3'>
              
            </div> */}
      <div className='py-5 w-full px-3 flex flex-col gap-4'>
        <span className='text-xl font-semibold'>
          {data.title}
        </span>
        <div className='flex flex-col gap-2 border-b'>
          <span className='text-custom-clp font-semibold'>
            {data.location}
          </span>
          <div className='mb-3 flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <GoClockFill />
              <span className='text-sm'>
                {data.nights} Nights / {data.days} Days
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
              {data.rating}
            </span>
          </div>
          <div className='flex gap-5'>
            <span>
              &#8377; {data.price}
            </span>
            <span>
              &#8377; {data.price}
            </span>
          </div>
        </div>
      </div>
      <div className='absolute bg-custom-clp top-2 left-2 rounded px-2 py-1 text-xs text-white font-medium'>
        10 &#37; OFF
      </div>
    </Link>

  )
}

export default PackageCard;