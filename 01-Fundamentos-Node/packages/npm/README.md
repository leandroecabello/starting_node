#Iniciar un proyecto
npm init

#Iniciar un proyecto con configuración automática
npm init -y

#Instalar dependencias para producción
npm install nombreDelPaquete --save 
#Alternativa 2 de Instalar dependencias para producción o desarrollo
npm i nombreDelPaquete -S 

#Instalar dependencias para desarrollo
npm install nombreDelPaquete --save-dev # npm i nombreDelPaquete -D

#Instalar dependencias de manera global
npm install -g nombreDelPaquete # npm i -g nombreDelPaquete

#Instalar una versión especifica de una dependencia
npm install -g nombreDelPaquete@1.0.0 

#Desinstalar dependencias 
npm uninstall nombreDelPaquete

#Ver dependencias desactualizadas
npm outdate

#Actualizar las dependencias desactualizadas
npm update