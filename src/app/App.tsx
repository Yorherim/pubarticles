import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { MainPage, AboutPage } from "pages";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>main</Link>
      <br />
      <Link to={"/about"}>About</Link>
      <br />
      <button onClick={toggleTheme}>toggle theme</button>

      <AppRouter />
    </div>
  );
}

export default App;
