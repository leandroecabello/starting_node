// Las promesas son una mejoría en el manejo de asíncronia en JS y surgieron para darle solución a los callback hells
// Son una clase global de JS por lo que para utilizarlas solo tenemos que instanciar una nueva clase con new Promise
// No dejan de ser funciones por lo que reciben parametros (resolve, reject)
// Estos "estados" son utilizado para resolver(resolve) la promesa (osea que retorne un valr cuando una función se ejecuta)
// Usamos reject cuando es rechaza (retorna un valor no deseado)
/* New Promise( (resolve, reject) => {
    …code
    If(code === true){
    resolve(correctValue);
    }else {
    Reject(wrongValue);
    }
    }); */
function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre); // en lugar de un callback ejecutamos un resolve
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      // resolve(nombre);
      reject("Hay un error"); // forzamos un error para mostrar como con un catch se puede solucionar
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
}

// Cuentan con 3 estados, resolve, inProgres y en reject
// Para poder obtener los valores que retorna una función debemos utilizar su propiedad
// .then, esta propiedad es una función que recibe un callback el cual tendrá como parámetro el valor retornado con resolve o reject.
// Siempre que usemos una promesa además de realizar la propiedad .then debemos invocar la propiedad .catch, la cual es un callback que
// recibe como parámetro el error ocurrido en caso de haber sucedió uno.
/* myPromise(‘Parameter’)
.then( data => console.log(data) )
.catch( err => console.log(err) );
console.log("Iniciando el proceso"); */
hola("Pedro")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => console.log("Terminado el proceso"))
  .catch((error) => {
    console.error("Hubo un error");
    console.error(error);
  });
