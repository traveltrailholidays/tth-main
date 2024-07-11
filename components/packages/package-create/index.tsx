'use client';

import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import React from 'react';
import { categories } from '@/data/categories';
import CategoryInput from '@/components/inputs/category-input';
import { FieldValues, useForm } from 'react-hook-form';
import LocationInput from '@/components/inputs/location-input';
import CounterInput from '@/components/inputs/counter-input';

const CreatePackage = () => {

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      title: "",
      description: "",
      imageSrc: "",
      price: 1,
      days: 1,
      night: 1,
      rating: 5,
    }
  });

  const category = watch('category');
  const location = watch('location');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  return (
    <Section className='pt-28'>
      <Container className='flex flex-col gap-10 border w-full p-7 rounded'>
        <h1 className='text-3xl'>
          Create a package
        </h1>
        <div>
          <h1 className='text-xl'>
            Select the category
          </h1>
          <div className='flex mt-2 gap-5'>
            {categories.map((item) => (
              <div
                key={item.label}
                className=''
              >
                <CategoryInput
                  onClick={(category) => setCustomValue('category', category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-xl'>
            Select the Location
          </h1>
          <div>
            {/* <LocationInput
              value={location}
              onChange={(value) => setCustomValue('location', value)}
            /> */}
            <input 
              type="text" 
              onChange={(value) => setCustomValue('location', value)}
              className='bg-custom-sbl dark:bg-custom-sbd w-full py-2 px-3 rounded'
              placeholder='Location'
              value={location}
            />
          </div>
        </div>
        <div>
          <h1 className='text-xl'>
            Select the category
          </h1>
          <CounterInput />
        </div>
      </Container>
    </Section>
  )
}

export default CreatePackage;