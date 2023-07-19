import { Link } from "react-scroll"

import Logo from "../assets/icons/logo.svg"
import MenuBars from "../assets/icons/menu.svg"
import useApp from "../hooks/useApp"

const Navbar = () => {

    const { isVisible, setIsVisible } = useApp()

    const handleModal = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="bg-[#0a192f] py-3 px-5 flex items-center justify-between fixed left-0 top-0 right-0 border-b-[1px] border-[#01be96] opacity-90 shadow-lg">
            <img src={ Logo } alt="My personal logo" />
            <nav className="hidden sm:flex sm:justify-center sm:gap-5">
                <Link to="about" smooth={ true } spy={ true } duration={ 500 } className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96] cursor-pointer">About me</Link>
                <Link to="skills" smooth={ true } spy={ true } duration={ 500 } className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96] cursor-pointer">Skills</Link>
                <Link to="" smooth={ true } spy={ true } duration={ 500 } className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96] cursor-pointer">Projects</Link>
                <Link to="contact" smooth={ true } spy={ true } duration={ 500 } className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96] cursor-pointer">Contact me</Link>
            </nav>
            <button onClick={handleModal} className="sm:hidden">
                <img className="cursor-pointer block" src={ MenuBars } alt="Menú bars" />
            </button>
        </div>
  )
}

export default Navbar