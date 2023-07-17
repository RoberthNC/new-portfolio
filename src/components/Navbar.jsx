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
        <div className="bg-[#0a192f] p-3 sm:px-5 flex items-center justify-between fixed left-0 top-0 right-0">
            <img src={ Logo } alt="My personal logo" />
            <nav className="hidden sm:flex sm:justify-center sm:gap-5">
                <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">About me</a>
                <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">Skills</a>
                <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">Projects</a>
                <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">Contact me</a>
            </nav>
            <button onClick={handleModal}>
                <img className="cursor-pointer block sm:hidden" src={ MenuBars } alt="Menú bars" />
            </button>
        </div>
  )
}

export default Navbar