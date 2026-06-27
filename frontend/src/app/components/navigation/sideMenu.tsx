'use client';

import { useState, useEffect, useRef } from "react";
import NavMenu from "./navMenu";
import { SIDE_NAV_CONTACT_LINK, SIDE_NAV_MENU } from "@/app/constants/navigation";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '200', 
  subsets: ['latin'],
  style: 'normal',
})

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <aside 
            ref={menuRef}
            className={`
                fixed  top-0 h-full w-155 text-white transition-all 
                duration-500 z-2 bg-linear-to-r from-[#1F1F1F] to-[#121212] scrollbar-none
                ${isOpen ? 'left-0 overflow-y-auto ' : '-left-130 overflow-none'}
            `}>
        <button 
            onClick={handleClick}
            className={`
                absolute top-10 w-11 h-8 cursor-pointer transition-all duration-    300 
                ${isOpen ? 'right-13' : 'right-1 -translate-x-1/2'}`
            }    
        >
            <span
                className={`
                  inline-block w-11 h-0.5 bg-white transition-all duration-300 relative
                    ${isOpen ? 'rotate-45 bg-white' : ''}
                    before:content-[""] before:block before:w-11 before:h-0.5 before:bg-white before:transition-all before:duration-300 before:absolute before:left-0
                    after:content-[""] after:block after:w-11 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:absolute after:left-0
                    ${isOpen 
                        ? 'before:rotate-90 before:top-0 before:bg-white after:rotate-90 after:top-0 after:bg-white' 
                        : 'before:-top-3 after:top-3'
                    }
                `}
            ></span>
        </button>
        <NavMenu 
            items={SIDE_NAV_MENU}
            parentClassName="w-max flex flex-col m-[40px]"
            stantdrChildtClassName="w-max uppercase mt-8 text-xl hover:opacity-50"
            activeChildClassName="w-max uppercase mt-8 text-xl hover:opacity-50"
            translationNamespace="sideNavMenu"
        />
        <NavMenu 
            items={SIDE_NAV_CONTACT_LINK}
            parentClassName={`
                flex flex-col w-full p-[40px] gap-3 tracking-[10%] opacity-50
                ${montserrat.className}
                ${isOpen ? 'border-t border-[#C4C4C3]' : 'border-none'}
                `}
            stantdrChildtClassName="w-max text-xl font-light hover:opacity-50"
            activeChildClassName="w-max text-xl font-light hover:opacity-50"
            translationNamespace="sideNavMenu"
        />
        </aside>
    );
}