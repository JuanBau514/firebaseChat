import Chat from './components/chats/chat'
import Detalle from './components/detalle/detalle'
import List from './components/listaUsuarios/lista'
import "./index.css"

const App = () => {
  return (
    <div className="contenedor"> 
    <List/>
    <Chat/>
    <Detalle/>
    </div>

  )
}

export default App
