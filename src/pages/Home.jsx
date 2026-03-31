import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products"

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">
          Welcome to ShopHub
        </h1>
        <p>Discover amazing products at best price</p>
      </div>
      <div className="home-container">
        <h2 className="page-title">Our products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.key} />
          ))}
        </div>
      </div>
    </div>
  )
}
