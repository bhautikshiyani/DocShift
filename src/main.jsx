import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.scss';
import { ToastContextProvider } from "@components/Toast/ToastContextProvider";

import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastContextProvider>
  </React.StrictMode>
)
