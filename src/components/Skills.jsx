import Skill from "./Skill"

import { skills } from "../data/skills.js"

const Skills = () => {
  return (
    <div className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 sm:px-[20%]">
        <p className="text-blue-100 w-[72px] text-3xl font-bold border-b-[3px] border-[#01be96] py-[5px] sm:text-left">Skills</p>
        <p className="text-blue-100 text-base text-justify sm:text-left">Here are all my skills that I used in some of my projects.</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 mt-3">
            { skills.map(({ img, name })=>(
                <Skill key={name} img={img} name={name}/>
            )) }
        </div>
    </div>
  )
}

export default Skills