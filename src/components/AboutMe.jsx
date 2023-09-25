import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

import useApp from "../hooks/useApp"

import ProfilePhoto from "../assets/img/Photo.png"

const AboutMe = () => {

  const { language } = useApp()

  useEffect(()=>{
    Aos.init({ duration:2000 })
  },[])

  return (
    <div id="about" className="bg-[#0a192f] h-screen flex flex-row items-center justify-center gap-x-10 gap-y-5 px-5 sm:px-[10%]">
      <div className="flex flex-col gap-y-5 sm:items-end">
        <div className="flex justify-start">
          <p className="text-blue-100 text-3xl font-bold py-[5px] sm:text-right border-b-[3px] border-[#01be96] inline" data-aos="fade-right">{ language === 'es' ? 'Acerca de mi':'About Me' }</p>
        </div>
        <p className="text-blue-100 text-base text-justify sm:text-right" data-aos="fade-right">
          { language === 'es' ? 'Soy una persona apasionada por la programación, sobre todo me gusta mucho el desarrollo web, me parece interesante la idea de crear muchas cosas utilizando las tecnologías actuales. He trabajado como desarrollador en dos empresas de mi ciudad, en una trabajé como Full-Stack de manera colaborativa con un equipo de desarrollo, por otro lado he trabajado como Freelance Front-End para una empresa constructora. Actualmente me dedico a mejorar mis habilidades como Full-Stack en mi tiempo libre con el objetivo de conseguir mejores oportunidades.':'I\'m a person who is passionate about programming, especially I really like web development, the idea of creating many things using current technologies seems interesting to me. I\'ve worked as a developer in two companies in my city, in one I worked as a Full-Stack collaboratively with a development team, on the other hand I have worked as a Freelance Front-End for a construction company. Currently I\'m dedicating myself to improving my skills as a Full-Stack in my spare time with the aim of getting better opportunities.' }
            
        </p>
      </div>
      <img src={ ProfilePhoto } alt="Profile Photo" className="h-60 w-60 hidden sm:inline" data-aos="fade-left" />
    </div>
  )
}

export default AboutMe