export default function ProductCard({ product }) {
  return (
    <div className="product-card" key={product.id} >
      <div className="product-card-image-container">
        <img src={product.image} alt={product.name} className="product-card-image" />
      </div>
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
