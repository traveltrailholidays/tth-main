'use client';

import React, { FC, useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from "next/image";
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
    var cloudinary: any;
};

interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
};

const ImageUpload: FC<ImageUploadProps> = ({ onChange, value }) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url);
    }, [onChange]);

    console.log(value);
    

  return (
    <CldUploadWidget 
        onUploadAdded={handleUpload}
        uploadPreset="heg7xmqf"
        options={{
            maxFiles: 1
        }}
    >
        {({ open }) => {
            return (
                <div
                    onClick={() => open?.()}
                    className='relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600'
                >
                    <TbPhotoPlus size={50}/>
                    {value && (
                        <div className='absolute inset-0 w-full h-full '>
                            <Image 
                                alt='Upload'
                                fill
                                style={{ objectFit: 'cover' }}
                                src={value}
                            />
                        </div>
                    )}
                </div>
            )
        }}
    </CldUploadWidget>   
  )
}

export default ImageUpload;