import LinkedIn from "../assets/icons/linkedin.svg"
import Github from "../assets/icons/github.svg"
import Contact from "../assets/icons/contact.svg"
import Resume from "../assets/icons/resume.svg"

const Aside = () => {
  return (
    <div className="hidden sm:block sm:fixed sm:left-0 sm:top-[35%]">
        <a href="#" className="text-base w-[150px] bg-blue-500 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700">
            Linkedin
            <img src={ LinkedIn } alt="Linkedin icon" />
        </a>
        <a href="#" className="text-base w-[150px] bg-gray-900 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700">
            Github
            <img src={ Github } alt="Github icon" />
        </a>
        <a href="#" className="text-base w-[150px] bg-green-600 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700">
            Contact
            <img src={ Contact } alt="Contact icon" />
        </a>
        <a href="#" className="text-base w-[150px] bg-gray-500 flex text-white justify-between items-center gap-3 p-3 ml-[-90px] hover:ml-0 duration-700">
            Resume
            <img src={ Resume } alt="Resume icon" />
        </a>
    </div>
  )
}

export default Aside