# SCV-recetario

El repositorio contiene dos carpetas, una para el backend y otra para el frontend respectivamente.

 Para correr el proyecto es necesario hacerlo en dos terminales.

 <!-- COMANDOS PARA INICIAR EL BACKEND -->
 cd backend
 yarn install
 node .src/app.js

 <!-- COMANDOS PARA INICIAR EL FRONTEND -->
 cd frontend
 yarn install
 yarn start


 Eso es todo! 

 Para comentar un poco la idea de como se armó el proyecto fue de intentar hacer de todo un poco, comenzando por el backend, se hicieron dos capaz, una de negocio donde se encuentra toda la lógica de los endpoints (esto permite que si a futuro se quisiera cambiar de express a otra cosa no hubiera dependencias en la lógia) y otra capa para las rutas.
 A modo de aclaración general se utilizó tanto en back como en front lodash para simplificar algunas cuestiones muy manuales como el sort, average, debounce, etc.
 En el frontend se buscó tener de todo un poco, hay un context, custom hook, utils, paginas y componentes, también se creó una carpeta api para manejar individualmente las requests de cada modulo.

 Por tema de tiempos no se llegó a realizar tests.
