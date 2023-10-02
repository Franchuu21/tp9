import React from "react";

const Informacion = () => {
    return (
        <div className="container flex " style={{maxWidth: "100%", marginLeft:"3rem", textAlign:"left"}}><br></br>
            <p>Según la ONU, la gestión de los residuos tiene importantes implicaciones de salud pública, ya que es uno de los dos principales portadores y propagadores de enfermedades infecciosas. 
                Una gestión ineficaz de residuos sólidos genera una mala impresión en inversionistas y turistas, lo que repercute en la pérdida de reputación y oportunidades de inversión. Así introducimos las siguientes prácticas:</p>
            <ul>
                <il>
                    <h3>Reducir</h3></il>
                <il>
                    <h3>Reutilizar</h3></il>
                <il>
                    <h3>Reciclar</h3></il>
                <il>
                    <h3>Recuperar</h3></il>            
            </ul>
            <p>Es así que nos vamos a centrar en la práctica del reciclaje.</p>            
            
            <h1>¿Qué es el reciclaje?</h1>
            <p>El reciclaje es un proceso que consiste en hacer una selección de los residuos generados para ser tratados en plantas especializadas creando productos para otros usos. De esta manera, se evita el uso descontrolado de recursos naturales, se ahorra energía y se reducen el volumen de residuos.</p>
            
            <h1>¿Qué se puede reciclar?</h1>
            <p>En los puntos verdes hay 3 tipos de tachos de reciclaje:</p>
            <ul>
                <il>
                    <h3 style={{color:"green"}}>Verde</h3>
                    <p>Para objetos mayormente compuestos por vidrio, como botellas y frascos.</p></il>
                <il>
                    <h3 style={{color:"blue"}}>Azul</h3>
                    <p>Papel y cartón. Para diarios, revistas, papel y cajas.</p></il>
                <il>
                    <h3 style={{color:"#ded710"}}>Amarillo</h3>
                    <p>Plástico y latas. Para botellas de gaseosas, agua mineral y productos de limpieza, entre otros.</p></il>
                    <il>
                    <h3 style={{color:"green"}}>Naranja</h3>
                    <p>Para objetos mayormente compuestos por metal, como botellas y frascos.</p></il>
            </ul>
            <i>Aclaración: el color de los tachos y lo que se tira varía dependiendo del lugar, si tienes dudas, los mismos puntos verdes tienen marcados en qué color van los distintos tipos de reciduos.</i>
        </div>    
    )
}

export default Informacion;