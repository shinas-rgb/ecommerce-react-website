import { useCart } from "../context/CartContext"

export default function Checkout() {
  const { getCartItemsWithProducts, updateCart, removeFromCart, getCartTotal, clearCart } = useCart()
  const cartItems = getCartItemsWithProducts()
  const total = getCartTotal().toFixed(2)

  function placeOrder() {
    alert("Order placed successfully")
    clearCart();
  }
  return (
    <div>
      <div className="checkout-page">
        <div className="order-container">
          <h1>Order Summary</h1>
          {cartItems.map((item) => (
            <div className="order-each-item">
              <div className="order-details">
                <img className="order-image" src={item.product.image} alt={item.product.name} />
                <div className="order-name-price">
                  <h3>{item.product.name}</h3>
                  <p>${item.product.price}</p>
                </div>
              </div>
              <div className="order-quantity-total">
                <div className="order-quantity">
                  <button type="" onClick={() => updateCart(item.product.id, item.quantity - 1)}>-</button>
                  <button type="">{item.quantity}</button>
                  <button type="" onClick={() => updateCart(item.product.id, item.quantity + 1)}>+</button>
                </div>
                <div className="total-price">
                  <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
                <button className="remove-button" type="" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h1>TOTAL</h1>
          <div className="cart-total">
            <div className="checkout-p">
              <p>Total: </p><p> ${total}</p>
            </div>
          </div>
          <button type="" onClick={() => placeOrder()}>Place Order</button>
        </div>
      </div>
    </div>
  )
}
