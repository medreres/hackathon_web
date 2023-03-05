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

// setAuthToken(
//   "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NWNjYTZlYzI4MTA2MDJkODBiZWM4OWU0NTZjNDQ5NWQ3NDE4YmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Nzc5ODEwMTQsImF1ZCI6Ijk1OTkyNjIwNTcyNy0yZTFhN24xMGt2Y2dhaHB2cDhuZDlyYTZxN2JmMWRhNy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMTMzNzQxNzU5NzgyNTA5MDI2NSIsImVtYWlsIjoibWF4dW0yMzAyNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiOTU5OTI2MjA1NzI3LTJlMWE3bjEwa3ZjZ2FocHZwOG5kOXJhNnE3YmYxZGE3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6ItCc0LDQutGB0LjQvCDQn9GA0LjQs9C-0LTQsCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhhMzczZ3ZxZ0hrYzlqUGplWVRWTWR3VnladlRCT1NBS0t1b0tYbzV5dz1zOTYtYyIsImdpdmVuX25hbWUiOiLQnNCw0LrRgdC40LwiLCJmYW1pbHlfbmFtZSI6ItCf0YDQuNCz0L7QtNCwIiwiaWF0IjoxNjc3OTgxMzE0LCJleHAiOjE2Nzc5ODQ5MTQsImp0aSI6ImIyZmM5MDRhZTU2ZDMzMTk1ZGQwN2YyNzkwY2ViNjliMGM5M2U4NmYifQ.g2TOUVH6K2HUll6UjDrZqMsIkiIC_ZvXI30efvjcQHyj8NhKy0lgYVe-J8QMdR7yy-Mr240EkopnasXKpLmO9HqLH5KMJFrQmzQAdttxzMzxh3I8jW2peqK9NbLQL2heKaY5HAOxfNnJLGHNN1EfifjhWBIsd-dtLmQ5H8emmg47FqiONGb6j-KqNwaawRKvioIigFl1lX9oA77Xk-VJy1p6KRk-OCP17XvJEnh06mOJSqNUcY-o_r-JKDKkRebDLTz0nq93u7glYGdh9i6CpXl-EY4Ba1Nw1MjniytMEZ2xYNVkDi040QqUInU-N0N1T8mtLbo9jdqhbyvNHxJgLw"
// );
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
