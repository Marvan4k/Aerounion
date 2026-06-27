import { NavItem } from './types';
import { LanguageSwitcher } from '../components/UI/languageSwitcher';
import LogoWithText from '../components/UI/logoWithText';

export const MAIN_NAV_ITEMS : NavItem[] = [
    { 
        href: '/', 
        label: <LogoWithText translationNameSpace='mainNavMenu' textForTranslation='logo' className='mr-7'/>,
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

export const SIDE_NAV_MENU : NavItem[] = [
    {
        href: '/', 
        label: <LogoWithText translationNameSpace='sideNavMenu' textForTranslation='logo'/>,
        isJsxLabel: true,
    },
    {href: '/about', label: 'history'},
    {href: '/catalog/helicopters', label: 'catalogHelicopters'},
    {href: '/catalog/spare-parts', label: 'catalogSpareParts'},
    {href: '/configurator', label: 'configurator'},
    {href: '/news', label: 'news'},
    {href: '/service', label: 'service'},
    {href: '/technical-information', label: 'technicalInforamation'},
    {href: '/services', label: 'services'},
]

export const SIDE_NAV_CONTACT_LINK : NavItem[] = [
    {href: 'tel:+74957234444', label: '+7 (495) 723-44-44'},
    {href: 'tel:+79637775757', label: '+7 (963) 777-57-57'},
    {href: 'mailto:info@aerounion.msk.ru', label: 'info@aerounion.msk.ru'},
    {href: 'https://maps.app.goo.gl/iCGDgsHzGwidqSme9', label: 'coordinates'},
    {href: '#radio-frequency', label: 'radioFrequency'},
]
