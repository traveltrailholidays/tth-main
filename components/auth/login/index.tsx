'use client';

import Container from '@/app/components/libs/Container';
import Logo from '@/app/components/libs/Logo';
import Section from '@/app/components/libs/Section';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState, useCallback } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import Input from '@/app/components/libs/Input';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginAuth = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);

            if(callback?.ok) {
                toast.success('Logged in');
                router.refresh();
            }
            if(callback?.error) {
                toast.error(callback.error);
            }
        })
    }

    return (
        <Section>
            <Container className='w-full relative flex flex-col text-center items-center gap-3'>
                <Link
                    href="/"
                    className='absolute left-0 top-2 cursor-pointer hover:scale-125 transition text-custom-clp'
                >
                    <FaArrowLeftLong size={20} />
                </Link>
                <Logo className='mt-20 md:mt-0' />
                <h1 className='heading mt-2 font-medium text-gray-800 dark:text-gray-50'>
                    Login to Travel Trail Holidays account
                </h1>
                <div className='max-w-[400px] flex flex-col gap-5'>
                    <h1 className='text-gray-800 dark:text-gray-50'>
                        Unlock a world of travel with one account across Travel Trail Holidays
                    </h1>
                    <Input
                        id="email"
                        label="Email"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className='bg-custom-clp text-white'
                    >
                        Login
                    </button>
                    <div className='flex flex-col gap-4 mt-3'>
                        <hr />
                        <button className='flex items-center justify-center gap-3 border-2 py-3 rounded'>
                            <FcGoogle />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default LoginAuth;