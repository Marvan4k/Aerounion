import { ReactNode } from 'react';

export interface NavItem {
    href: string;           
    label: ReactNode | string;  
    isJsxLabel?: boolean;
}