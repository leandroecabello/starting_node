Debugger

Node.js viene integrado con un modo de debug para poder conectarnos desde cualquier herramienta de inspección de código a nuestro código de node.js.

Podemos utilizar en la terminal el flag de --inspect con nodemon:

- npx nodemon --inspect http.js

Para poder acceder a debugger de chrome vamos a la url chrome://inspect/#devices y le dan a inspect en el remote target que quieres inspeccionar.
