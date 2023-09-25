import { Link } from "react-scroll"

import useApp from "../hooks/useApp"

const Modal = () => {

    const { isVisible, setIsVisible, language } = useApp()

    const hideModal = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 z-10 bg-[#0a192f] h-screen w-full flex flex-col items-center justify-center gap-5">
            <Link to="about" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>{ language === 'es' ? 'Acerca de mi':'About me' }</Link>
            <Link to="skills" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>{ language === 'es' ? 'Habilidades':'Skills' }</Link>
            <Link to="projects" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>{ language === 'es' ? 'Proyectos':'Proyects' }</Link>
            <Link to="contact" smooth={ true } spy={ true } duration={ 500 } className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg cursor-pointer" onClick={hideModal}>{ language === 'es' ? 'Contáctame':'Contact' }</Link>
        </div>
    )
}

export default Modal