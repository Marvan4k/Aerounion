'use client'
import ButtonStroke from "@/components/UI/buttonStroke";
import { useTranslation } from "react-i18next";


export default function Home() {
  const {t} = useTranslation("mainPageText");
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover opacity-20 absolute top-0 left-0 -z-1"
      >
        <source src="/helicopterVideo.mp4" type="video/mp4" />
      </video>

      <div className={`ml-40 mt-64 max-w-193.75`}>
        <h1 className="font-extrabold uppercase">{t("title")}</h1>
        <h1 className="uppercase">{t("subtitle")}</h1>
        <h3 className="font-extralight">{t("text")}</h3>
        <ButtonStroke ref="/" textButton={`${t("button")}`} className="mt-7 "/>
      </div>
    </div>
  )
}
