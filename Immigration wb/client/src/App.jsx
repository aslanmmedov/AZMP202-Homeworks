import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddNewData from './pages/AdminAddPage'
import Wishlist from './pages/Wishlist'
import Details from './pages/Details'
import Home from './pages/Home'
import ClientLayout from './ClientLayout'
import AdminLayout from './AdminLayout'

function App() {

  return (
    <>
      <Routes>
          <Route path = "/" element = {<ClientLayout/>}>
              <Route index element = {<Home/>}/>
              <Route path = ":id" element = {<Details/>}/>
              <Route path = "wishlist" element = {<Wishlist/>}/>
          </Route>
          <Route path = "/admin" element = {<AdminLayout/>}>
              <Route index element = {<AddNewData/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
