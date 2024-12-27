import React from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet';
import styles from '../clientProducts/index.module.css'
import { FavoritesContext } from '../../contexts/favoritesContext'

const Favorites = () => {
    const {favorites,toggleFavorites} = useContext(FavoritesContext);
    console.log("favorites",favorites)
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Favorites</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <div className={styles.container}>
      <div className={styles.cardHolder}>
        {favorites?.map((product) => {
            return(
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
                  <button onClick={()=>toggleFavorites(product)}>{favorites.find((fav) => fav.id === product.id) ? "Out from favs" : "Add favs"}</button>
              </div>
            </div>)
        }) }
        </div>
      </div>

    </div>
  )
}

export default Favorites