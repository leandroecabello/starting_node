/* *******
*************************************************************************
                            PROCESS
*************************************************************************
    - Podremos entender y ver qué pasa con el Process
    - Podremos escuchar señales, escuchar lo que necesitemos y 
        después utilizar esa info para lo que precisemos.
*************************************************************************
************** */

/* **************
******************************************
Podemos hacer require para obtener process 
pero no es necesario ya que es una variable
global dentro de Node 
******************************************
// const process = require('process')
************** */

// Enviar algo antes de finalizar un proceso
process.on("beforeExit", () => {
  console.log("El proceso esta por finalizar");
});

/* *******
*************************************************************************
                                exit
*************************************************************************
    - Mata un proceso
    - En el momento que se ejecuta exit se desconecta totalmente del 
        eventLoop
    - Una vez ejecutado todo lo que se ejecute debe ser sincrono y se 
        ejecutara en el hilo principal
*************************************************************************
************** */
process.on("exit", () => {
  console.log("Termino el proceso");
  setTimeout(() => {
    // esto ejecuta algo dentro de otro hilo pero en este punto ya estamos desconectados del eventLoop
    console.log("Esto no se ejecutara");
  }, 0);
});

setTimeout(() => {
  console.log("Esto si se ejecuta");
}, 0);

// capturar cualquier error que no fue caputurado previamente.
process.on("uncaughtException", (err, origin) => {
  console.log("Se olvido capturar error");
  //console.error(err);
  setTimeout(() => {
    console.log("Esto es una excepción");
  }, 0); // Se ejecutara y mostrara el mensaje al encontrar un error
});

// uncaughtRejection => Permite capturar cualquier error de promesas que se han rechazado.

funcionQueNoExiste();

console.log("Si el error no se captura, no sale");
