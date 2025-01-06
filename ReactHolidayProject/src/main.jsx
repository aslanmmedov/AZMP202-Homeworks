import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import FavProvider from './context/addfavscontext'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BasketProvider from './context/addbasketcontext'
createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <BrowserRouter>
      <BasketProvider>
        <FavProvider>
          <App />
        </FavProvider>
      </BasketProvider>
    </BrowserRouter>
  </HelmetProvider>

)
