import { useState } from 'react';
import React from "react";
import Comentario from './Comentario';
import PropTypes from 'prop-types';

const Listado = ({comments, setComentarios}) => {

    return comments.map((comentario, i) => <Comentario key={i} {...comentario} posicion={i} setComentarios={setComentarios} comments={comments}/>)
}

export default Listado;