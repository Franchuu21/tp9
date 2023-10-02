import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Comentario = ({puntoVerde, nombreUsuario, fecha, comentario, calificacion, hora, posicion, setComentarios, comments}) => { //Element tiene los atributos de cada cita + su key
    const eliminarComentario = () => { //La función debería pasar el setcitas con la lista de citas, sin la cita cuya key es pasada por parámetro
        /*
        element.citas.removeChild(lastElement);
        element.setCitas([])*/
        var lista1 = comments.slice(0, posicion)
        var lista2 = comments.slice(posicion+1, comments.length)

        setComentarios(lista1.concat(lista2))
    }

    return (<div>
    <div className="comentario" style={{ border: "2px solid black", width: 300, borderRadius: "2px", marginTop: "1rem", marginBottom: "1rem"}}>
        <div style={{margin: "1rem"}}>
            <p style={{fontSize: 20, fontWeight: 600, color: 'green'}}>Punto Verde: <span>{puntoVerde}</span></p>
            <p><span>{nombreUsuario}</span></p>
            <p><span>{calificacion}</span></p>
            <p><span>{comentario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <button className="button.elimnar u-full-width" style={{}} onClick={eliminarComentario}>Eliminar
                ×</button>
        </div>
    
    </div> 
</div> )

}

export default Comentario

/*
<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="comentario" style={{ border: "2px solid green", backgroundColor: "rgb(58, 163, 102)", borderRadius: "2px", marginTop: "1rem", marginBottom: "1rem", color: "white", opacity: "70%"}}>
        <div style={{margin: "2rem"}}>
            <p style={{fontSize: 20, fontWeight: 600, color: 'white'}}>Punto Verde: <span>{puntoVerde}</span></p>
            <p><span>{nombreUsuario}</span></p>
            <p><span>{calificacion}</span></p>
            <p><span>{comentario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <button className="button.elimnar u-full-width eliminar" onClick={eliminarComentario}>Eliminar
                ×</button>
        </div>
  </footer>
   */

/*
  <div className="comentario" style={{ border: "2px solid green", backgroundColor: "rgb(58, 163, 102)", borderRadius: "2px", marginTop: "1rem", marginBottom: "1rem", color: "white", opacity: "70%"}}>
        <div style={{margin: "2rem"}}>
            <p style={{fontSize: 20, fontWeight: 600, color: 'white'}}>Punto Verde: <span>{puntoVerde}</span></p>
            <p><span>{nombreUsuario}</span></p>
            <p><span>{calificacion}</span></p>
            <p><span>{comentario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <button className="button.elimnar u-full-width eliminar" onClick={eliminarComentario}>Eliminar
                ×</button>
        </div>
*/