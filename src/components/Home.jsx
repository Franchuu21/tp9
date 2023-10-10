import React from "react";
import Listado from './Listado';
import MyForm from './Formulario';

const Home = () => {
    const [comments, setComentarios] = React.useState(() => {
        // Obtén los comentarios almacenados en el localStorage al cargar el componente
        const storedComments = localStorage.getItem("comments");
        return storedComments ? JSON.parse(storedComments) : [];
    });

    React.useEffect(() => {
        // Actualiza el localStorage cada vez que cambian los comentarios
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

    return (
    <div>
        <h1>Puntos Verdes</h1>
        <div id="map-container">
            <iframe title="Listado de Puntos Verdes" id="map-canvas" width="800" height="550" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=puntos verdes&amp;t=18;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
    
        <div className="container flex" style={{maxWidth: "100%", marginLeft:"3rem", textAlign:"left"}}>
            <div className="row">
            <MyForm comments={comments} setComentarios={setComentarios}></MyForm>
            </div> 
            <Listado comments={comments} setComentarios={setComentarios} />
        </div>
    </div>
    )
}

export default Home;