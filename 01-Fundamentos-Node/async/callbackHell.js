function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
}

// podemos agregar una función más para evitar repetir la función hablar
function conversacion(nombre, veces, callback) {
  hablar(function () {
    //aplicamos recursividad => osea llamamos a la misma función pero con parametros ligeramente distintos
    //conversacion();
    if (veces >= 0) {
      hablar(function () {
        conversacion(nombre, --veces, callback);
      });
    } else {
      callback(nombre);
    }
  });
}

console.log("Iniciando proceso...");
// callback hell
/* hola("Pedro", function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        adios(nombre, function () {
          console.log("Terminando proceso...");
        });
      });
    });
  });
}); */

hola("Pepe", function (nombre) {
  conversacion(nombre, 3, function () {
    // de esta manera no queda tan tosco y un código más legible
    console.log("Proceso terminado");
  });
});
