import { useTheme } from "../context/ThemeContext"

export function ThemeDisplay() {
    const {theme} = useTheme()

    return <h1>Tema Atual: {theme}</h1>
}