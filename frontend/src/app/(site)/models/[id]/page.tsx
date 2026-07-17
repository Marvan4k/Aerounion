
import ModelView from "@/components/model/Model";
import ButtonStroke from "@/components/UI/buttonStroke";
import { getHelicopterById } from "@/feature/cardsHelicopters/cardsHelicoptersAPI";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  weight: '700', 
  subsets: ['latin'],
  style: 'normal',
})

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function HelicopterPage({ params }: Props) {
    const { id } = await params;
    const helicopter = await getHelicopterById(Number(id));
    
    return (
        <>
            <div className="mt-30 ml-40 flex">
                <div className="mt-30 w-110 z-1">
                    <p className={`tracking-[5%] text-6xl scale-101 max-w-130 ${montserrat.className}`}>{helicopter.name}</p>
                    <p className="opacity-80 text-lg mt-2">{helicopter.description}</p>
                    <p className="opacity-55 mt-4">Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития. {helicopter.description}</p>
                    <ButtonStroke href="/models" textButton={`Заказать`} className="mt-7 "/>
                </div>
                <ModelView modelPath={`/${helicopter.modelUrl}/scene.gltf`} />
            </div>
            <table className="w-[calc(100%-200px)] overflow-hidden mb-10 ml-40 mt-45 table-fixed border-separate border-spacing-0 border-2 border-[#292929] rounded-2xl bg-primary z-1">
                <thead>
                    <tr>
                        <th colSpan={5} className="w-1/2 uppercase border-2 border-[#292929] p-4 text-left">Характеристики:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="border-2 border-[#292929] px-4 py-2 font-medium opacity-50">
                            <div className="flex items-center">
                                <Image src="/iconsCards/priceHelicopter.png" width="20" height="15" alt="speed" className="mr-2" />
                                <span>Цена</span>
                            </div>
                        </td>
                        <td colSpan={3} className="border-2 border-[#292929] px-4 py-2">{helicopter.price} $</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border-2 border-[#292929] px-4 py-2 font-medium opacity-50">
                            <div className="flex items-center">
                                <Image src="/iconsCards/speed.svg" width="20" height="15" alt="speed" className="mr-2" />
                                <span>Максимальная скорость</span>
                            </div>
                        </td>
                        <td colSpan={3} className="border-2 border-[#292929] px-4 py-2">{helicopter.maxSpeed} км/ч</td>
                    </tr>
                    <tr>
                        <td colSpan={2}className="border-2 border-[#292929] px-4 py-2 font-medium opacity-50">
                            <div className="flex items-center">
                                <Image src="/iconsCards/capacity.svg" width="20" height="15" alt="capacity" className="mr-2" />
                                <span>Вместимость</span>
                            </div>
                        </td>
                        <td colSpan={3} className="border-2 border-[#292929] px-4 py-2">{helicopter.capacity} человек</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border-2 border-[#292929] px-4 py-2 font-medium opacity-50">
                            <div className="flex items-center">
                                <Image src="/iconsCards/range.svg" width="20" height="15" alt="range" className="mr-2" />
                                <span>Дальность</span>
                            </div>
                        </td>
                        <td colSpan={3} className="border-2 border-[#292929] px-4 py-2">{helicopter.range} км</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border-2 border-[#292929] px-4 py-2 font-medium opacity-50">
                            <div className="flex items-center">
                                <Image src="/iconsCards/flyTime.png" width="20" height="15" alt="flight time" className="mr-2" />
                                <span>Время полета</span>
                            </div>
                        </td>
                        <td colSpan={3} className="border-2 border-[#292929] px-4 py-2">{helicopter.flightTime} мин</td>
                    </tr>
                </tbody>
            </table>
        </>

    );
}