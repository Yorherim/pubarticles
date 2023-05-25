import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AboutPage, MainPage } from "pages";
import { routesConfig } from "shared/config/routes/routes.config";

export const AppRouter = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Routes>
      {Object.values(routesConfig).map(({ element, path }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  </Suspense>
);
