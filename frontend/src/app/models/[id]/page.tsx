
import ModelView from "@/components/model/Model";
import ButtonStroke from "@/components/UI/buttonStroke";
import { getHelicopterById } from "@/feature/cardsHelicopters/cardsHelicoptersAPI";
import { Montserrat } from "next/font/google";

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
            <table className="w-[calc(100%-200px)] overflow-hidden mb-10 ml-40 mt-45 table-fixed border-collapse border border-[#292929] rounded-2xl bg-primary z-1">
                <thead>
                    <tr>
                        <th colSpan={2} className="w-1/2 border border-[#292929] px-4 py-2 text-left">Характеристики:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-[#292929] px-4 py-2 font-medium">Цена</td>
                        <td className="border border-[#292929] px-4 py-2">{helicopter.price}</td>
                    </tr>
                    <tr>
                        <td className="border border-[#292929] px-4 py-2 font-medium">Максимальная скорость</td>
                        <td className="border border-[#292929] px-4 py-2">{helicopter.maxSpeed}</td>
                    </tr>
                    <tr>
                        <td className="border border-[#292929] px-4 py-2 font-medium">Вместимость</td>
                        <td className="border border-[#292929] px-4 py-2">{helicopter.capacity}</td>
                    </tr>
                    <tr>
                        <td className="border border-[#292929] px-4 py-2 font-medium">Дальность</td>
                        <td className="border border-[#292929] px-4 py-2">{helicopter.range}</td>
                    </tr>
                    <tr>
                        <td className="border border-[#292929] px-4 py-2 font-medium">Время полета</td>
                        <td className="border border-[#292929] px-4 py-2">{helicopter.flightTime}</td>
                    </tr>
                </tbody>
            </table>
        </>

    );
}