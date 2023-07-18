import useApp from "../hooks/useApp"

const Modal = () => {

    const { setIsVisible } = useApp()

    const hideModal = () => {
        setIsVisible( v => setIsVisible(!v) )
    }

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 z-10 bg-[#0a192f] h-screen w-full flex flex-col items-center justify-center gap-5">
            <a href="#" className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg" onClick={hideModal}>About me</a>
            <a href="#" className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg" onClick={hideModal}>Skills</a>
            <a href="#" className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg" onClick={hideModal}>Projects</a>
            <a href="#" className="text-white py-[8px] hover:border-b-[1px] hover:border-[#01be96] text-lg" onClick={hideModal}>Contact me</a>
        </div>
    )
}

export default Modal