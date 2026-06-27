'use client'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../configuration/i18next';
import { useI18nReady } from '@/app/hooks/useI18nReady';


export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const isReady = useI18nReady();

    if (!isReady) return null;
    return (
        <div className="flex gap-2">
        <button 
            onClick={() => changeLanguage('ru')}
            className={`
                relative uppercase
                ${i18n.language === 'ru' ? 'text-white font-bold [text-shadow:0_0_5px_rgba(255,255,255,0.8)]' : 'text-white opacity-50 hover:opacity-90'}
            `}
        >
            rus
        </button>
        <span className='inline-block bg-white/40 w-0.5 h-6'></span>
        <button 
            onClick={() => changeLanguage('en')}
            className={`
                uppercase
                ${i18n.language === 'en' ? 'text-white font-bold [text-shadow:0_0_5px_rgba(255,255,255,0.8)]' : 'text-white opacity-50 hover:opacity-90'}
                `}
        >
            eng
        </button>
        </div>
    );
}