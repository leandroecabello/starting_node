//console.log(global);

// En lo posible no usar variables globales
// mejor crear moculos y exportar los archivos
let i = 0;
let intervalo = setInterval(function () {
  // para probar conexiona al servidor por ejemplo
  console.log("Hola");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

// setImmediate(() => console.log("Hola"));

// require - module

//console.log(process);

//console.log(__dirname);

//console.log(__filename);

globalThis.miVariable = "elValor";

console.log(miVariable);
