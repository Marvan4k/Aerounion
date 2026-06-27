'use client'
import Image from "next/image"
import { useTranslation } from "react-i18next";

interface logoProps {
    textForTranslation: string;
    translationNameSpace: string;
    className?: string;
}

export default function LogoWithText({textForTranslation, translationNameSpace, className} : logoProps){
    const {t} = useTranslation(translationNameSpace);
    return (
        <div className={className}>
            <Image src='/Logo.svg' width={225} height={30} alt="Aerounion"/>
            <p className="text-white text-center text-[12px] mt-0.5 tracking-[25%]">{t(textForTranslation)}</p>
        </div>
    )
}