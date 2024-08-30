import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { fileURLToPath } from 'url'; // Importar la función fileURLToPath
import { resolve, dirname } from "path";
import { PORT } from "./config.js";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url); // Convertir import.meta.url a __filename
const __dirname = dirname(__filename); // Obtener el directorio actual

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

const usuariosConectados = {};

app.use(morgan("dev")); // Usar morgan para registrar las solicitudes HTTP en la consola
// Middleware para servir archivos estáticos desde la carpeta "dist"
app.use(express.static(resolve(__dirname, "../dist")));

// Ruta manejadora para la ruta raíz "/"
app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "../dist/index.html"));
});



app.use(morgan("dev"));
console.log(resolve('dist'));
app.use(express.static(resolve('dist'))); // configuramos el servidor para que sirva archivos estáticos desde la carpeta "dist"


io.on("connection", (socket) => {
    console.log("Un cliente se ha conectado", socket.id);

    // Manejador de eventos "registro"
    socket.on("registro", (nombreUsuario) => {
        console.log(nombreUsuario);

        // Almacena el nombre de usuario en el objeto usuariosConectados
        usuariosConectados[socket.id] = nombreUsuario;

        // Emitir mensaje de bienvenida al cliente registrado
        socket.emit("mensaje", {
            datos: `Bienvenid@ ${nombreUsuario}`,
            form: "Sistema"
        });

        // Emitir evento "registro" a todos los clientes conectados
        io.emit("registro", {
            nombreUsuario,
            nUsuario: `${nombreUsuario} se ha unido al chat`,
            form: "Sistema"
        });

        // Emitir la lista actualizada de usuarios conectados a todos los clientes
        io.emit("usuariosConectados", Object.values(usuariosConectados));
    });

    // Manejador de usuarios desconectados
    socket.on("disconnect", () => {
        delete usuariosConectados[socket.id]; // Corregir el nombre del objeto aquí
        console.log("Un cliente se ha desconectado", socket.id);

        // Emitir la lista actualizada de usuarios conectados a todos los clientes
        io.emit("usuariosConectados", Object.values(usuariosConectados));
    });

    socket.on("mensaje", (datos) => {
        console.log(datos);

        // Obtener el nombre de usuario asociado con el ID del socket
        const nombreUsuario = usuariosConectados[socket.id] || "Usuario desconocido";
        
        // Si el mensaje fue enviado por un cliente distinto al que lo recibe
        if (datos.form !== socket.id) {
            // Emitir el mensaje con el nombre de usuario y abreviatura
            io.emit("mensaje", {
                datos,
                form: socket.id,
                nombreUsuario
            });
        }
    });

    // Manejador de eventos "chatPrivado"
      socket.on("chatPrivado", (mensajePrivado) => {
  console.log("Mensaje privado recibido:", mensajePrivado);

  // Obtener destinatario desde mensajePrivado
  const destinatario = mensajePrivado.destinatario;

  // Verificar si el destinatario está en usuariosConectados
  if (usuariosConectados[destinatario]) {
    socket.to(usuariosConectados[destinatario]).emit("chatPrivado", {
      datos: mensajePrivado.datos,
      form: mensajePrivado.form,
      nombreUsuario: mensajePrivado.nombreUsuario,
      destinatario: mensajePrivado.destinatario, // Agregar destinatario
    });

    // Emitir un mensaje de notificación al remitente
    socket.emit("mensajeNotificacion", {
      mensaje: `Mensaje privado enviado a ${destinatario}`,
      form: "Sistema",
    });

    // Emitir el mensaje de vuelta al remitente
    socket.emit("chatPrivado", {
      datos: mensajePrivado.datos,
      form: mensajePrivado.form,
      nombreUsuario: mensajePrivado.nombreUsuario,
      destinatario: destinatario, // Usar la variable destinatario
    });
  }
});

  
    io.emit("usuariosConectados", Object.values(usuariosConectados));
});


server.listen(PORT) // mi servidor esta escuchando en el puerto 6900
console.log ("El servidor esta corriendo en el puerto", PORT)