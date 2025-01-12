import React from 'react'
import styles from './header.module.css'
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <>
    <header>
        <nav>
            <div className="container">
                <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="logo" />
                </div>
                <div className={styles.menu}>
                <IoMdMenu />
                </div>
                </div>
                
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header