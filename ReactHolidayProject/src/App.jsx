import { Route, Routes } from 'react-router-dom'
import AdminLayout from './admin'
import AddProduct from './admin/pages/AddProduct'
import AdminProducts from './admin/pages/AdminProducts'
import AdminDashboard from './admin/pages/DashboardAdmin'
import EditProduct from './admin/pages/EditProduct'
import './App.css'
import ClientLayout from './client'
import Basket from './client/ClientPages/Basket'
import ClientProducts from './client/ClientPages/ClientProducts'
import Contact from './client/ClientPages/Contact'
import Favorites from './client/ClientPages/favorites'
import Home from './client/ClientPages/Home'
import NotFound from './client/ClientPages/NotFound'
import ProductDetail from './client/ClientPages/ProductDetail'

function App() {


  return (
    <>
      <Routes>
        {/* ClientSide */}
        <Route path = '/' element = {<ClientLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = 'contact' element = {<Contact/>}/>
            <Route path = 'products' element = {<ClientProducts/>}/>
            <Route path = 'favorites' element = {<Favorites/>}/>
            <Route path = 'basket' element = {<Basket/>}/>
            <Route path = 'products/:id' element = {<ProductDetail/>}/>
            <Route path = '*' element = {<NotFound/>}/>
        </Route>
        {/* AdminSide */}
        <Route>
        <Route path = '/admin' element = {<AdminLayout/>}>
            <Route index element = {<AdminDashboard/>}/>
            <Route path = 'add-product' element = {<AddProduct/>}/>
            <Route path = 'products' element = {<AdminProducts/>}/>
            <Route path = 'products/:id' element = {<EditProduct/>}/>
            <Route path = '*' element = {<NotFound/>}/>
        </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
