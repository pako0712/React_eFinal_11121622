import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, p) => acc + Number(p.price), 0);

  if (cart.length === 0)
    return <p className="text-center mt-4">El carrito está vacío</p>;

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>

      <ul className="list-group mt-3">
        {cart.map((item) => (
          <li className="list-group-item d-flex justify-content-between" key={item.id}>
            {item.name} — ${item.price}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h4 className="mt-4">Total: ${total}</h4>

      <button className="btn btn-secondary mt-3" onClick={clearCart}>
        Vaciar Carrito
      </button>
    </div>
  );
}
