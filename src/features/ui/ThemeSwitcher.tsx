import { useTheme } from "../../shared/lib/theme/UseTheme";
import Button from "../../shared/ui/button/Button";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      text={`Switch to ${theme === "light" ? "dark" : "light"}`}
    />
  );
};
