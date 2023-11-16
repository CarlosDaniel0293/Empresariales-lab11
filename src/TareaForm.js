// src/TareaForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (texto.trim() === "") {
      setError("La tarea no puede estar en blanco.");
      return;
    }

    if (texto.length > 10) {
      setError("La tarea no puede tener más de 10 caracteres.");
      return;
    }

    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Agregar Tarea
        </button>
      </div>
      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
}

export default TareaForm;
