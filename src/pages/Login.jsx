import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>

      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}
