import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { endpoints } from '../../../services/constants';
import controller from '../../../services/functions';
import { Button, Card } from 'antd';
const { Meta } = Card;
import { useNavigate } from "react-router";
import styles from './index.module.css'
import { FavoriteContext } from '../../../context/addfavscontext';
import { Helmet } from 'react-helmet-async';
import { BasketContext } from '../../../context/addbasketcontext';
import styles2 from "../Home/index.module.css"
const ClientProducts = () => {
 const [products,setProducts] = useState([]);
 const [inpValue,setInpValue] = useState("");
 const navigate = useNavigate(null)
 const {basket,addToBasket} = useContext(BasketContext)
 const getData = async () => {
  const data = await controller.getAllData(endpoints.products)
  setProducts(data)
  // console.log(data)
 }
 const getDetail = (id) => {
  navigate(`/products/${id}`)
 }

 const {favorites,toggleFavorites} = useContext(FavoriteContext);


 useEffect(() => {
   getData();
 }, [])
//  console.log(products)
// console.log(inpValue)

 const filteredProducts = products.filter((product) => {
  // console.log(product)
    return product.title.toLowerCase().includes(inpValue.toLowerCase());
 })

 console.log(filteredProducts)
 const handleChange = (e) => {
  setInpValue(e.target.value.trim())
 }


  return (
    <>
     <Helmet>
        <title>Products Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className={styles.container}>
    <input type="text" onChange={handleChange} className = {styles.inpValue} placeholder = {"search by name"}/>
    <div className={styles.cardHolder}>

    <div className="row">
                  {filteredProducts && filteredProducts.map((product) => (
                    <div className="col-4 col-md-6 col-sm-12" key = {product.id}>
                    <div className={styles2.cardBody} >
                    <div className={styles2.img}>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={styles2.cardTitle}>
                      <h3>{product.title}</h3>
                      <h4>{product.price}</h4>
                      <p>{product.description}</p>
                    </div>
                    <br/>
                    <Button color="default" variant="solid" onClick = {() => toggleFavorites(product)}>
                  {favorites.find((fav) => fav.id === product.id) ? "Remove from fav" : "Add fav"}
              </Button><br/><br/>
              <Button color="default" variant="solid" onClick = {() => getDetail(product.id)}>
                  Detail
              </Button>
              <Button color="default" variant="solid" onClick = {() => addToBasket(product)}>
                  Add to Basket
              </Button>
                </div>
                </div>
                  ))}
                </div>
      </div>
    </div>
      
      
    </>
  )
}

export default ClientProducts