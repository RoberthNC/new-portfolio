import { AppProvider } from "./context/AppProvider"
import Main from "./components/Main"

const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}

export default App