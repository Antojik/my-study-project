import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../UseTheme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    (window.localStorage.getItem("THEME") as Theme) || "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  useEffect(() => {
    window.localStorage.setItem("THEME", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
