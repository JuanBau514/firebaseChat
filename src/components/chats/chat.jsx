import "./chat.css";
const chat = () => {
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

      <div className="center"></div>

      <div className="bottom">
        <div className="icons"> </div>
        <input type="text" placeholder="Escribe el mensaje" />
        <div className="emoji">
          <img src="/src/assets/emoji.png" alt="" />
        </div>
        <button className="enviarBtn"></button>
      </div>
    </div>
  );
};

export default chat;
