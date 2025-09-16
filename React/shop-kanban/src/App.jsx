import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
    <BrowserRouter>
        <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        />
    </BrowserRouter>
    </>
  )
}

export default App
