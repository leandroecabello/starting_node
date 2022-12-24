/* **************
**********************************************************************
                Automatización de procesos con Gulp
**********************************************************************
    - Procesos de consola
    - Procesos con paquetes externos
**********************************************************************
Gulp => módulo externo que nos ayudan en la automatización de 
procesos y ejecutar tareas repetitivas con facilidad
**********************************************************************
************** */

// Importar módulo
const gulp = require("gulp");
// importar modulo para crear un servidor
const server = require("gulp-server-livereload");

// Crear la tarea que se va a automatizar
gulp.task("build", (cb) => {
  console.log("Building site");
  setTimeout(cb, 1200);
});

// tarea que levantara un server
gulp.task("serve", function (cb) {
  gulp
    .src("www") // usando streams
    .pipe(
      server({
        livereload: true,
        open: true,
      })
    );
});

// tarea por defecto para ejecutar más de una tarea seguida
gulp.task("default", gulp.series("build", "serve"));
