/* **********************
***********************************************************************************************
                                        child_process
***********************************************************************************************

El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, 
mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

***********************************************************************************************
********************** */

const { exec, spawn } = require("child_process");

/* **********
******************************************************************************************
La diferencia entre child_process.spawn y child_process.exec está en lo que devuelven:
  - spawn devuelve un stream
  - exec devuelve un buffer.
******************************************************************************************
********** */

/* **********
******************************************************************************************
                                      EXECT
******************************************************************************************
  - Cuando se requiere que el proceso hijo devuelva mensajes de estado simples. 
  - Cuando se requiere recibir datos al final de la ejecución. 
******************************************************************************************
********* */

// linue ls -la
// windows dir
exec("dir", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

exec("node modulos/console.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

/* **********
******************************************************************************************
                                      SPAWN
******************************************************************************************
  - Cuando se requiere que el proceso hijo devuelva datos binarios enormes a Node. 
  - Cuando se requiere recibir datos desde que el proceso arranca. 
******************************************************************************************
********* */
console.log("Spawn process init");
// Invocar procesos nuevos
// let process = spawn('ls', ['-al']) (Linux)
let process = spawn("cmd.exe", ["/c", "dir"]);

console.log(process.pid); // id del proceso
console.log(process.connected); // estado del proceso

// Obtener lo que devuelve el proceso
process.stdout.on("data", function (data) {
  console.log("the process is dead?");
  console.log(process.killed); // Saber si el proceso se murió
  console.log(data.toString());
});

// Saber si el proceso terminó
process.on("exit", function () {
  console.log("the process finished");
  console.log(process.killed);
});

/* *********
*************************************

https://nodejs.org/api/process.html

*************************************
*********** */
