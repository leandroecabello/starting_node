1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

   `npm i -g node-gyp`

   _Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentación de node](https://nodejs.org/api/addons.html#addons_hello_world)
3. Crea un `binding.gyp` en la raiz del módulo. (JSON donde indicamos que va compilar, como se va llamar el archivo resultante y de donde va a tomar la info a convertir)
4. En la carpeta raiz del módulo le decimos a node que configure este modulo, ejecuta:

   `node-gyp configure`

5. Se habrá generado un directorio build donde se encontraran diferentes archivos de código nativo.
6. En la carpeta raiz del módulo creamos nuestro modulo y estará listo para ser usado, ejecuta:

   `node-gyp build`

7. El módulo se compilará. y podrás importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, así que no podrás abrirlo)_
8. Para usarlo, crea un archivo js. Para importarlo:

   `const addon = require('./build/Release/addon');`

   y para usarlo:

   `addon.hello()`

   debería imprimir `world`
