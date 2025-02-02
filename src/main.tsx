import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css' // platform for providing css designs
import CoinContextProvider from './context/CoinContext'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <CoinContextProvider> 
      <App />
    </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
