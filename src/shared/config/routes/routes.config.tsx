import { RouteProps } from "react-router-dom";

import MainPage from "pages/main/ui/main-page";
import AboutPage from "pages/about/ui/about-page";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routesPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routesPaths.about,
    element: <AboutPage />,
  },
};
