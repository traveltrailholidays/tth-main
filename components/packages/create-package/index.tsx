'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { categories } from '@/frontend/data/categories';
import CategoryInput from '@/components/features/Inputs/CategoryInput';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CreatePackage = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
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
            discount: 0,
            itinary: Array(1).fill("") // Start with one empty string for the itinary
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
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
    };

    const handleDaysChange = (e: any) => {
        const numDays = parseInt(e.target.value) || 1; // Ensure we have at least 1 day
        const numNights = numDays - 1; // Calculate nights as one less than days

        const currentitinary = watch("itinary");
        const newitinary = Array(numDays).fill("").map((_, index) => currentitinary[index] || "");

        setValue("days", numDays); // Update days value
        setValue("nights", numNights); // Update nights value
        setValue("itinary", newitinary); // Update itinary array
    };

    const category = watch('category');
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    return (
        <Section className=''>
            <Container className='mt-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10'>
                <h1 className='text-3xl font-semibold'>
                    Create a package
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-8'
                >
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
                    <div className='flex flex-col gap-3'>
                        <input
                            {...register("title", { required: true })}
                            placeholder='Title'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                        {errors.title && <span>Title is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder='Description'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded min-h-20'
                        />
                        {errors.description && <span>Description is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            {...register("location", { required: true })}
                            placeholder='Location'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                        {errors.location && <span>Location is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            {...register("imageSrc", { required: true })}
                            placeholder='Enter Image Url'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                        {errors.imageSrc && <span>Image is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            type="number"
                            {...register("price", { valueAsNumber: true })}
                            placeholder='Price'
                            required
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            type="number"
                            {...register("days", { valueAsNumber: true })} onChange={handleDaysChange}
                            placeholder='Days'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            type="number"
                            {...register("nights", { valueAsNumber: true })}
                            value={watch("nights")}
                            readOnly
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            type="number"
                            step="0.1"
                            {...register("rating", { valueAsNumber: true })}
                            placeholder='Rating'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            type="number"
                            {...register("discount", { valueAsNumber: true })}
                            placeholder='Discount'
                            className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded '
                        />
                    </div>
                    <ul className='flex flex-col gap-8'>
                        {watch("itinary", []).map((item: any, index: any) => (
                            <li key={index}>
                                <input
                                    {...register(`itinary.${index}`, { required: true })}
                                    defaultValue={item}
                                    placeholder={`Day ${index + 1}`}
                                    className='border-gray-600 dark:border-gray-300 border px-2 py-3 rounded w-full'
                                />
                                {errors.itinary && <span>Day {index + 1} is required</span>}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </Container>
        </Section>
    )
}

export default CreatePackage;
