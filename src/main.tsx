import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import { ThemeProvider } from "./shared/lib/theme/themeProvider/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./app/providers/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
