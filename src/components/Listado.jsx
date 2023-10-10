import React from "react";
import Comentario from './Comentario';
import PropTypes from 'prop-types';
import './Listado.css'; // Agrega un archivo CSS para estilos personalizados

const Listado = ({ comments, setComentarios }) => {
    // Define el número de columnas deseado
    const numColumns = 3;

    // Divide los comentarios en grupos de acuerdo al número de columnas
    const commentGroups = Array.from({ length: numColumns }, (_, columnIndex) => {
        return comments.filter((_, index) => index % numColumns === columnIndex);
    });

    return (
        <div className="comment-grid">
            {commentGroups.map((commentGroup, columnIndex) => (
                <div key={columnIndex} className="comment-column">
                    {commentGroup.map((comentario, i) => (
                        <Comentario key={i} {...comentario} posicion={i} setComentarios={setComentarios} comments={comments} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Listado;
