import useApp from "../hooks/useApp"
import Modal from "./Modal"
import Navbar from "./Navbar"
import Presentation from "./Presentation"
import Aside from "./Aside"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./Footer"

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
            <Contact />
            <Footer />
        </>
    )
}

export default Main