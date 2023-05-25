import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "app/providers/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
