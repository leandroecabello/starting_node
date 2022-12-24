const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
// preparamos e inicializamos socket
const io = new Server(httpServer, {
  /* options */
});

const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("./socket");
const db = require("./db");

const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");
const chatRoutes = require("./routes/chat.routes");

const PORT = 3000;

db("mongodb+srv://admin:admin@cluster0.xjqaxyw.mongodb.net/test");

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);
socket.connect(httpServer);

// app.use("/", (req, res) => res.send("Hello"));
// rutas
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use("/app", express.static("src/public"));
httpServer.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
