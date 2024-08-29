import './detalle.css';

const detalle = () => {
  return (
    <div className='detalle'>
      <div className="user">
        {/* integrando ramdom user */}
        <img src='/src/assets/avatar.png' />
        <h2>Nombre</h2>
        <p>Correo</p>
      </div>
      <div className="info">
        <div className="opciones">
          <div className="tituloOp">
            <span>Configuracion Chat</span>
            <img src='/src/assets/arrowUp.png'/>
          </div>
        </div>
        <div className="opciones">
          <div className="tituloOp">
            <span>Configuracion Chat</span>
            <img src='/src/assets/arrowUp.png'/>
          </div>
        </div>
        <div className="opciones">
          <div className="tituloOp">
            <span>Privacidad</span>
            <img src='/src/assets/arrowUp.png'/>
          </div>
        </div>
        <div className="opciones">
           <div className="tituloOp">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="fotos">
            <div className="fotoItem">
              <div className="fotoDetalle">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="fotoItem">
              <div className="fotoDetalle">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="fotoItem">
              <div className="fotoDetalle">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="fotoItem">
              <div className="fotoDetalle">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="opciones">
          <div className="tituloOp">
            <span>Archivos subidos</span>
            <img src='/src/assets/arrowUp.png'/>
          </div>
        </div>

        <div className="opciones">
          <button className="logout">Cerrar Sesion</button>
          <button className="btn">Eliminar Cuenta</button>
          <button className="btn">Reportar Usuario</button>
        </div>
      </div>
    </div>
  );
}

export default detalle;