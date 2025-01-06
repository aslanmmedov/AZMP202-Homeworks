import React, { useEffect } from 'react'
import { useState } from 'react'
import { endpoints } from '../../../services/constants';
import controller from '../../../services/functions';
import { useParams } from "react-router"
import styles from '../ClientProducts/index.module.css'
import { useNavigate } from "react-router";
import { Button, Card } from 'antd';
import { useContext } from 'react';
import { FavoriteContext } from '../../../context/addfavscontext';
import { Helmet } from 'react-helmet-async';
import styles2 from "./index.module.css"
const ProductDetail = () => {
  const {favorites,toggleFavorites} = useContext(FavoriteContext)
  const [product,setProduct] = useState([]);
  const navigate = useNavigate(null);
 const {id} = useParams();
  const getProduct = async () => {
    const data = await controller.getDataById(endpoints.products,id)
    console.log("data",data)
    setProduct(data);
  }
  useEffect(() => {
    getProduct();
  }, [])
  //  console.log(product)
   
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
     <Helmet>
        <title>{product.title}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className={styles.container}>
    <div className={styles.cardHolder}>
          {product &&(
              <div className="col-4 col-md-6 col-sm-12" key = {product.id}>
              <div className={styles2.cardBody} >
              <div className={styles2.img}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles2.cardTitle}>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <p>{product.description}</p>
                <Button color="default" variant="solid" onClick = {() => toggleFavorites(product)}>
            {favorites.find((fav) => fav.id === product.id) ? "Remove from fav" : "Add fav"}
        </Button>
    
        <Button color="default" variant="solid" onClick = {() => addToBasket(product)}>
            Add to Basket
        </Button>
        <Button color="default" variant="solid" onClick = {goBack}>
            Back
        </Button>
              </div>
              <br/>
              
          </div>
          </div>
            
          )
          }
      </div>
    </div>
    </>
  )
}

export default ProductDetail