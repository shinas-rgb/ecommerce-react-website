import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const linkTo = "/products/" + String(product.id)
  const { cartItems, addToCart } = useCart()
  const Initem = cartItems.find((item) => item.id === product.id)
  const productQuantityLabel = Initem ?
    `(${Initem.quantity})`
    : ""
  return (
    <div className="product-card" key={product.id} >
      <div className="product-card-image-container">
        <img src={product.image} alt={product.name} className="product-card-image" />
      </div>
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div>
          <Link to={linkTo}>
            <button>View Details</button>
          </Link>
          <button
            onClick={() => addToCart(product.id)}
          >Add to Cart {productQuantityLabel} </button>
        </div>
      </div>
    </div>
  )
}
