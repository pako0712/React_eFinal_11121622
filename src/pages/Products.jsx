import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 8;

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container mt-4">
      <SearchBar setSearch={setSearch} />

      <div className="row">
        {paginated.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      <Pagination total={totalPages} current={page} onChange={setPage} />
    </div>
  );
}
