import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';
import usuarios from '../MockData/MockData.json'
import './Login.css'


const LoginForm = () => {
  const {setUsuario, usuario} = React.useContext(UsuarioContext);
  const [listUsername, setListUsername] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => async() => {
    const data = usuarios.usuarios
    if(usuario.nombre){
      setLoggedIn(true)
    }
    console.log(data)
    setListUsername(data)
}, [])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () =>{
    setUsuario()
    setPassword()
    setUsername()
    setLoggedIn(false)
  }

  const handleLogin = () => {
    console.log(listUsername[3])
    var isLoggedIn = false
    listUsername.forEach((element) => {
      if (username === element.nombre && password === element.contraseña) {
        setUsuario(element)
        console.log(element)
        isLoggedIn = true
        return
      }
    })
    if (isLoggedIn) setLoggedIn(true)
    else alert('Nombre de usuario o contraseña incorrectos');
  };
  

  return (
    <Card className="centered-content">
        <Card.Body className='input-container'>
        {loggedIn ? (
          <div>
            <h2>Bienvenido, {username}!</h2>
            <Button style={{marginTop:'10px', marginBottom: '10px', marginRight:'10px'}}><Link to={'/'} className='link'>Continuar</Link></Button>
            <button onClick={() => handleLogout()}>Cerrar sesión</button>
          </div>
        ) : (
          <div>
            <h2>Iniciar sesión</h2>
            <div className="form-group">
              <label>Nombre de usuario</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
              />
            </div>
            <br/>
            <button onClick={handleLogin} className="btn btn-primary">
              Iniciar sesión
            </button>
         </div>
        )} 
      </Card.Body>
      
    </Card>
  );
};

export default LoginForm;