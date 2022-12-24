/* ***********
*******************************************************
                MODULO sharp
*******************************************************
    - Permite trabajar con imágenes
*******************************************************
*********** */

//importamos el modulo
const sharp = require("sharp");

//ruta de la imagen a modificar
sharp("original.webp")
  //scalamos la imagen a 80 de alto
  .resize(80)
  //otorgamos una escala de grises
  .grayscale()
  //generamos el archivo modificado
  .toFile("resized.png");
