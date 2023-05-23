import React, { ComponentProps, FC, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES } from "./theme.context";

const ThemeProvider: FC<ComponentProps<any>> = ({ children }) => {
  const [theme, setTheme] = useState<THEMES>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES) || THEMES.LIGHT,
  );

  const defaultValue = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
