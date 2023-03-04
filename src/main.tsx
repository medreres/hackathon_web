import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import { setAuthToken } from './api'

setAuthToken('root1token')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>   
        <App />
      </BrowserRouter>
    </ThemeProvider>
)
