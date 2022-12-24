// sintax sugar(azucar sintactico)
// Es una forma mas vistosa que escribir todas promesas
// Permite hacer codígo asincrono de forma sincrona
// No bloquea el hilo principal, pya que espera a que se resuelva con el event loop

async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Pedro");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Termina el proceso");
}

console.log("Empezamos el proceso");
main();
