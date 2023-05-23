import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { MainPageAsync } from "./pages/main/main-page.async";
import { AboutPageAsync } from "./pages/about/about-page.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, ["theme"])}>
      <Link to={"/"}>main</Link>
      <br />
      <Link to={"/about"}>About</Link>
      <br />
      <button onClick={toggleTheme}>toggle theme</button>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
