import { NavItem } from './types';
import Image from 'next/image';

export const MAIN_NAV_ITEMS: NavItem[] = [
    { href: '/', label: 
        <div>
            <Image src='/Logo.svg' width={225} height={30} alt="Aerounion"/>
            <p>Официальный диллер в РФ</p>
        </div>
    },
    { href: '/models', label: 'Модели' },
    { href: '/review', label: 'Обзор вертолетов' },
    { href: '/about', label: 'О компании' },
    { href: '/advantages', label: 'Преимущества' },
    { href: '/calculator', label: 'Калькулятор' },
    { href: '/services', label: 'Услуги' },
    { href: '/news', label: 'Новости' },
];