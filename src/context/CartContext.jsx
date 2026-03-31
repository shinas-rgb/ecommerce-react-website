import { createContext, useContext, useState } from "react"
import { getProductById } from "../data/products"

const CartContext = createContext(null)

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = new useState([])

  function addToCart(productId) {
    const existing = cartItems.find((item) => item.id === productId)

    if (existing) {
      const currentQuantity = existing.quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId ?
          { id: productId, quantity: currentQuantity + 1 }
          : item
      )
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }])
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function updateCart(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ?
          { ...item, quantity } : item
      )
    )
  }

  function getCartItemsWithProducts() {
    return cartItems.map((item) => ({
      ...item,
      product: getProductById(item.id),
    })).filter((item) => item.product)
  }

  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
    return total
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, clearCart, addToCart, getCartItemsWithProducts, removeFromCart, updateCart, getCartTotal }}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
