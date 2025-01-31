import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css' // platform for providing css designs
import CoinContextProvider from './context/CoinContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoinContextProvider> 
      <App />
    </CoinContextProvider>
  </React.StrictMode>,
)
