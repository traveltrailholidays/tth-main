'use client';

import React, { FC, ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
        className={`${className} max-w-[1280px]`}
    >
        {children}
    </div>
  )
}

export default Container;