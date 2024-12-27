import React from 'react'
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
        <h2>Logo</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
        </ul>
        <div className="btns">
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/register">Register</Link></button>
        </div>
    </div>
  )
}

export default Header