import useApp from "../hooks/useApp"
import Modal from "./Modal"
import Navbar from "./Navbar"
import Presentation from "./Presentation"
import Aside from "./Aside"
import AboutMe from "./AboutMe"
import Skills from "./Skills"

const Main = () => {

    const { isVisible } = useApp()

    return (
        <>
            { isVisible && <Modal /> }
            <Navbar />
            <Presentation />
            <Aside />
            <AboutMe />
            <Skills />
        </>
    )
}

export default Main