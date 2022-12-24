/* **********
************************************************************
                        Modulo OS
************************************************************
Con este modulo podremos acceder a todos los elementos 
de bajo nivel que nos provee el OS.
************************************************************
********** */

const os = require("os");

console.log(os.arch()); // tipo de arquitectura
console.log(os.platform()); // SO que estás utilizando
console.log(os.cpus().length); // nucleos disponibles
console.log(os.constants); // errores y señales del sistema
console.log(os.freemem()); // espacio libre en memoria

const SIZE = 1024;
/* function kb(bytes) {
  return bytes / SIZE;
} */
const kb = (bytes) => bytes / SIZE;
const mb = (bytes) => kb(bytes) / SIZE;
const gb = (bytes) => mb(bytes) / SIZE;

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem())); // memoria disponible */

console.log(os.homedir()); // para saber cual es el directorio raiz
console.log(os.tmpdir()); // directorio temporal
console.log(os.hostname()); // Hostname server
console.log(os.networkInterfaces()); // Interfaces de red activas
