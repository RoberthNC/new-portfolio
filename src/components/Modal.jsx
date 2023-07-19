import { Link } from "react-scroll"

import useApp from "../hooks/useApp"

const Modal = () => {

    const { setIsVisible } = useApp()

    const hideModal = () => {
        setIsVisible( v => setIsVisible(!v) )
    }

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 z-10 bg-[#0a192f] h-screen w-full flex flex-col items-center justify-center gap-5">
            <Link to="about" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>About me</Link>
            <Link to="skills" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>Skills</Link>
            <Link to="" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>Projects</Link>
            <Link to="contact" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>Contact me</Link>
        </div>
    )
}

export default Modal