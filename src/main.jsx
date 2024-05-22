import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App.jsx";
import "./index.css";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
