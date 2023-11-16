import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada, fechaCreacion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  const formatoFecha = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const fechaCreada = fechaCreacion ? new Date(fechaCreacion) : null;

  return (
    <li className="list-group-item d-flex align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={completada}
          onChange={onToggleCompletada}
        />
      </div>
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control me-2"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSaveClick}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <div className="flex-grow-1 me-2">
            <span className={completada ? 'text-muted text-decoration-line-through' : ''}>
              {tarea}
            </span>
            {fechaCreada && !isNaN(fechaCreada) && (
              <div className="small text-muted">
                Creado el {fechaCreada.toLocaleDateString('es-ES', formatoFecha)}
              </div>
            )}
          </div>
          <div className="btn-group">
            <button className="btn btn-danger me-2" onClick={onDelete}>
              Eliminar
            </button>
            <button className="btn btn-warning" onClick={handleEditClick}>
              Editar
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Tarea;
