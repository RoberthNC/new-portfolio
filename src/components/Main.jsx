import useApp from "../hooks/useApp"
import Modal from "./Modal"
import Navbar from "./Navbar"
import Presentation from "./Presentation"
import Aside from "./Aside"

const Main = () => {

    const { isVisible } = useApp()

    return (
        <>
            { isVisible && <Modal /> }
            <Navbar />
            <Presentation />
            <Aside />
        </>
    )
}

export default Main