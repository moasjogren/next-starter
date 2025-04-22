"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}> Switch to {theme === "light" ? "dark" : "light"} mode</button>
  );
}
