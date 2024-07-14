import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { SafeListing, safeUser } from '@/frontend/types';
import { Reservation } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import HeartButton from '../liked-packages/like-button';
import { MdAlternateEmail, MdLocalPhone, MdWatchLater } from 'react-icons/md';
import FaqPackageAccordion from './faq-accordion';
import { RiUserLine } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import GetHelp from '@/components/get-help';

interface SinglePackageProps {
    reservations?: Reservation[];
    listing: SafeListing & {
        user: safeUser
    };
    currentUser?: safeUser | null;
}

const SinglePackage: React.FC<SinglePackageProps> = ({ reservations, listing, currentUser }) => {
    return (
        <Section>
            <Container className='w-full my-20 flex flex-col gap-8'>
                <div className='w-full h-[300px] md:h-[60vh] overflow-hidden rounded-xl relative'>
                    <Image
                        fill
                        src={listing.imageSrc}
                        alt='Package Image'
                        className='object-cover w-full'
                    />
                    <div className='absolute top-5 right-5'>
                        <HeartButton
                            listingId={listing.id}
                            currentUser={currentUser}
                        /> 
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-8'>
                    <div className='w-full flex flex-col gap-16'>
                        <h1 className='text-2xl font-semibold'>
                            {listing.title}
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <MdWatchLater size={20} className='text-custom-clp' />
                                <span className='font-medium'>
                                    {listing.nights} Nights / {listing.days} Days
                                </span>
                            </div>
                            <span className='font-semibold text-custom-clp'>
                                {listing.location}
                            </span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold'>
                                Package description
                            </h1>
                            <p>
                                {listing.description}
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 my-3'>
                            <h1 className='text-3xl font-semibold'>
                                Itinirary
                            </h1>
                            {listing.itinary.map((item, index) => (
                                <div key={index} >
                                    <span className='font-semibold text-lg'>
                                        Day {index + 1} :{" "}
                                    </span>
                                    <span className='font-medium text-lg'>
                                        {item}
                                    </span>
                                    {index < listing.itinary.length - 1 && <hr className='mt-5' />}
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>
                                Frequently Asked Questions
                            </h1>
                            <FaqPackageAccordion />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>
                                Trending Packages
                            </h1>

                        </div>
                    </div>
                    <div className='lg:max-w-[350px] w-full flex flex-col gap-8'>
                        <div className='rounded-xl shadow dark:shadow-white/25'>
                            <div className='bg-custom-clp rounded-t-xl text-white py-3 px-5 flex items-end'>
                                <span className='text-3xl font-bold'>
                                    &#8377; {listing.price} {" "}
                                </span>
                                <span className='font-medium text-lg'>
                                    / per person
                                </span>
                            </div>
                            <form className='py-5 px-5 flex flex-col gap-6'>
                                <h1 className='text-xl font-semibold ml-[2px]'>
                                    Get Quote
                                </h1>
                                <div className='relative'>
                                    <input 
                                        type="text"
                                        placeholder='Your name'
                                        className='border-2 rounded py-2 px-10 w-full' 
                                    />
                                    <RiUserLine size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 '/>
                                </div>
                                <div className='relative'>
                                    <input 
                                        type="text"
                                        placeholder='Your email address'
                                        className='border-2 rounded py-2 px-10 w-full' 
                                    />
                                    <MdAlternateEmail size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 '/>
                                </div>
                                <div className='relative'>
                                    <input 
                                        type="text"
                                        placeholder='Your Phone number'
                                        className='border-2 rounded py-2 px-10 w-full' 
                                    />
                                    <MdLocalPhone size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 '/>
                                </div>
                                <div className='relative'>
                                    <input 
                                        type="text"
                                        placeholder='Package url'
                                        className='border-2 rounded py-2 px-10 w-full' 
                                    />
                                    <IoIosLink size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 '/>
                                </div>
                                <button className='bg-custom-clp rounded py-2 font-medium text-white'>
                                    Submit
                                </button>
                            </form>
                        </div>
                        <GetHelp />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default SinglePackage;