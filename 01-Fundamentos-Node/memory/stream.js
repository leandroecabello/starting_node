/* **********
**********************************************************************
                          Streams
**********************************************************************
  - Un stream es el proceso de ir consumiendo datos al tiempo que se 
  están recibiendo. 
  
  - Es el paso de datos entre un punto y otro.
**********************************************************************
********** */

const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

// stream de lectura
let readableStream = fs.createReadStream(__dirname + "/input.txt");
// recibira los paquetes o chunks en formato de buffer

// parseo a utf8
readableStream.setEncoding("UTF8");

// inicia una escucha de evento
readableStream.on("data", function (chunk) {
  console.log(chunk);
  //console.log(chunk.toString());
  data += chunk;
});
/* **********
**********************************************************************
                          NOTAS
**********************************************************************
  Se inicia una escucha de evento en la que escuchara cuando reciba la 
  información del archivo a leer luego se ira añadiendo los chunks a 
  la variable data que se había declarado previamente.

  chunk => paquete o fragmento de datos
**********************************************************************
********** */

// escucha cuando se termina de recibir datos del archivo
readableStream.on("end", function () {
  console.log(data); // muestra toda la data
});

// stream de escrituras
process.stdout.write("Hello");
process.stdout.write("World");
// escribiendo en el buffer de la salida del sistema

// Buffer intermedio que recibe un dato, lo lee, modifica y lo vuelve a escribir
// usando trasnform y utils con ES6
const Transform = stream.Transform; // transforma la secuencia de entrada para que la secuencia de salida sea diferente.

class CapitalLetters extends Transform {
  _transform(chunk, coding, cb) {
    let chunkCapitalLetters = chunk.toString().toUpperCase();
    this.push(chunkCapitalLetters);
    cb();
  }
}

let capitalLetters = new CapitalLetters();

readableStream
  .pipe(capitalLetters) // entrada
  .pipe(process.stdout); // salida

/* ******
******************************************************************
pipe() => tubería - limita el almacenamiento en el buffer para que 
no haya una sobresaturacion a la hora de pasar una secuencia de 
datos 
******************************************************************
****** */
