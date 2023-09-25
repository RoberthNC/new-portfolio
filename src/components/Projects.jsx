import React, { lazy, Suspense, useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

import Spinner from "./Spinner"
import { projects } from "../data/projects"
import useApp from "../hooks/useApp"

const LazyProject = lazy(()=>import("./Project"))

const Projects = () => {

  const { language } = useApp()

  useEffect(()=>{
    Aos.init({ duration:2000 })
  },[])

  return (
    <div id="projects" className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 lg:px-[20%]">
        <div className="flex justify-start">
            <p className="text-blue-100 text-3xl font-bold py-[5px] sm:text-left border-b-[3px] border-[#01be96] inline" data-aos="fade-right">{ language === 'es' ? 'Proyectos':'Projects' }</p>
        </div>
        <p className="text-blue-100 text-base text-justify sm:text-left" data-aos="fade-right">{ language === 'es' ? 'Aquí están algunos de mis proyectos que he construido, usando tecnologías de Front-End y Back-End':'Here are some of my projects that I built using Front-End and Back-End technologies.' }</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3" data-aos="fade-right">
            { projects.map(({ name, img, repository })=>(
                <Suspense key={name} fallback={<Spinner />}>
                  <LazyProject name={name} img={img} repository={repository}/>
                </Suspense>
            )) }
        </div>
    </div>
  )
}

export default Projects