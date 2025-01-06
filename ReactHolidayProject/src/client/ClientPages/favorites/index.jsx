import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { FavoriteContext } from '../../../context/addfavscontext'
import styles from '../ClientProducts/index.module.css'
import styles2 from "../Home/index.module.css"
const Favorites = () => {
    const navigate = useNavigate(null)
const {favorites,toggleFavorites} = useContext(FavoriteContext)

const getDetail = (id) => {
    navigate(`/products/${id}`)
   }

  return (
    <>
    <Helmet>
        <title>Favorites Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className="container">
    <div className={styles.cardHolder}>
          {favorites && favorites.map((product) => (
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


            //   <Card
            //   key={product.id}
            //   hoverable
            //   style={{
            //     width: 240,
            //   }}
            //   cover={<div className={styles.imgHeight}><img alt="example" src={product.image}/></div>}>
            //   <Meta title={product.title} /><br />
            //   <Meta title={`Price: $ ${product.price}`} /><br/>
            //   <Meta  description={product.description.slice(0-50)}/><br/>
            //   <Button color="default" variant="solid" onClick = {() => toggleFavorites(product)}>
            //       {favorites.find((fav) => fav.id === product.id) ? "Remove from fav" : "Add fav"}
            //   </Button><br/><br/>
            //   <Button color="default" variant="solid" onClick = {() => getDetail(product.id)}>
            //       Detail
            //   </Button>
            // </Card>
          )
          )}
      </div>
    </div>
      
    </>
  )
}

export default Favorites