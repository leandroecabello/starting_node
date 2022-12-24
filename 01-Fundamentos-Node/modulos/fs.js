const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // console.log(data) => pero devuelve un buffer de está manera
    // console.log(data.toString()); mostrara en texto lo del archivo
    cb(data.toString()); // ejecuta una función callback
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("No se pudo escribir el archivo", err);
    } else {
      console.log("Se pudo escribir el archivo correcatamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

//leer(__dirname + "/archivo.txt");
//leer(__dirname + "/archivo.txt", console.log);

//escribir(__dirname + "/archivo1.txt", "Soy un nuevo archivo", console.log);

borrar(__dirname + "/archivo1.txt", console.log);
