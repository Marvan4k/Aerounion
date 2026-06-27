'use client'
import { TFunction } from 'i18next';
import { NavItem } from './types';
import Image from 'next/image';
import { LanguageSwitcher } from '../components/navigation/languageSwitcher';

export const MAIN_NAV_ITEMS : NavItem[] = [
    { 
        href: '/', 
        label: 
        <div>
            <Image src='/Logo.svg' width={225} height={30} alt="Aerounion"/>
            <p>Официальный диллер в РФ</p>
        </div>,
        isJsxLabel: true,
    },
    { href: '/models', label: 'models'},
    { href: '/review', label: 'review'},
    { href: '/about', label: 'about'},
    { href: '/advantages', label: 'advantages'},
    { href: '/calculator', label: 'calculator'},
    { href: '/services', label: 'services'},
    { href: '/news', label: 'news'},
    { 
        href: '#', 
        label: <LanguageSwitcher />,
        isJsxLabel: true,
    }
];