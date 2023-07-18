import Logo from "../assets/icons/logo.svg"
import MenuBars from "../assets/icons/menu.svg"
import useApp from "../hooks/useApp"

const Navbar = () => {

    const { setIsVisible } = useApp()

    const handleModal = (e) => {
        e.preventDefault();
        setIsVisible( v => setIsVisible(!v) )
    }

    return (
        <div className="bg-[#0a192f] py-3 px-5 flex items-center justify-between fixed left-0 top-0 right-0 border-b-[1px] border-[#01be96] opacity-90 shadow-lg">
            <img src={ Logo } alt="My personal logo" />
            <nav className="hidden sm:flex sm:justify-center sm:gap-5">
                <a href="#" className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96]">About me</a>
                <a href="#" className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96]">Skills</a>
                <a href="#" className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96]">Projects</a>
                <a href="#" className="text-blue-100 text-base py-[8px] hover:border-b-[1px] hover:border-[#01be96]">Contact me</a>
            </nav>
            <button onClick={handleModal} className="sm:hidden">
                <img className="cursor-pointer block" src={ MenuBars } alt="Menú bars" />
            </button>
        </div>
  )
}

export default Navbar