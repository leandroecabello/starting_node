/* ******************
************************************************************************
                            MODULO HTTP
************************************************************************
Node nos ofrece el modulo HTTP el cual nos permite principalmente crear 
un servidor en nuestro maquina.

En este modulo encontraremos todo lo necesario para crear rutas, headers
que podríamos enviar, etc.

Uno de los métodos principales de este modulo es createServer, el cual 
nos permitirá abrir un puerto para crear el servidor.

************************************************************************
****************** */

const http = require("http");

/* http
  .createServer(function (req, res) {
    console.log("New request");
    console.log(req.url);
    
    // escribir cabecera
    res.writeHead(201, { "Content-Type": "text/plain" }); // codigo de autenticación y tipo de contenido

    // escribir respuesta al usuario
    res.write("Hello, HTTP from NodeJS");

    // terminamos petición
    res.end();
  })
  .listen(3000); // ponemos a escucha el puerto

*/

// Refactor
http.createServer(router).listen(3000);

function router(req, res) {
  console.log("New request");
  console.log(req.url);

  switch (req.url) {
    case "/hello":
      res.write("Hi");
      res.end();
      break;
    default:
      res.write("Error 404: Not Found");
      res.end();
  }
}

console.log("Listening http on port 3000");
