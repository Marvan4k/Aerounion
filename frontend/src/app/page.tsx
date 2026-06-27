export default function Home() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover opacity-20"
      >
        <source src="/helicopterVideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
