import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth.jsx'
import Navbar from './components/Navbar'
import Checkout from './pages/Checkout.jsx'
import AuthContext from './context/AuthContext.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CartProvider from './context/CartContext.jsx'

function App() {
  return (
    <AuthContext>
      <CartProvider>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthContext>
  )
}

export default App
