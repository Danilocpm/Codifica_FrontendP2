import { useTheme } from "../context/ThemeContext"

export function ThemeSwitcher() {
    const {toggleTheme} = useTheme()

    return <button onClick={toggleTheme}>Trocar Tema</button>
}