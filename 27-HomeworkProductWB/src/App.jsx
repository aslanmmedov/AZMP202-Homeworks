import { Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Contact from "./pages/contact"
import ClientLayout from "./components/client/clientlayout"
import AdminLayout from "./components/admin/adminlayout"
import ClientDashboard from "./components/client/dashboard"
import BlogDetail from "./pages/productDetails"
import Blog from "./pages/clientProducts"
import Login from "./pages/Login"
import Register from "./pages/register"
import AdminDashboard from "./components/admin/dashboard"
import Users from "./pages/users"
import EditUser from "./pages/editUser"
import AddUser from "./pages/addUser"
import Products from "./pages/products"
import AddProd from "./pages/addProd"
import EditProduct from "./pages/editProd"
import './App.css'
import ClientProducts from "./pages/clientProducts"
import ProductDetails from "./pages/productDetails"
import Favorites from "./pages/favorites"

function App() {
  

  return (
    <>
      <Routes>
        {/* client */}
        <Route path = "/" element = {<ClientLayout/>}>
        <Route index element={<ClientDashboard />} />
        <Route path="products">
            <Route index element={<ClientProducts/>} />
            <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="favorites" element={<Favorites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
        {/* Admin */}
        <Route path = "/admin" element = {<AdminLayout/>}>
        <Route index element={<AdminDashboard/>} />
        <Route path="users">
            <Route index element={<Users/>} />
            <Route path="adduser" element={<AddUser />} />
            <Route path=":id" element={<EditUser />} />
        </Route>
        <Route path="products">
            <Route index element={<Products/>} />
            <Route path="addproduct" element={<AddProd />} />
            <Route path=":id" element={<EditProduct />} />
        </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
