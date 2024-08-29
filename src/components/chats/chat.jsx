import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

const chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setMensaje((prev) => prev + e.emoji);
    setEmoji(false); // Mantener el cierre del emoji seleccionar un emoji
  };  

  console.log(mensaje); // Mensaje en consola

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="infoUser">
            <span>Juan Bautista</span>
            <p>Lorem modi dicta gnissimos soluta.</p>
          </div>
        </div>
        <div className="iconos">
          <img src="/src/assets/phone.png" alt="" />
          <img src="/src/assets/video.png" alt="" />
          <img src="/src/assets/info.png" alt="" />
        </div>
      </div>

      <div className="center">
         <div className="mensaje">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="texto">
              <span>Juan Bautista</span>
                <p>Lorem modi dicta gnissimos soluta.</p>
              <span>12:00</span>
            </div>
        </div>
         <div className="mensaje envi">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="texto">
              <span>Juan Bautista</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, quaerat. Sed autem minima porro amet hic repudiandae expedita, harum sint eligendi! Ipsum inventore quis omnis laboriosam est distinctio eum repellendus?</p>
              <span>12:00</span>
            </div>
        </div>
        <div className="mensaje">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="texto">
              <span>Juan Bautista</span>
                <p>Lorem modi dicta gnissimos soluta.</p>
              <span>12:00</span>
            </div>
        </div>
         <div className="mensaje envi">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="texto">
              <span>Juan Bautista</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum a atque, exercitationem, sapiente ea corporis molestiae maxime, impedit consectetur eligendi sunt voluptas cupiditate laudantium vero. Doloremque omnis perspiciatis iste.</p>
              <span>12:00</span>
            </div>
        </div>
         <div className="mensaje ">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="texto">
              <span>Juan Bautista</span>
                <p>Lorem modi dicta gnissimos soluta.</p>
              <span>12:00</span>
            </div>
        </div>
         <div className="mensaje envi">
          <img src="/src/assets/avatar.png" alt="" />
          <div className="texto">
              <span>Juan Bautista</span>
                <p>Lorem modi dicta gnissimos soluta.</p>
              <span>12:00</span>
            </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="iconos2">
          <img src="/src/assets/emoji.png" alt="" />
          <img src="/src/assets/camera.png" alt="" />
          <img src="/src/assets/mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Escribe el mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <div className="emoji">
          <img
            src="/src/assets/emoji.png"
            alt=""
            onClick={() => setEmoji((prev) => !prev)}
          />
          
          {emoji && (
            <div className="contenedorEmoji">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="enviarBtn">Enviar</button>
      </div>
    </div>
  );
};

export default chat;

