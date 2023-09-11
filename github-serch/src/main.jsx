import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeChangeContext from './components/context/ThemeChangeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeChangeContext >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeChangeContext>
  </React.StrictMode>
)
