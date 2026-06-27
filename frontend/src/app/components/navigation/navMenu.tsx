'use client'
import { NavItem } from "@/app/constants/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface navProps {
    items : NavItem[];
    parentClassName?: string;
    stantdrChildtClassName?: string;
    activeChildClassName?: string;
    translationNamespace?: string;
}

export default function NavMenu(
    {
        items, parentClassName = '',
        stantdrChildtClassName = 'text-whithe',
        activeChildClassName = 'text-white-600 font-bold',
        translationNamespace
    } : navProps){
    const pathname = usePathname();
    const {t} = useTranslation(translationNamespace);
    
    const renderedItems = useMemo(() => {
        return items.map((item, index) => {
            const isActive = item.href === pathname;
            const isExternalLink = item.href?.startsWith('tel:') || item.href?.startsWith('mailto:') || item.href?.startsWith('http');
            const linkKey = item.href + index;
            
            if(isExternalLink) {
                return (
                    <a 
                        key={linkKey}
                        href={item.href}
                        className={`
                            ${stantdrChildtClassName}
                        `}
                    >
                        {item.label}
                    </a>
                )
            }
            
            if(item.isJsxLabel){
                return (
                    <Link 
                        key={linkKey}
                        href={item.href}
                        className='flex'
                    >
                        {item.label}
                    </Link>
                )
            }
            return (
                <Link 
                    key={linkKey}
                    href={item.href}
                    className={`
                        ${isActive ? activeChildClassName : stantdrChildtClassName}
                    `}
                >
                    {t(item.label as string)}
                </Link>
            )
        });
    }, [items, pathname, t, activeChildClassName, stantdrChildtClassName]);
    
    return (
        <nav className={`${parentClassName}`}>
            {renderedItems}
        </nav>
    )
}

    