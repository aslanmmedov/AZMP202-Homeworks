import React from 'react'
import styles from "./index.module.scss"

const Navbar = () => {
  return (
    <nav>
        <div className={styles.navbar}>
        <h3>MyProf.</h3>
        <ul>
            <li>About Me</li>
            <li>My Skills</li>
            <li>Contact</li>
        </ul>
        <div className={styles.btnContainer}>
            <button className={`${styles.btn} ${styles["btn-sign-up"]} `}>Contact Me</button>
        </div>
    </div>
    </nav>
    
  )
}

export default Navbar