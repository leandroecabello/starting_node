/* *********
******************************************************
                Benchmark 
******************************************************
    - Prueba de rendimiento o comparativa
******************************************************
********* */

let suma = 0;

// evaluar cuánto tarda en ejecutarse un bloque de código.
console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");
console.log(suma);

/* En proceso asincrono */
console.time("bucle async");
console.log("Empieza el proceso asincrono");

asynchronous().then(() => console.timeEnd("bucle async"));

function asynchronous() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Terimina el proceso asíncrono");
      resolve();
    }, 0);
  });
}
