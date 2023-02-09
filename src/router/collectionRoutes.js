import Home from "../views/Home/HomeView";
import Contents from "../views/Contents/Contents";
import Counters from "../views/Counters/Counters";
import HomeLayout from "../layouts/Home/Home";
import ContentDetails from "../views/Contents/Components/ContentDetails";
import CorsError from "../views/403/403";
import requestConsumer from "../views/429/429";
import Error4041 from "../views/4041/Error4041";

// Array de objetos que contienen la información de las rutas de la aplicación
const routes = [
  {
    // La ruta raíz
    path: "/",
    // Componente que se usará como plantilla para todas las vistas hijas
    component: HomeLayout,
    // Array de objetos que representan las vistas hijas
    children: [
      {
        // Nombre de la vista
        name: "Home",
        // La ruta relativa
        path: "/",
        // Componente que representa la vista
        element: Home,
        view: true,
      },

      {
        name: "Contents",
        path: "contents",
        element: Contents,
        view: true,
      },
      {
        name: "Details",
        path: "contents/details/:id",
        element: ContentDetails,
        view: false,
      },
      {
        name: "Counters",
        path: "counters",
        element: Counters,
        view: true,
      },
      {
        name: "CorsError",
        path: "403",
        element: CorsError,
        view: false,
      },

      {
        name: "requestConsumer",
        path: "429",
        element: requestConsumer,
        view: false,
      },

      {
        name: "requestNotFound",
        path: "4041",
        element: Error4041,
        view: false,
      },
    ],
  },
];
// Exportación del array de rutas para su uso en otras partes de la aplicación

export default routes;
