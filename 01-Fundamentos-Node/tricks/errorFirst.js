/* ************
************************************************************
                Error First Callbacks
************************************************************
    - Esto se usa por la convención de que todo puede fallar.

    - Patrón que se debe seguir cuando se trabaje con 
    funciones asíncronas.

    - Siempre que tengamos un callback el primer parámetro 
    debería ser el error.

    - En este caso lanzar un error mediante throw no va a 
    funcionar debido a que se esta manejando funciones 
    asíncronas y estás son manejadas por el Callback Queue 
    y el Event Loop.

************************************************************
************ */

function asynchronous(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  });
}

asynchronous(function (err, data) {
  if (err) {
    console.error("Catch error");
    console.error(err);
    // throw err // No va a funcionar cuando la función es asincrona
    return false;
  }
  console.log("ok, the data is: ", data);
});
