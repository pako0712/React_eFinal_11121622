export default function Pagination({ total, current, onChange }) {
  return (
    <div className="d-flex justify-content-center mt-4">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          className={`btn mx-1 ${
            current === i + 1 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
