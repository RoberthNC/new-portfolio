import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

import ProfilePhoto from "../assets/img/Photo.png"

const AboutMe = () => {

  useEffect(()=>{
    Aos.init({ duration:2000 })
  },[])

  return (
    <div id="about" className="bg-[#0a192f] h-screen flex flex-row items-center justify-center gap-x-10 gap-y-5 px-5 sm:px-[10%]">
      <div className="flex flex-col gap-y-5 sm:items-end">
        <div className="flex justify-start">
          <p className="text-blue-100 text-3xl font-bold py-[5px] sm:text-right border-b-[3px] border-[#01be96] inline" data-aos="fade-right">About Me</p>
        </div>
        <p className="text-blue-100 text-base text-justify sm:text-right" data-aos="fade-right">
            I'm a person who is passionate about programming, especially I really like web development, the idea of creating many things using current technologies seems interesting to me.
            I've worked as a developer in two companies in my city, in one I worked as a Full-Stack collaboratively with a development team, on the other hand I have worked as a Freelance Front-End for a construction company.
            Currently I'm dedicating myself to improving my skills as a Full-Stack in my spare time with the aim of getting better opportunities.
        </p>
      </div>
      <img src={ ProfilePhoto } alt="Profile Photo" className="h-60 w-60 hidden sm:inline" data-aos="fade-left" />
    </div>
  )
}

export default AboutMe