import './lista.css';
import InfoUsuario from "./infoUsuario/infoUsuario";
import ListaChats from "./listaChat/listaChats";
const lista = () => {
    return (
        <div className='lista'>
            <InfoUsuario />
            <ListaChats />
        </div>
    );
}

 export default lista;