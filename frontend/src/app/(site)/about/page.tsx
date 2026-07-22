import VerticalBlockText from "@/components/UI/verticalBlockText";

export default function AboutPage() {
    return (
        <div className="ml-40 mt-40 max-w-150">
            <div>
                <h2 className="uppercase font-extralight mb-3">Кратко</h2>
                <h1 className="uppercase font-bold">О компании</h1>
                <div className="mt-5 opacity-55">
                    <p className="font-light text-[18px]">Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития.</p>
                    <p className="font-light text-[18px] mt-7">Развитие структуры требуют определения и уточнения дальнейших направлений развития.</p>
                </div>
                <div className="flex mt-10">
                    <VerticalBlockText mainTitle="15 лет" subTitle="Успешной работы"/>
                    <VerticalBlockText mainTitle="5000+" subTitle="Довольных клиентов"/>
                    <VerticalBlockText mainTitle="100+" subTitle="Человек в команде"/>
                </div>
            </div>
            <div></div>
        </div>
    )
}