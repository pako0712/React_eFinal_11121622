import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productsApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  const loadData = () => {
    getProducts().then((res) => setProducts(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const remove = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    try {
      await deleteProduct(id);
      toast.success("Producto eliminado");
      loadData();
    } catch {
      toast.error("Error al eliminar");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Administrar Productos</h2>

      <Link to="/admin/create" className="btn btn-success my-3">
        Crear Producto
      </Link>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td className="d-flex gap-2">
                <Link to={`/admin/edit/${p.id}`} className="btn btn-warning btn-sm">
                  Editar
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => remove(p.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
