import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">ShopHub</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>
        <div className="navbar-auth">
          {!user ?
            <div className="navbar-auth-links">
              <Link to="/auth"><button >Login</button></Link>
              <Link to="/auth"><button to="/auth">Signup</button></Link>
            </div>
            :
            <div className="navbar-auth-links">
              <button onClick={logout}>Logout</button>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}
