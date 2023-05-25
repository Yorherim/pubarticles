import { createContext } from "react";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}
interface ThemeContextProps {
  theme?: THEMES;
  setTheme?: (theme: THEMES) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});
