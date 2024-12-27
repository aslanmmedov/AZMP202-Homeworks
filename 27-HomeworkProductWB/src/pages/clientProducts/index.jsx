
import { useState } from 'react';
import {Helmet} from "react-helmet";
import controller from '../../helpers/helpers';
import { useEffect } from 'react';
import { endpoints } from '../../helpers/constants';
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../../contexts/favoritesContext';
import { useContext } from 'react';
const ClientProducts = () => {
  const [products, setProducts] = useState([]);
  const [search ,setSearch] = useState("");

  const navigate = useNavigate();
  const GetProducts = async() => {
    const data = await controller.getAllData(endpoints.products);
    setProducts(data.data)
  }

  const { toggleFavorites, favorites } = useContext(FavoritesContext)

  const filteredProducts = products.filter((product) => 
  product.title.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    GetProducts();
  }, [])
  
  const searchFunction = (e) => {
    setSearch(e.target.value.trim());
  }

  const navigateDetail = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <div className={styles.container}>
      <input type="text" onChange = {searchFunction} className={styles.search} placeholder='search for title'/>
      <div className={styles.cardHolder}>
        {filteredProducts?.map((product) => {
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
                    <button onClick = {() => {
                      navigateDetail(product.id)
                    }}>Detail</button>
                </div>
                <div className={styles.detailButton}>
                    <button onClick = {() => toggleFavorites(product)}>{favorites.find((fav) => fav.id === product.id) ? "Out from favs" : "Add favs"}</button>
                </div>
              </div>
            
          )
        })}
        </div>
      </div>
      </>
  )
}

export default ClientProducts