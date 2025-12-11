import { useState } from "react";
import { createProduct } from "../api/productsApi";
import { toast } from "react-toastify";

export default function CreateProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) return toast.error("Nombre obligatorio");
    if (form.price <= 0) return toast.error("Precio inválido");
    if (form.description.length < 10)
      return toast.error("Descripción muy corta");

    try {
      await createProduct(form);
      toast.success("Producto creado");

      setForm({
        name: "",
        price: "",
        description: "",
        image: ""
      });
    } catch {
      toast.error("Error con la API");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crear Producto</h2>

      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control mb-2"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="price"
          className="form-control mb-2"
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="form-control mb-2"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="image"
          className="form-control mb-2"
          placeholder="URL Imagen"
          value={form.image}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
}
