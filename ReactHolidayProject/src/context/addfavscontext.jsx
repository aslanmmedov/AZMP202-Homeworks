import React, { createContext } from 'react'
import { useState } from 'react';


export const FavoriteContext = createContext(null);

const FavProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);


    const toggleFavorites = (product) => {
        const find = favorites.find((p) => p.id === product.id);
        if(find){
            setFavorites((prev) => prev.filter((q) => q.id !== product.id))
        }else{
            setFavorites((prev)=>[...prev, product ])
        }
    }
  return (
    <>
        <FavoriteContext.Provider value ={{favorites,toggleFavorites}}>{children}</FavoriteContext.Provider>
    </>
  )
}

export default FavProvider