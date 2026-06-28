'use client'
import ButtonStroke from "@/components/UI/buttonStroke";

export default function Home() {
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
        <h1 className="font-extrabold uppercase">Успейте купить</h1>
        <h1 className="uppercase">Robinson R44, R66</h1>
        <h3 className="font-extralight">Желающие приобрести вертолет могут оформить заказ по действующим ценам до очередного ежегодного повышения цен в январе 2021 года</h3>
        <ButtonStroke ref="/" textButton="Оформить заказ" className="mt-7"/>
      </div>
    </div>
  )
}
