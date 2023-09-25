import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

import Arrow from "../assets/icons/arrow.svg"
import PdfEnglish from "../assets/pdf/english/Roberto Núñez - CV - Inglés.pdf"
import PdfSpanish from "../assets/pdf/spanish/Roberto Núñez - CV.pdf"
import useApp from "../hooks/useApp"

const Presentation = () => {

  const { isHover, setIsHover, language } = useApp()

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  useEffect(()=>{
    Aos.init({ duration:2000 })
  },[])

  return (
    <div id="presentation" className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 sm:px-[20%]">
        <p className="text-[#01be96] text-base" data-aos="fade-down">{ language === 'es' ? 'Hola! Mi nombre':'Hi! my name is' }</p>
        <p className="text-blue-100 text-3xl md:text-5xl font-bold" data-aos="fade-down">Roberto Núñez</p>
        <p className="text-gray-500 text-3xl md:text-5xl font-bold" data-aos="fade-down">{ language === 'es' ? 'Soy Programador Full-Stack':'I\'m a Full-Stack Developer' }</p>
        <p className="text-blue-100 text-base text-justify" data-aos="fade-down">{ language === 'es' ? 'Me considero una persona autodidacta a la que le gusta aprender y resolver retos. Me gusta el trabajo en equipo, soy de las personas que creen que una persona puede hacer muchas cosas pero un equipo puede llegar a límites inimaginables.':'I consider myself as a self-taught person who likes to learn and solve challenges. I like teamwork, I\'m one of the people who believe that a person can do many things but a team can reach limits unimaginable.' }</p>

        <a onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } href={PdfEnglish} download={"Roberto Núñez - CV"} className="inline-block border-[2px] px-5 py-2 mt-3 hover:border-[#01be96] hover:bg-[#01be96] transition-colors duration-300 w-44" data-aos="fade-down">
            <div className="flex gap-[5px] items-center">
                <p className="text-blue-100 text-base">{ language === 'es' ? 'Descargar CV':'Download CV' }</p>
                <img src={Arrow} alt="Arrow" className={`text-blue-100 ${ isHover ? "rotate-90":""} transition duration-300`} />
            </div>
        </a>
    </div>
  )
}

export default Presentation