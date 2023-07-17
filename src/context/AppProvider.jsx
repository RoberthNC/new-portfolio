import { createContext } from "react"
import { useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <AppContext.Provider
        value={{
            isVisible,
            setIsVisible
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