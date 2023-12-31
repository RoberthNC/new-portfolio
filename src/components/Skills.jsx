import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

import Skill from "./Skill"

import { skills } from "../data/skills.js"
import useApp from "../hooks/useApp"

const Skills = () => {

  const { language } = useApp()

  useEffect(()=>{
    Aos.init({ duration:2000 })
  },[])

  return (
    <div id="skills" className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 sm:px-[20%]">
        <div className="flex justify-start">
          <p className="text-blue-100 text-3xl font-bold py-[5px] sm:text-left border-b-[3px] border-[#01be96] inline" data-aos="fade-right">{ language === 'es' ? 'Habilidades':'Skills' }</p>
        </div>
        <p className="text-blue-100 text-base text-justify sm:text-left" data-aos="fade-right">{ language === 'es' ? 'Estas son todas mis habilidades las cuales he usado en algunos de mis proyectos.':'Here are all my skills that I used in some of my projects.' }</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 mt-3" data-aos="fade-right">
            { skills.map(({ img, name })=>(
                <Skill key={name} img={img} name={name}/>
            )) }
        </div>
    </div>
  )
}

export default Skills