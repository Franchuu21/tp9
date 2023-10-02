import { useState } from "react";
import '../App.css';

const puntosVerdes = ["Armenia 1809", "Medrano, Charcas y, 1746 Palermo", "Antezana 355", "Bulnes, Sarmiento y, 1176"];

const MyForm = ({ comments, setComentarios }) => {
    const [selectedPuntoVerde, setSelectedPuntoVerde] = useState(""); // Estado para almacenar el punto verde seleccionado

    const updateComentario = () => {
        const nuevoComentario = {
            puntoVerde: selectedPuntoVerde,
            nombreUsuario: document.getElementById("nombreUsuario").value,
            calificacion: document.getElementById("calificacion").value,
            comentario: document.getElementById("comentario").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value,
        };

        setComentarios([...comments, nuevoComentario]);
    };

    return (
        <div className="one-half column">
  <h2>Reseñas</h2>
  <div className="form-container">
    <label htmlFor="puntoVerde">Elige un Punto Verde:</label>
    <select
      name="puntoVerde"
      id="puntoVerde"
      value={selectedPuntoVerde}
      onChange={(e) => setSelectedPuntoVerde(e.target.value)}
    >
      <option value="">Selecciona un punto verde</option>
      {puntosVerdes.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </select>

    <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
    <input
      type="text"
      name="username"
      className="u-full-width"
      placeholder="Ingresa tu nombre de usuario"
      id="nombreUsuario"
    />

    <label htmlFor="calificacion">Calificación:</label>
    <input
      type="number"
      name="calif"
      className="u-full-width"
      placeholder="Calificación entre 1 y 5"
      id="calificacion"
      min="1"
      max="5"
    />

    <label htmlFor="comentario">Comentario:</label>
    <textarea
      name="comment"
      className="u-full-width"
      placeholder="Escribe tu comentario"
      id="comentario"
    ></textarea>

    <label htmlFor="fecha">Fecha:</label>
    <input
      type="date"
      name="fecha"
      className="u-full-width"
      id="fecha"
    />

    <label htmlFor="hora">Hora:</label>
    <input
      type="time"
      name="hora"
      className="u-full-width"
      id="hora"
    />

    <button
      type="button"
      className="u-full-width button-primary"
      onClick={updateComentario}
    >
      Aceptar
    </button>
  </div>
</div>

    );
};

export default MyForm;
