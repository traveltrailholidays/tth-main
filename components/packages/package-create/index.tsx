'use client';

import Container from '@/app/components/libs/Container';
import Section from '@/app/components/libs/Section';
import React, { useEffect, useState } from 'react';
import { categories } from '@/data/categories';
import CategoryInput from '@/components/inputs/category-input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import LocationInput from '@/components/inputs/location-input';
import CounterInput from '@/components/inputs/counter-input';
import ImageUpload from '@/components/inputs/images-input';
import Input from '@/app/components/libs/Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CreatePackage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
      location: "",
      title: "",
      description: "",
      imageSrc: "",
      price: 1,
      days: 1,
      nights: 0,
      rating: 5,
    }
  });

  const category = watch('category');
  const days = watch('days');
  const nights = watch('nights');

  useEffect(() => {
    setValue('nights', days - 1);
  }, [days, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/packages', data)
      .then(() => {
        toast.success('Package created');
        router.refresh();
        reset();
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

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
          <div className='flex mt-2 gap-5 flex-wrap'>
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
          <Input
            id='  location'
            label='Location'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {/* <LocationInput
              value={location}
              onChange={(value) => setCustomValue('location', value)}
            /> */}
        </div>
        <CounterInput
          title='Days'
          subtitle='Tell the number of days'
          value={days}
          onChange={(value) => setCustomValue('days', value)}
        />
        <CounterInput
          title='Nights'
          subtitle='Tell the number of nights'
          value={watch('nights')}
          onChange={(value) => setCustomValue('nights', value)}
        />

        {/* <ImageUpload 
            value={imageSrc}
            onChange={(value) => setCustomValue('imageSrc', value)}
          /> */}

        <Input
          id='imageSrc'
          label='Upload Image Link'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id='title'
          label='Title'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id='description'
          label='Description'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id='rating'
          label='Place Rating'
          type='number'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id='price'
          label='Price'
          formatPrice
          type='number'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <button
          onClick={handleSubmit(onSubmit)}
          className='bg-custom-clp p-5 text-white'
        >
          Create Package
        </button>
      </Container>
    </Section>
  )
}

export default CreatePackage;