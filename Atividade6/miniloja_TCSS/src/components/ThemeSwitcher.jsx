import Switch from "@mui/material/Switch";
import { useTheme } from "../context/ThemeContext";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      {theme === "dark" ? "🌙" : "☀️"}
    </div>
  );
}