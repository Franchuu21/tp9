import './App.css';
import "./styles.css";
import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import LoginForm from './components/Login';
import Informacion from './components/Informacion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuarioProvider from './context/UsuarioContext';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <UsuarioProvider>
        <Routes> 
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />}></Route>
            <Route path='/informacion' element={<Informacion />} ></Route>
            <Route path='/login' element={<LoginForm />} ></Route>
            
            <Route path='*' element={<h1>Not Found</h1>} ></Route>
          </Route> 
        </Routes> <br></br>
      </UsuarioProvider>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;

/*Routes replaces the switch component */
