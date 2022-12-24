/* **************
******************************************************************
                          MONOHILO
******************************************************************
  - Un sólo hilo puede manejar multiples solicitudes.
  - Asíncrona o no bloqueante

*********************************
  DESVENTAJAS DE SER MONOHILO
*********************************
  - Al ser monohilo, al encontrar un error parara todo nuestro modulo y estará listo para ser usado otro proceso
  (por lo que hay que tener mucho cuidad y controlar todo lo que ocurre en nuestro código)

************** */

console.log("Hola Mundo");

/* setInterval(function () {
  console.log("Sigo activo");
}, 1000);  // cada un segundo le estamos diciendo al event loop que ejecute este evento "sigo activo"
*/

let i = 0;
setInterval(function () {
  // al ser una función asincrona esto se ejecutara al ultimo (hola mundo, segunda instrucción, setInterval)
  console.log(i);
  i++;
  /* if (i === 5) {
    console.log("forzamos error");
    let a = 3 + z; // al ser monohilo al encontrar un error parara todo nuestro proceso
    // por lo que hay que tener mucho cuidad y controlar todo lo que ocurre en nuestro código
  } */
}, 1000);

console.log("Segunda instrucción");

/* ************
************************************************************************************************
SetInterval => permtie ejecutar una función cada n cantidad de tiempo, por lo que quiere que 
              recibe como argumentos: Función a ejecutarse, intervalo de tiempo.

  - A tener  en cuenta esta función no se detiene y continúa su ejecución ad infinitum.
************************************************************************************************
************ */
