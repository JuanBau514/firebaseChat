import React from "react";
import Chat from './components/chats/chat'
import Detalle from './components/detalle/detalle'
import List from './components/listaUsuarios/lista'

import "./index.css"

function App() {
  return (
    <div className='contenedor'> 
        <List />
        <Chat />
        <Detalle />
    </div>
    
  );
}

export default App;

