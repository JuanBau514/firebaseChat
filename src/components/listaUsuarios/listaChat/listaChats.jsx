import "./listaChats.css";
import { useState } from "react";

const listaChats = () => {
  const [addMode, setMode] = useState(false);
  return (
    <div className="listaChats">
      <div className="buscar">
        <div className="barraBusqueda">
          <img src="/src/assets/search.png" alt="" />
          <input type="text" placeholder="Busqueda" />
        </div>
        <img
          src={addMode ? "/src/assets/minus.png" : "/src/assets/plus.png"}
          className="add"
          alt=""
          onClick={() => setMode((prev) => !prev)}
        />
      </div>
      <div className="Userchat">
        <img src="/src/assets/avatar.png" alt="" />
        <div className="texto">
          <span>Nombre</span>
          <p>Ultimo Mensaje</p>
        </div>
      </div>
      <div className="Userchat">
        <img src="/src/assets/avatar.png" alt="" />
        <div className="texto">
          <span>Nombre</span>
          <p>Ultimo Mensaje</p>
        </div>
      </div>
      <div className="Userchat">
        <img src="/src/assets/avatar.png" alt="" />
        <div className="texto">
          <span>Nombre</span>
          <p>Ultimo Mensaje</p>
        </div>
      </div>
      <div className="Userchat">
        <img src="/src/assets/avatar.png" alt="" />
        <div className="texto">
          <span>Nombre</span>
          <p>Ultimo Mensaje</p>
        </div>
      </div>
      <div className="Userchat">
        <img src="/src/assets/avatar.png" alt="" />
        <div className="texto">
          <span>Nombre</span>
          <p>Ultimo Mensaje</p>
        </div>
      </div>
    </div>
  );
};

export default listaChats;
