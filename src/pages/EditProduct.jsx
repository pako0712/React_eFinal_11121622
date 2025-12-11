import { useState, useEffect } from "react";
import { getProduct, updateProduct } from "../api/productsApi";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    getProduct(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(id, form);
      toast.success("Producto actualizado");
      navigate("/admin");
    } catch {
      toast.error("Error actualizando");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Editar Producto</h2>

      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="price"
          className="form-control mb-2"
          type="number"
          value={form.price}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="form-control mb-2"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="image"
          className="form-control mb-2"
          value={form.image}
          onChange={handleChange}
        />

        <button className="btn btn-warning">Guardar Cambios</button>
      </form>
    </div>
  );
}
