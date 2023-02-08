# Proyecto Final React.js E-Commerce 640bkg

## Introduccion

     Buen día, espero que se encuentren bien. La presente es para explicarles cómo funciona el proyecto.

## Detalles Técnicos

    El proyecto está hecho con React/Vite. Como era un proyecto de prueba, consideré prudente realizarlo con Vite para que se renderizara y se pudiera hacer build de manera mucho más rápida. Además, usa Service Side Rendering, por lo que lo consideré una buena forma de llevar un proyecto pequeño.

- ## Pasos para correr el proyecto

  Clone el proyecto en la consola:

`git clone https://josemucv@bitbucket.org/josemucv/fzsport-prueba.git`

    Entre a la carpeta y ejecute el siguiente comando:

`npm install`
   
    Luego Corremos el Proyecto con el comando

  `npm run dev`
- ## descripcion de las tecnologias usadas

  En este proyecto se utilizacon varias tecnologias entre ellas:

  - Inicio
    - Al principio, se conseguirá la página de inicio, con nada fuera de lo común. En la parte de arriba estará el header con las respectivas rutas solicitadas.
  - CORS ANY-WHERE
    - Al entrar a "content", es posible que tenga un problema de CORS. Si es así, utilice un servicio en línea de terceros que permite 60 peticiones por hora: "cors-anywhere".
    - Si tiene problemas con CORS, ingrese al siguiente link:

    `https://cors-anywhere.herokuapp.com/corsdemo`
    - En caso de Consumirse las 60 peticiones en una hora corra el siguiente comando
     `npm install -g vite`
     `vite --port 3000`
    - Esto Cambiara el puerto local, y se podra volver a conectar al servicio de CORS, a travez de otro puerto

    
 - Presione el botón que dice `request temporary access to the demo server`. Esto le permitirá conectarse con ellos y ellos harán todo el trabajo para asegurar su API.
    - Una vez que acceda, ya tendrá acceso a la API y todo comenzará a renderizarse.

 - Tiene un sistema de contador, manejado globalmente en un estado envualto por REDUX/TOOLKIT.
 - Tiene un Slides de Items la cual al darle click sobre el titulo, podra redirigirse a la ruta content/details/:id y ahi se visualiaran los detalles
 - Para las imagenes estoy solo pidiendo la del banner, Quiero expresar mi más sincera disculpa por no haber podido completar la tarea pedir imagen por slide, con la eficacia que hubiera deseado. La verdad es que encontré un poco de complejidad en la tarea, pero esto no es un obstáculo para mí en mi constante búsqueda de mejorar mis habilidades y aprender cosas nuevas

 - Se aplicaron Principios SOLID, para la arquitectura y el manejo de SRP, de tal manera que un solo archivo, tenga su funcionalidad especifica, sobre todo en el Store, en lo componentes, por no ser tan grandes, 
 si se fue mas flexible
 - Se Creo un Hook personalizado para manejar las notificaciones, se coloco una validacion para el status code personalizado que tiene Back-end (4041), ya que ese es el status que envia Back, pero el navegador dice que es un 200 OK, entonces, se metio una validacion, para notificar al usuario

 ## Tecnologias que se usaron y servicios

 - CSS/SASS/SCSS, Se utilizo para los estilos, a pesar de no fue tan necesario, por ser una aplicacion pequeña, se declararon un par de variables mas que todo para el texto general de la aplicacion
 - Tailwind CSS, Una libreria que proporciona clases, de tal manera de optimizar las hojas de estilos para que fuesen mas cortas y tuvieran menos lineas de codigo, y se usara, exclusivamenta para lo necesario
 - Redux/Toolkit, Se utilizo para manejar el estado de la aplicacion, tanto para los contadores, y el contenido de los playlist
 - SOLID, `Single REsponsibility Principle` (SRP) para la arquitectura
 - Vite, Sistema de reenderizado Potente usando Server Side Rendering
 - FETCH, para las peticiones a la APIS
 - swiper, para manejar un componete de los SLIDES
 - animate.css, para manejar las animaciones de las noticiaciones, en caso de que haya una mala respuesta por parte del servidor
 - react Notifications Component, Para manejar las notificaciones


### Espero que guste el proyecto.

Saludos cordiales.

--

Jose Martinez fz-sport
