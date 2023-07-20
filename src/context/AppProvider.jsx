import { useState } from "react"
import { createContext } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [ isVisible, setIsVisible ] = useState(false)
  const [ isHover, setIsHover ] = useState(false)

  return (
    <AppContext.Provider
        value={{
            isVisible,
            setIsVisible,
            isHover,
            setIsHover
        }}
    >
        { children }
    </AppContext.Provider>
  )
}

export {
    AppProvider
}

export default AppContext