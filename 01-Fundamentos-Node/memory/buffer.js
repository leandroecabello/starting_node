/* ************
********************************************************************
                        Buffer
********************************************************************
    - Un buffer es un espacio de memoria (en la memoria ram), 
    en el que se almacenan datos de manera temporal.

    - Es la forma mas cruda en la que se pueden almacenar los datos. 
    (Se guardan en bytes y no se especifica el tipo de dato)

    - En consola, los datos se muestraran en formato hexadecimal.
********************************************************************
************ */

/* Generar un buffer */
/* ************
************************************************************************
    alloc(param) => método de Buffer que crear un nuevo objeto buffer 
    especificándole su tamaño.
************************************************************************
************ */

// let buffer = Buffer.alloc(1);

/* ************
************************************************************************
    from(param) => otro método de Buffer para crear

    - También puede guardar strings y el buffer guardará los datos 
    binarios que correspondan.
************************************************************************
************ */

// let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from("Hello");
console.log(buffer);
console.log(buffer.toString());

// --

let alphabet = Buffer.alloc(26);

console.log(alphabet);

for (let i = 0; i < 26; i++) {
  alphabet[i] = i + 97;
}

console.log(alphabet);
console.log(alphabet.toString());
