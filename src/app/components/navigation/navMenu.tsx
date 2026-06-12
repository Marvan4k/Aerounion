'use client'
import { isValidElement } from 'react';
import { NavItem } from "@/app/constants/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface navProps {
    items : NavItem[];
    className?: string;
    activeClassName?: string;
}

export default function NavMenu({items, className = '', activeClassName = 'text-white-600 font-bold'} : navProps){
    const pathname = usePathname();

    return (
        <nav className={`flex gap-6 items-center  ${className}`}>
            {items.map((item) => {
                const isActive = item.href === pathname;

                if(isValidElement(item.label)){
                    return (
                        <Link 
                            key={item.href}
                            href={item.href}
                            className='flex'
                        >
                            {item.label}
                        </Link>
                    )
                }
                return (
                    <Link 
                        key={item.href}
                        href={item.href}
                        className={`
                            ${isActive ? activeClassName : 'text-white opacity-50 hover:opacity-100'}
                        `}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    )
}

    