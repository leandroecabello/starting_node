const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
// Inicialiazar servidor node tradicional con express (quien gestionara las rutas)
const httpServer = createServer(app);
// preparamos e inicializamos socket
const io = new Server(httpServer, {
  /* options */
});

// Para conectar desde un cliente
app.use(express.static("./public"));

/* PREPARANDO CONEXIONES */

/* Momento en que alguien se conecta */
// param socket => el socke que fue abierto
io.on("connection", function (socket) {
  console.log("Nuevo cliente conectado");
  // envir mensaje
  socket.emit("mensaje", "Bienvenido!"); // (tipo de mensaje , mensaje)
});

// enviando un mensaje que recibiran todos los cliente cada 3s
setInterval(function () {
  io.emit("mensaje", "Hola, mensaje para todos");
}, 3000);

httpServer.listen(8080, function () {
  console.log("Server on port: 8080");
});
