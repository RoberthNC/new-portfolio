import { useEffect, useState } from "react"
import { createContext } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [ isVisible, setIsVisible ] = useState(false)
  const [ isHover, setIsHover ] = useState(false)
  const [ language, setLanguage ] = useState('')

  useEffect(()=>{
    const lang = navigator.language.split('-')[0]
    setLanguage(lang)
  },[])

  return (
    <AppContext.Provider
        value={{
            isVisible,
            setIsVisible,
            isHover,
            setIsHover,
            language,
            setLanguage
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