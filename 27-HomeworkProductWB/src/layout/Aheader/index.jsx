import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
            <h2>Admin Logo</h2>
            <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="users">Users</Link></li>
                <li><Link to="products">Products</Link></li>
            </ul>
            <div className="btns">
              <button><Link to="users/adduser">Add User</Link></button>
              <button><Link to="products/addproduct">Add Product</Link></button>
            </div>
        </div>
  )
}

export default AdminHeader