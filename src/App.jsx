import React from "react";
import Chat from './components/chats/chat'
import Detalle from './components/detalle/detalle'
import List from './components/listaUsuarios/lista'
import LoginForm from './components/Login/loginForm'
import RegisterForm from './components/Registro/registro'
import VFinal from './vFinal'
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='contenedor'>
      <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/list" element={<List />} />
        <Route path="/vFinal" element={<VFinal />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;

