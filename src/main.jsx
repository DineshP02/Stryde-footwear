import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

import { ThemeProvider } from './context/ThemeContext.jsx'
import { DirectionProvider } from './context/DirectionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DirectionProvider>
          <App />
        </DirectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)