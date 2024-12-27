import React from 'react'
import { useState } from 'react';
import {Helmet} from "react-helmet";
import controller from '../../helpers/helpers';
import { useEffect } from 'react';
import { endpoints } from '../../helpers/constants';
import styles from '../clientProducts/index.module.css'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState()
  const {id} = useParams();

  const getProductDetail = async () => {
    const data = await controller.getDataById(endpoints.products, id)
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail(); 
  }, [])
  
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <div className={styles.container}>
      <div className={styles.cardHolder}>
        {product && (
          <div className={styles.card}  key = {product.id}>
          <div className={styles.image}>
            <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.text}>
                <h4>{product.title}</h4>
                <p>{product.description.slice(0-60)}</p>
                <span>{product.price}$</span>
            </div>
            <div className={styles.detailButton}>
                <button onClick = {() => {
                  navigateDetail(product.id)
                }}>Go Back</button>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  )
}

export default ProductDetails