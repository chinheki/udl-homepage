import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes
 } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Porfolio";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <HashRouter >
    <Routes>
      <Route path="/" element={<Homepage />} />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
