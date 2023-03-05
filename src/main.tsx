import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { setAuthToken } from "./api";
import AuthContextProvider from "./features/auth/context/auth-context";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="959926205727-2e1a7n10kvcgahpvp8nd9ra6q7bf1da7.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </AuthContextProvider>
);
