import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../css/Slug.css'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)

  const addToCart = (item, qty, price) => {
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    console.log(newCart)
    setCart(newCart)
    setReloadKey(Math.random())
  }
  const removeItemCart = (item, qty) => {
    let newCart = cart
    let indexOfItem = newCart.indexOf(item)
    newCart.splice(indexOfItem)
    setCart(newCart)
  }
  const removeAllCart = () => {
    setCart([])
  }

  useEffect(() => {
    console.log("I am using useEffect.")
  }, [])
  
  return <div>
            <Navbar key={reloadKey} cart={cart} />
            <Component cart={cart} addToCart={addToCart} removeAllCart={removeAllCart} removeItemCart={removeItemCart} {...pageProps} />
            <Footer />
        </div>
}

export default MyApp
