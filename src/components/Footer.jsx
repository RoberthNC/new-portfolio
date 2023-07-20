import { Link } from "react-scroll"

import TopArrow from "../assets/icons/toparrow.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Github from "../assets/icons/github.svg"
import Instagram from "../assets/icons/instagram.svg"
import Facebook from "../assets/icons/facebook.svg"
import useApp from "../hooks/useApp"

const Footer = () => {

    const { isVisible } = useApp()

    return (
        <div className="bg-[#0a192f] py-10 px-5 border-t-[1px] border-[#01be96] relative flex flex-col items-center">
            <Link to="presentation" smooth={ true } spy={ true } duration={ 500 } className={`absolute top-[-15%] ${ !isVisible ? "z-10" : ""} cursor-pointer`}>
                <img src={ TopArrow } alt="Back Arrow" className="bg-[#01be96] px-[1px] py-[3px] scale-105 hover:scale-90 duration-700 inline-block" />
            </Link>
            <div className="flex gap-x-3 sm:gap-x-5 p-3">
                <a href="https://www.linkedin.com/in/roberto-n%C3%BA%C3%B1ez-casaux-894089235/" target="_blank" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                    <img src={ Linkedin } alt="Linkedin" />
                </a>
                <a href="https://github.com/RoberthNC" target="_blank" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                    <img src={ Github } alt="Github" />
                </a>
                <a href="https://www.instagram.com/roberto_n1599/" target="_blank" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                    <img src={ Instagram } alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100005597946794" target="_blank" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                    <img src={ Facebook } alt="Facebook" />
                </a>
            </div>
            <p className="text-center text-blue-100 mt-1">ROBERTO NÚÑEZ <span className="text-[#01be96]">©2023</span></p>
        </div>
  )
}

export default Footer