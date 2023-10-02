import React from "react";

const ElementoLista = (props) => {
    return (
            <div class="comentario">
                <p style={{fontSize: 20, fontWeight: 800, color: 'green'}}>Punto Verde: <span>{props.puntoVerde}</span></p>
                <p>Usuario: <span>{props.nombreUsuario}</span></p>
                <p>Calificacion: <span>{props.calificacion}</span></p>
                <p>Comentario: <span>{props.texto}</span></p>
                <p>Fecha: <span>{props.fecha}</span></p>
                <p>Hora: <span>{props.hora}</span></p>
                <button class="button.elimnar u-full-width">Eliminar
                    ×</button>
            </div>
    )
}

export default ElementoLista;