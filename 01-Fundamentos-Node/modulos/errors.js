// En node cuando una funciolidad se rompe, corta todo el ciclo de ejecución de nuestro proyecto sin permitir que este continue
// Debemos manejar los errores y evitar que esto nos genere mayores problemas
// para ello utilizamos try/catch

function otherFunction() {
  itBroken();
}

function itBroken() {
  return 3 + z;
}

// tira error
// esta función se esta ejecutando en otro hilo
// al no estar en nuestro hilo principal y ejecutarse por fuera no estamos pudiendo controlar ese error
// y se rompe y mata el proceso

/* function brokeAsynchronous() { 
  setTimeout(function () {
    return 3 + z;
  });
} */

// solución agregando try/catch dentro de la función
function brokeAsynchronous(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asincrona");
      cb(err);
    }
  });
}

try {
  // itBroken();
  // otherFunction();
  // brokeAsynchronous();
  brokeAsynchronous(function (err) {
    console.log(err.message);
  });
} catch (err) {
  console.error("Se rompio");
  // console.error(err);
  console.error(err.message);
}

console.error("Fin");
