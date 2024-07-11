
import { IconType } from 'react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC, useCallback } from 'react';
import qs from "query-string";
import { Suspense } from 'react';

interface FilterBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const FilterBox: FC<FilterBoxProps> = ({ icon: Icon, label, selected }) => {

    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if(params?.get('category') === label ) {
            delete updatedQuery.category;
        }

        const url = qs.stringify({
            url: '/',
            query: updatedQuery
        }, { skipNull: true});

        router.push(url);
    }, [label, params, router]);

    return (
        <Suspense>
            <div
            onClick={handleClick}
            className='border-2 p-5 rounded flex flex-col gap-3 w-fit items-center hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'
        >
            <Icon size={28}/>
            <span>{label}</span>
        </div>
        </Suspense>
    )
}

export default FilterBox;