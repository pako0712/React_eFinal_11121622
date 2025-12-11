export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Buscar productos..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
