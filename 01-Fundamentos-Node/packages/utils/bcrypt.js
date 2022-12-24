/* ***********
*******************************************************
                MODULO bycript
*******************************************************
    - Permite encriptar un string generando un hash.
*******************************************************
*********** */

//importamos modulo
const bcrypt = require("bcrypt");

// declaramos un pass o palabra a encripta
const password = "1234Segura";

// Generar un hash
bcrypt.hash(password, 10, function (err, hash) {
  console.log(hash);

  // comparar el hash con el string a encriptado
  bcrypt.compare(password, hash, function (err, res) {
    console.log(res);
  }); // devuelve un true o false
});

/* ****************
****************************************************************
                bycript.hash => Genera un hash
****************************************************************
    Recibe por parámetros el string a encriptar, las 
    veces que debe ejecutarse el script para generar un hash 
    aleatorio y por ultimo una función que se encarga de 
    capturar hash o el error que se presente.
****************************************************************
**************** */

/* ****************
****************************************************************
bycript.compare => comparar el hash con el string a encriptado
****************************************************************
    - Devuelve un true o false
    - Recibe por parámetros el string a encriptado, luego el hash 
    y por ultimo una función que captura la información o el 
    error que se presente.
****************************************************************
**************** */
