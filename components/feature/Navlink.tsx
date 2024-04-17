'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
    href: string;
    exact?: boolean;
    children: ReactNode;
    className?: string;
}

const Navlink = ({ href, exact = false, children, className = '', ...props }: NavLinkProps) => {
    const pathname = usePathname();

    // Determine if the link is active
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    // Use template literals for clarity and safety
    className += `${isActive ? 'text-[#FF5956]' : 'text-gray-800 dark:text-gray-400 hover:text-[#FF5956] dark:hover:text-[#FF5956]'}`;

    return (
        <Link href={href} className={className}>
            <div {...props}>
                {children}
            </div>
        </Link>
    );
}

export default Navlink;