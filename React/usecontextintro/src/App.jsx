import { AuthProvider } from "./context/Auth"
import { Header } from "./components/Header"
import { ThemeProvider } from "./context/ThemeContext"
import { ThemeDisplay } from "./components/Theme"
import { ThemeSwitcher } from "./components/ToggleTheme"


function App() {
  

  return (
    <ThemeProvider>
      <ThemeDisplay/>
      <ThemeSwitcher/>
    </ThemeProvider>
  )
}

export default App
