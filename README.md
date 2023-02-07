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
- ## descripcion de las tecnologias usadas

  En este proyecto se utilizacon varias tecnologias entre ellas:

  - Inicio
    - Al principio, se conseguirá la página de inicio, con nada fuera de lo común. En la parte de arriba estará el header con las respectivas rutas solicitadas.
  - CORS ANY-WHERE
    - Al entrar a "content", es posible que tenga un problema de CORS. Si es así, utilice un servicio en línea de terceros que permite 60 peticiones por hora: "cors-anywhere".
    - Si tiene problemas con CORS, ingrese al siguiente link:

    `https://cors-anywhere.herokuapp.com/corsdemo`

    
 - Presione el botón que dice `request temporary access to the demo server`. Esto le permitirá conectarse con ellos y ellos harán todo el trabajo para asegurar su API.
    - Una vez que acceda, ya tendrá acceso a la API y todo comenzará a renderizarse.

 - Tiene un sistema de contador, manejado globalmente en un estado envualto por REDUX/TOOLKIT.

 - Se aplicaron Principios SOLID, para la arquitectura y el manejo de SRP, de tal manera que un solo archivo, tenga su funcionalidad especifica, sobre todo en el Store, en lo componentes, por no ser tan grandes, 
 si se fue mas flexible
 ## Tecnologias que se usaron y servicios

 - CSS/SASS/SCSS, Se utilizo para los estilos, a pesar de no fue tan necesario, por ser una aplicacion pequeña, se declararon un par de variables mas que todo para el texto general de la aplicacion
 - Tailwind CSS, Una libreria que proporciona clases, de tal manera de optimizar las hojas de estilos para que fuesen mas cortas y tuvieran menos lineas de codigo, y se usara, exclusivamenta para lo necesario
 - Redux/Toolkit, Se utilizo para manejar el estado de la aplicacion, tanto para los contadores, y el contenido de los playlist
 - SOLID, `Single REsponsibility Principle` (SRP) para la arquitectura
 - 


### Espero que guste el proyecto.

Saludos cordiales.

--

Jose Martinez# fz-sport
