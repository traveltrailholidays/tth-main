import Image from 'next/image';
import React, { FC } from 'react'

interface AvatarProps {
    src: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
    return (
        <Image
            src={src || `/avatar.png`}
            alt='profile'
            width={28}
            height={28}
            className='rounded-full hidden md:block'
        />
    )
}

export default Avatar;