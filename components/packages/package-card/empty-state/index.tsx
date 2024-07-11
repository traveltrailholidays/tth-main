'use client';

import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({ title = "No exact Match", subtitle = "Try different category", showReset }) => {

    const router = useRouter();

  return (
    <div 
        className='h-[60vh] flex flex-col gap-2 justify-center items-center'
    >
        <h1>
            {title}
        </h1>
        <h1>
            {subtitle}
        </h1>
        <div className='w-48 mt-4'>
            {showReset && (
                <button
                    onClick={()=>router.push('/')}
                >
                    Remove all filters
                </button>
            )}
        </div>
    </div>
  )
}

export default EmptyState;