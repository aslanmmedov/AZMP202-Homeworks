import React from 'react'
import styles from "./index.module.css"
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const ClientFooter = () => {
  return (
    <>
    <div className="container">
    <div className={styles.footer}>
      <div className="row">
        <div className="col-4 col-md-12 col-sm-12">
        <div className={styles.about}>
              <h3>ABOUT US</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
            </div>
        </div>
        <div className="col-4 col-md-12 col-sm-12">
        <div className={styles.links}>
              <h3>QUICK LINKS</h3>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>
        </div>
        <div className="col-4 col-md-12 col-sm-12">
        <div className={styles.follow}>
            <h3>FOLLOW US</h3>

            <ul>
              <li><CiInstagram /></li>
              <li><CiFacebook /></li>
              <li><CiTwitter /> </li>
              <li><CiLinkedin /></li>
            </ul>
              </div>
        </div>        
      </div>       
      </div>
      <div><p className = {styles.copyright}>2025 All rights reserved | This template is made with Colorlib</p></div>
    </div>
      
    </>
  )
}

export default ClientFooter