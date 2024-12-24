import React from 'react'
import styles from "./index.module.scss"
const HeroBanner = () => {
  return (
    <main>
        <div className={styles.container}>
            <div className={styles.sectone}>
                <h4>Hello..I am Aslan</h4>
                <h1>I am frontend developer</h1>
                <p>Maybe one day I will have some project to show but if u still want to check my resume..</p>
                <div className={styles.btnContainer}>
                <a href={"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"} download="MyExampleDoc" target='_blank'>
                     <button className={`${styles.btn} ${styles["btn-sign-up"]} `}>My Resume</button>
                </a>
                </div>
            </div>
            <div className={styles.secttwo}>
                <img src="https://thumbs.dreamstime.com/b/portrait-young-black-man-7542628.jpg" alt="" />
            </div>
        </div>
    </main>
  )
  


}

export default HeroBanner