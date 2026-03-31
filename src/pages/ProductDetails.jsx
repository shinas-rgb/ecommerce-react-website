import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products"
import { useCart } from "../context/CartContext"

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = new useState(null)
  const navigate = useNavigate()
  const { cartItems, addToCart } = useCart()


  useEffect(() => {
    const foundProduct = getProductById(Number(id))

    if (!foundProduct) {
      navigate("/")
      return
    }
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return <h2>Loading..</h2>
  }
  const inItem = cartItems.find((item) => item.id === product.id)
  const productQuantityLabel = inItem ?
    `(${inItem.quantity})`
    : ""

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src={product.image} className="product-card-image" />
      </div>
      <div className="product-details-container">
        <h1>{product.name}</h1>
        <div className="product-description">
          <p>{product.description}
            <br />
            <button onClick={() => addToCart(product.id)}>
              Add to Cart {productQuantityLabel}
            </button></p>
        </div>
      </div>
    </div>
  )
}
