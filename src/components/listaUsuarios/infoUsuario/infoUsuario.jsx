import "./infoUsuario.css";
const infoUsuario = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="/src/assets/avatar.png" />
        <h2>User name</h2>
      </div>
      <div className="icons">
        <img src="/src/assets/more.png" />
        <img src="/src/assets/video.png" />
        <img src="/src/assets/edit.png" />
      </div>
    </div>
  );
};

export default infoUsuario;
