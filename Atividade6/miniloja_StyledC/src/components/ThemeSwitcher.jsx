import Switch from "@mui/material/Switch";
import { useTheme } from "../context/ThemeContext";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="ThemeSwitcher">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      {theme === "dark" ? "🌙" : "☀️"}
    </div>
  );
}