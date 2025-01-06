import React, { useContext } from 'react'
import { Link } from "react-router";
import styles from '../Aheader/index.module.css'
import { NavLink } from "react-router";
import { FavoriteContext } from '../../context/addfavscontext';
import { IoMdMenu } from "react-icons/io";
const ClientHeader = () => {
  const {favorites,toggleFavorites} = useContext(FavoriteContext)
  return (
    <>
      <nav className={styles.CNav}>
        <div className="container">
          <div className={styles.nav}>
            <div>
              <h1>Selling<span className={styles.dot}>.</span></h1>
            </div>
            <ul className={styles.ulNav}>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
              <li><NavLink to="/products">PRODUCTS</NavLink></li>
              <li><NavLink to="/basket">BASKET</NavLink></li>
              <li><NavLink to="/favorites">FAVORITES<sup>{favorites.length}</sup></NavLink></li>
            </ul>
            <div className={styles.none}>
            <IoMdMenu />
            </div>
        </div>
        </div>
      </nav>

    </>
  )
}

export default ClientHeader