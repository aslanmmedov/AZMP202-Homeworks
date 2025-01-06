import React, { useEffect, useState } from 'react'
import styles from "./index.module.css"
import controller from '../../../services/functions';
import { endpoints } from '../../../services/constants';
import { Helmet } from 'react-helmet-async'
const Home = () => {
  const [products,setProducts] = useState([]);

  const getData = async () => {
    const data = await controller.getAllData(endpoints.products)
    setProducts(data)
    // console.log(data)
   }
   useEffect(() => {
      getData();
    }, [])
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className="container">
        <div className={styles.heroBanner}>
          <h1 className={styles.shopWithUs}>Shop With Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
          <button className={styles.shopNowbtn}>SHOP NOW</button>
          <button className={styles.membershipbtn}>CLUB MEMBERSHIP</button>
        </div>
        <div className={styles.productSection}>
          <div className={styles.sectionHead}>
          <span className={styles.popularPr}>POPULAR PRODUCTS</span>
          <h2 className={styles.sectheaders}>Our Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
          </div>
          <div className={styles.sectionBody}>
              <div className="row">
                  {products && products.map((product) => (
                    <div className="col-4 col-md-6 col-sm-12" key = {product.id}>
                    <div className={styles.cardBody} >
                    <div className={styles.img}>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={styles.cardTitle}>
                      <h3>{product.title}</h3>
                      <h4>{product.price}</h4>
                      <p>{product.description}</p>
                    </div>
                </div>
                </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
        <div className={styles.getNotified}>
          <h2>Get notified on each updates.</h2>
          <div className="email">
          <input type="email" placeholder='enter your email adress'/>
          <button>SUBSCRIBE</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
        </div>
    </>
  )
}

export default Home