import heroim from "../../assets/bg-new.jpg"



const Hero = () => {
  return (
        <section id="home" className="relative h-screen overflow-hidden">
  {/* Blurred background image */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-120"
    style={{ backgroundImage: `url(${heroim})`, filter: "blur(5px)" }}
  ></div>

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Text content */}
  <div className="relative flex flex-col items-center justify-center h-full">
    <h1 className="text-white text-4xl md:text-6xl lg:text-8xl text-center font-[Nunito]">
      Welcome to Newpathway1
        </h1>
        <p className="text-teal-500 italic text-lg md:text-xl lg:text-3xl md font-[Nunito]">...Safe, Supportive Living That Puts People First</p>
  </div>
</section>  
  )
}

export default Hero