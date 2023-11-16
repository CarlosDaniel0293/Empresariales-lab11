import React, { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const ordenarTareas = () => {
    const tareasOrdenadas = [...tareas];
    tareasOrdenadas.sort((a, b) => {
      const fechaA = a.fechaCreacion ? new Date(a.fechaCreacion).getTime() : 0;
      const fechaB = b.fechaCreacion ? new Date(b.fechaCreacion).getTime() : 0;
      return ordenAscendente ? fechaA - fechaB : fechaB - fechaA;
    });
    return tareasOrdenadas;
  };

  return (
    <div>
      <div>
        <button className="btn btn-secondary" onClick={() => setOrdenAscendente(!ordenAscendente)}>
          {ordenAscendente ? 'Orden Ascendente' : 'Orden Descendente'}
        </button>
      </div>
      <ul>
        {ordenarTareas().map((tarea, index) => (
          <Tarea
            key={index}
            tarea={tarea.texto}
            completada={tarea.completada}
            onDelete={() => eliminarTarea(index)}
            onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
            onToggleCompletada={() => toggleCompletada(index)}
            fechaCreacion={tarea.fechaCreacion}  // Asegúrate de pasar la fechaCreacion
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
