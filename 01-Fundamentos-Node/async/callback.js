// Un callback es una función que se pasa como parametro a otra función
// utilizadas para manejar asincronismo
/* 1 */
function soyAsincrona() {
  console.log("Hola, soy una función asíncrona");
} // pero esto no es una función asíncrona

// esto correra una despues de la otra por no ser asincrona
console.log("Iniciando proceso...");
soyAsincrona();
console.log("Terminando proceso...");

/* 2 */
// en JS las funciones son elementos de primer nivel
// son objetos de primera clase es posible utilizarlos de cualquier manera como por ejemplo como parametros
function soyOtraFuncionAsincrona() {
  //console.log("Hola, soy una función asíncrona");
  // le agregamos asincronia con un setTimeout por ejemplo
  setTimeout(function () {
    // sin darnos cuenta encontramos nuestro primer callback
    console.log("Estoy siendo asíncrona");
  }, 1000); // esto se ejecutara 1 segundo más tarde
}

console.log("Iniciando proceso...");
soyOtraFuncionAsincrona();
console.log("Terminando proceso...");

/* 3 */
function soyAsincronaConCallback(callback) {
  setTimeout(function () {
    // es aquí donde nos percatamos que ya estamos usando callback
    console.log("Estoy siendo asíncrona");
  }, 1000);
}

console.log("Iniciando proceso...");
soyAsincronaConCallback(function () {
  console.log("Terminando proceso...");
});

/* 4 */
function soyOtraFuncionAsincronaConCallback(miCallback) {
  setTimeout(function () {
    console.log("Estoy siendo asíncrona");
    miCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
soyOtraFuncionAsincronaConCallback(function () {
  console.log("Terminando proceso...");
});

/* 5 */
function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1000);
}

/* 6 */
// creamos ahora una función adios
function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
/* a */
/* soyAsincrona(function () {
  // Porque tira error? si lemos en la consola nos percataremos que soy Asincrona no esta definida
  console.log("Terminando proceso...");
}); 
/* b */
/* hola(function () {
  // Porque tira error ahora? porque nuestra función hola recibe 2 parametros
  console.log("Terminando proceso...");
});  */
/* c */
/* hola("Pedro", function () {
  // Porque tira error ahora? porque nuestra función hola recibe 2 parametros
  console.log("Terminando proceso...");
}); */

// d
hola("Pedro", function (nombre) {
  // agregamos parametro para no repetir texto harcodeado
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});

// Ejemplo para mostrar
// que pasa si cambiamos el tiempo de espera en la función hola?
// hola("Juan", function () {});
// adios("Juan", function () {});
