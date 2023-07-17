import useApp from "../hooks/useApp"
import Modal from "./Modal"
import Navbar from "./Navbar"

const Main = () => {

    const { isVisible } = useApp()

    return (
        <>
            { isVisible && <Modal /> }
            <Navbar />
        </>
    )
}

export default Main