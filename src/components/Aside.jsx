import { Link } from "react-scroll"

import LinkedIn from "../assets/icons/linkedin.svg"
import Github from "../assets/icons/github.svg"
import Contact from "../assets/icons/contact.svg"
import Resume from "../assets/icons/resume.svg"

const Aside = () => {
  return (
    <div className="hidden sm:block sm:fixed sm:left-0 sm:top-[35%]">
        <a href="https://www.linkedin.com/in/roberto-n%C3%BA%C3%B1ez-casaux-894089235/" target="_blank" className="text-base w-[150px] bg-blue-500 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700 cursor-pointer">
            Linkedin
            <img src={ LinkedIn } alt="Linkedin icon" />
        </a>
        <a href="https://github.com/RoberthNC" target="_blank" className="text-base w-[150px] bg-gray-900 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700 cursor-pointer">
            Github
            <img src={ Github } alt="Github icon" />
        </a>
        <Link to="contact" smooth={ true } spy={ true } duration={ 500 } className="text-base w-[150px] bg-green-600 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700 cursor-pointer">
            Contact
            <img src={ Contact } alt="Contact icon" />
        </Link>
        <Link to="presentation" smooth={ true } spy={ true } duration={ 500 } className="text-base w-[150px] bg-gray-500 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700 cursor-pointer">
            Resume
            <img src={ Resume } alt="Resume icon" />
        </Link>
    </div>
  )
}

export default Aside