import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

const CardWrapper = styled.div`
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <CardWrapper className="card h-100 shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          height="180"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5>{product.name}</h5>
          <p className="text-muted">${product.price}</p>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
            Ver
          </Link>

          <button
            className="btn btn-success btn-sm"
            onClick={() => addToCart(product)}
          >
            <FaCartPlus /> Añadir
          </button>
        </div>
      </CardWrapper>
    </div>
  );
}
