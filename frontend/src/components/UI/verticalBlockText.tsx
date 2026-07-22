interface BlockProps {
    mainTitle: string,
    subTitle: string,
}
export default function VerticalBlockText({mainTitle, subTitle} : BlockProps){
    return (
        <div className="flex flex-col max-w-31.75 mr-10">
            <p className="font-bold text-[34px] tracking-[5%]">{mainTitle}</p>
            <p className="text-xl opacity-55">{subTitle}</p>
        </div>
    )
}