// src/app/hooks/useI18nReady.ts
'use client'
import { useEffect, useState } from 'react';
import i18n from '@/app/configuration/i18next';

export function useI18nReady() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
            return;
        }

        const handleInitialized = () => setIsReady(true);
        i18n.on('initialized', handleInitialized);

        return () => {
            i18n.off('initialized', handleInitialized);
        };
    }, []);

    return isReady;
}