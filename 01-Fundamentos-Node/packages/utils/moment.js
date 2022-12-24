/* ***********
*******************************************************
                MODULO moment
*******************************************************
    - Permite manipular fechas de manera eficiente
*******************************************************
*********** */

//importamos el modulo
const moment = require("moment");

let now = moment();

// console.log(now.toString());
// console.log(now.format("YYYY/MM?DD - HH:mm"));

// establecemos el formato a usar
let nowFormat = now.format("HH:mm:ss");
console.log(nowFormat);
