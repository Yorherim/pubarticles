import { useContext, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES } from "./theme.context";

interface UseThemeResult {
  theme: THEMES;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
