'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import qs from 'query-string';
import SelectMonthSearch from './select-month';

const SearchBar = () => {

  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  const router = useRouter();
  const params = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDuration(e.target.value);
  };

  const handleMonthSelect = (selectedMonth: string) => {
    setSelectedMonth(selectedMonth);
  };

  const onSubmit = useCallback(async () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());

      const updatedQuery = {
        ...currentQuery,
        ...(selectedLocation && { dest: selectedLocation }),
        ...(selectedDuration && { duration: selectedDuration }),
        ...(selectedMonth && { month: selectedMonth }),
      };

      const url = qs.stringifyUrl({
        url: "/packages",
        query: updatedQuery
      }, { skipNull: true });

      router.push(url);
    }
  }, [selectedLocation, selectedDuration, selectedMonth, params, router]);

  return (
      <Section className='absolute bottom-0 translate-y-1/2 w-full left-0'>
        <Container className='bg-background rounded-3xl w-[95%] shadow-all-side dark:shadow-gray-500/5 flex items-center'>
          <input
            value={selectedLocation}
            onChange={handleInputChange}
            type="text"
            placeholder='Select destination'
            className='w-full px-7 py-5 border-r rounded-l-3xl hover:bg-custom-sbl dark:hover:bg-custom-sbd hover:rounded-3xl cursor-pointer'
          />
          <select
            name=""
            id=""
            value={selectedDuration}
            onChange={handleDurationChange}
            className='w-full px-7 py-5 hover:bg-custom-sbl dark:hover:bg-custom-sbd cursor-pointer'
          >
            <option value="">Select duration</option>
            <option value="1 to 3 days">1 to 3 days</option>
            <option value="4 to 6 days">4 to 6 days</option>
            <option value="7 to 9 days">7 to 9 days</option>
            <option value="10 to 12 days">10 to 12 days</option>
            <option value="13 days or more">13 days or more</option>
          </select>
          <SelectMonthSearch
            onSelect={handleMonthSelect}
            className='w-full px-7 py-5 border-l hover:bg-custom-sbl dark:hover:bg-custom-sbd hover:rounded-l-3xl cursor-pointer'
          />
          <button
            onClick={onSubmit}
            className='bg-custom-clp h-full w-fit px-7 flex justify-center items-center rounded-r-3xl text-white font-semibold gap-3'
          >
            <IoSearch />
            Search
          </button>
        </Container>
      </Section>
  )
}

export default SearchBar;