import { createContext, useContext, useState, useMemo, useCallback } from "react"

const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("Light")

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))        
    })

    const value = useMemo(() => ({theme, toggleTheme}), [theme])

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}