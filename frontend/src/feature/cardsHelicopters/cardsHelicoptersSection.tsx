import { useEffect, useRef, useState } from "react";
import { getHelicopters } from "./cardsHelicoptersAPI";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const montserrat = Montserrat({
  weight: '700', 
  subsets: ['latin'],
  style: 'normal',
})

type Card = {
    id: number,
    name: string,
    manufacturer: string,
    description: string,
    price: number,
    maxSpeed: number,
    capacity: number,
    range: number,
    flightTime: number,
    previewImage: string,
    modelUrl: string,
}

const getLimit = () => {
    const sidebar = 80;
    const cardWidth = 310;

    const availableWidth = window.innerWidth - sidebar;
    const columns = Math.max(Math.floor(availableWidth / cardWidth), 1);

    return columns * 2;
};

export default function CardsHelicoptersSection(){
    const {t} = useTranslation("helicopters")
    const [cards, setCards] = useState<Card[]>([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const initialized = useRef(false);


    const loadCards = async () => {
        try {
            const limit = getLimit();
            const data = await getHelicopters(limit, offset);
            
            setCards(prev => {
                const updated = [...prev, ...data.items];
                setOffset(updated.length);
                return updated;
            });
            
            setTotal(data.total);
            
            setOffset(prev => prev + limit);

        } catch (error) {
            console.log(error)
        }
    };
    
    useEffect(() => {

        if (initialized.current) return;

        initialized.current = true;

        loadCards();
    }, []);

    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))]  gap-y-10 mt-30 mb-10 ml-40 h-full">
                {cards.map((helicopter) => (
                    <Link href={`/models/${helicopter.id}`} className="group bg-[#232323] w-75 h-87.5 hover:scale-110 transition-all duration-300"  key={helicopter.id}>
                        <p className={`text-xl text-center mt-5 mb-2.5 tracking-[5%] ${montserrat.className}`}>{helicopter.name}</p>
                        <Image className="opacity-40 group-hover:opacity-100 transition-all duration-300 min-h-52.5" src={helicopter.previewImage} alt={helicopter.name} width={280} height={215} />
                        <div className="
                            grid grid-cols-2 
                            *:flex *:justify-center *:items-center *:border-[#292929] *:border-2 *:h-10
                        ">
                            <div>
                                <Image src='/iconsCard/speed.svg' alt="speed" width={20} height={16} />
                                <p className="font-extralight ml-2 mt-0.75 leading-none">{helicopter.maxSpeed} {t("speed")}</p> 
                            </div>
                            <div>
                                <Image src='/iconsCard/capacity.svg' alt="capacity" width={20} height={20} />
                                <p className="ml-2 mt-0.75 leading-none">{helicopter.capacity}</p> 
                            </div>
                            <div>
                                <Image src='/iconsCard/range.svg' alt="range" width={25} height={25} />
                                <p className="ml-2 mt-0.75 leading-none">{helicopter.range} {t("range")}</p> 
                            </div>
                            <div className="bg-[#292929]">{t("button")}</div>
                        </div>
                    </Link>
                ))}
            </div>
            {cards.length < total && (
                <div className="flex justify-center mb-10">
                    <button
                        onClick={loadCards}
                        className="px-6 py-3 bg-white text-black rounded hover:bg-gray-300 transition"
                    >
                        {t("showMore")}
                    </button>
                </div>
            )}
        </>
    )
}