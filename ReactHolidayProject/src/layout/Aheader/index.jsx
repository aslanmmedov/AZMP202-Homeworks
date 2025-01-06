import React from 'react'
import { Link } from "react-router";
import styles from './index.module.css'
import { NavLink } from "react-router";
const AdminHeader = () => {
  return (
    <>
    <nav className={styles.ANav}>
    <div className="container">
        <div className={styles.nav}>
            <div>
              <h1>Selling<span className={styles.dot}>.</span></h1>
            </div>
            <ul>
              <li><NavLink to="/admin">HOME</NavLink></li>
              <li><NavLink to="/admin/products">PRODUCTS</NavLink></li>
              <li><NavLink to="/admin/add-product">ADD PRODUCT</NavLink></li>
            </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default AdminHeader