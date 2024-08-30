import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";  // Importar useAuthState
import { auth, db } from "../../../lib/firebase";  // Importar auth desde tu configuración de Firebase
import { collection, query, where, onSnapshot } from "firebase/firestore";
import AddUser from "./addUser/addUser";
import "./listaChats.css";

const ListaChats = () => {
  const [addMode, setMode] = useState(false);
  const [chats, setChats] = useState([]);
  const [user] = useAuthState(auth);  //  obtener el usuario actual

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "chats"),
        where("participants", "array-contains", user.uid)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const chatsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChats(chatsData);
      });

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <div className="listaChats">
      <div className="buscar">
        <div className="barraBusqueda">
          <img src="/src/assets/search.png" alt="Buscar" />
          <input type="text" placeholder="Búsqueda" />
        </div>
        <img
          src={addMode ? "/src/assets/minus.png" : "/src/assets/plus.png"}
          className="add"
          alt="Agregar"
          onClick={() => setMode((prev) => !prev)}
        />
      </div>
      {chats.map((chat) => (
        <div key={chat.id} className="Userchat">
          <img src="/src/assets/avatar.png" alt="Avatar" />
          <div className="texto">
            <span>{chat.name || "Nombre del chat"}</span>
            <p>{chat.lastMessage || "Último Mensaje"}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
};

export default ListaChats;
