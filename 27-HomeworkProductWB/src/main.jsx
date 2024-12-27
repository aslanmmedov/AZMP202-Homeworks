
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './contexts/favoritesContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </BrowserRouter>,
)
