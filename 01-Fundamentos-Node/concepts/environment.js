/* *************
**********************
VARIABLES DE ENTORNO 
**********************
************* */

let nombre = process.env.NOMBRE || "Sin nombre";
// en consola antes de ejecutar sentencia node src agregamos variable de entorno ej: NOMBRE=nombre

let web = process.env.MI_WEB || "no tengo web";

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);
