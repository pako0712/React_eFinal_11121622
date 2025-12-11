import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productsApi";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p>No encontrado</p>;

  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4>${product.price}</h4>

          <button
            className="btn btn-success mt-3"
            onClick={() => addToCart(product)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
