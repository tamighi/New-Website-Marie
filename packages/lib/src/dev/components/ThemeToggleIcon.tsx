import { IconButton, MoonIcon, SunIcon } from "library";
import { useTheme } from "../../library/providers";
import { useToggleTheme } from "../providers/MyThemeProvider";

export const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();
  const darkMode = theme?.palette.darkMode;

  return (
    <IconButton onClick={toggleTheme || undefined}>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
