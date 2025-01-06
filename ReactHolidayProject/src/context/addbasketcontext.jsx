import React, { useState } from 'react'
import { createContext } from 'react'

export const BasketContext = createContext(null);
const BasketProvider = ({children}) => {

    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const idx = prevBasket.findIndex((q) => q.id === product.id)

            if (idx === -1) {
                return [...prevBasket, { ...product, quantity: 1 }]
            }

            prevBasket[idx].quantity++
            return [...prevBasket]
        })

        console.log(basket);

    }


    const removeBasketItem = (product) => {
        setBasket((prevBasket) => prevBasket.filter((q) => q.id !== product.id))
    }
    const increaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity++
            return [...prevBasket]
        })
    }
    const decreaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity--
            if (found.quantity === 0) {
                return prevBasket.filter((q) => q.id !== product.id)
            }
            return [...prevBasket]
        })
    }
    const clearBasket = () => {
        setBasket([])
    }

    const calculateTotalPrice = () => {
        return basket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0).toFixed(2)
    }
  return (
    <div>
      <BasketContext.Provider value = {{ basket, addToBasket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, calculateTotalPrice }}>{children}</BasketContext.Provider>
    </div>
  )
}

export default BasketProvider
