import TopArrow from "../assets/icons/toparrow.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Github from "../assets/icons/github.svg"
import Instagram from "../assets/icons/instagram.svg"
import Facebook from "../assets/icons/facebook.svg"

const Footer = () => {
  return (
    <div className="bg-[#0a192f] py-10 px-5 border-t-[1px] border-[#01be96] relative flex flex-col items-center">
        <a href="#" className="absolute top-[-15%] z-10">
            <img src={ TopArrow } alt="Back Arrow" className="bg-[#01be96] px-[1px] py-[3px] hover:scale-90 duration-700 inline-block" />
        </a>
        <div className="flex gap-x-3 sm:gap-x-5 p-3">
            <a href="#" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                <img src={ Linkedin } alt="Linkedin" />
            </a>
            <a href="#" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                <img src={ Github } alt="Github" />
            </a>
            <a href="#" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                <img src={ Instagram } alt="Instagram" />
            </a>
            <a href="#" className="p-1 scale-110 hover:scale-95 hover:bg-[#01be96] duration-700 border border-[#0a192f] shadow-2xl">
                <img src={ Facebook } alt="Facebook" />
            </a>
        </div>
        <p className="text-center text-blue-100 mt-1">ROBERTO NÚÑEZ <span className="text-[#01be96]">©2023</span></p>
    </div>
  )
}

export default Footer