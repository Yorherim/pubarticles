import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { MainPageAsync } from "./pages/main/main-page.async";
import { AboutPageAsync } from "./pages/about/about-page.async";

function App() {
  return (
    <div className={"app"}>
      <Link to={"/"}>main</Link>
      <br />
      <Link to={"/about"}>About</Link>

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
