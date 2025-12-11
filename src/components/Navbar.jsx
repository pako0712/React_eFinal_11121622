import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const IconBadge = styled.span`
  background: red;
  color: white;
  padding: 2px 8px;
  border-radius: 50%;
  font-size: 0.75rem;
`;

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">E-Commerce</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li><Link to="/products" className="nav-link">Productos</Link></li>
          <li><Link to="/admin" className="nav-link">Admin</Link></li>
        </ul>

        <Link to="/cart" className="btn btn-warning me-3 position-relative">
          <FaShoppingCart size={20} />
          {cart.length > 0 && (
            <IconBadge className="position-absolute top-0 start-100 translate-middle">
              {cart.length}
            </IconBadge>
          )}
        </Link>

        {user ? (
          <>
            <span className="text-light me-3">{user.email}</span>
            <button className="btn btn-danger" onClick={logout}>Salir</button>
          </>
        ) : (
          <Link to="/login" className="btn btn-success">Entrar</Link>
        )}
      </div>
    </nav>
  );
}
