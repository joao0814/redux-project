import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Rotas from "routes";
import { initWebVitals } from "./utils/webVitals";
import { Provider } from "react-redux";
import store from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Rotas />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Inicializar monitoramento de performance
initWebVitals();
