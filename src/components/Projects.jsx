import React, { lazy, Suspense } from "react"

import Spinner from "./Spinner"
import { projects } from "../data/projects"

const LazyProject = lazy(()=>import("./Project"))

const Projects = () => {
  return (
    <div id="projects" className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 lg:px-[20%]">
        <div className="flex justify-start">
            <p className="text-blue-100 text-3xl font-bold py-[5px] sm:text-left border-b-[3px] border-[#01be96] inline">Projects</p>
        </div>
        <p className="text-blue-100 text-base text-justify sm:text-left">Here are some of my projects that I built using Front-End and Back-End technologies.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
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