console.log("Algo");

console.info("Algo");

console.error("Algo");

console.warn("Algo");

const tabla = [
  {
    a: 1,
    b: "A",
  },
  {
    a: 2,
    b: "B",
  },
];
console.table(tabla);

console.group("Conversación");
console.log("Hola");
console.group("Hablar");
console.log("Blablablabla...");
console.log("Blablablabla...");
console.log("Blablablabla...");
console.log("Blablablabla...");
console.groupEnd("Hablar");
console.log("Adios");
console.groupEnd("Conversación");

console.log("Otra cosa");

function myFunction1() {
  console.group("Función 1");
  console.log("Esto es de la función 1");
  console.log("Esto también");
  myFunction2();
  console.log("Volvimos a la 1");
  console.groupEnd("Función 1");
}

function myFunction2() {
  console.group("Función 2");
  console.log("Ahora estamos en la función 2");
  console.groupEnd("Función 2");
}

console.log("Comenzamos");
myFunction1();

console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
console.count("veces");
