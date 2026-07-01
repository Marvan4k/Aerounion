import { useEffect, useState } from "react";
import { getHelicopters } from "./cardsHelicoptersAPI";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";


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

export default function CardsHelicoptersSection(){
    const [cards, setCards] = useState<Card[]>([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const limit = 8;

    const loadCards = async () => {
        try {
            const data = await getHelicopters(limit, offset);
            
            setCards(prev => [...prev, ...data.items]);
            
            setTotal(data.total);
            
            setOffset(prev => prev + limit);

        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        loadCards();
    }, []);

    return (
        <>
            <div className="grid grid-cols-4 gap-y-10 mt-30 ml-40 h-full">
                {cards.map((helicopter) => (
                    <div className="group bg-[#232323] w-75 h-87.5 hover:scale-110 transition-all duration-300"  key={helicopter.id}>
                        <p className={`text-xl text-center mt-5 mb-2.5 tracking-[5%] ${montserrat.className}`}>{helicopter.name}</p>
                        <Image className="opacity-40 group-hover:opacity-100 transition-all duration-300 min-h-52.5" src={helicopter.previewImage} alt={helicopter.name} width={280} height={215} />
                        <div className="
                            grid grid-cols-2 
                            *:flex *:justify-center *:items-center *:border-[#292929] *:border-2 *:h-10
                        ">
                            <div>
                                <Image src='/iconsCard/speed.svg' alt="speed" width={20} height={16} />
                                <p className="font-extralight ml-2 leading-none">{helicopter.maxSpeed} km/h</p> 
                            </div>
                            <div>
                                <Image src='/iconsCard/capacity.svg' alt="capacity" width={20} height={20} />
                                <p className="ml-2 leading-none">{helicopter.capacity}</p> 
                            </div>
                            <div>
                                <Image src='/iconsCard/range.svg' alt="range" width={25} height={25} />
                                <p className="ml-2 leading-none">{helicopter.range} km</p> 
                            </div>
                            <Link href='#' className="bg-[#292929]">Подробнее</Link>
                        </div>
                    </div>
                ))}
            </div>
            {cards.length < total && (
                <div className="flex justify-center my-10">
                    <button
                        onClick={loadCards}
                        className="px-6 py-3 bg-white text-black rounded hover:bg-gray-300 transition"
                    >
                        Показать ещё
                    </button>
                </div>
            )}
        </>
    )
}