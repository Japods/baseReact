import Home from "../views/Home/HomeView";
import Contents from "../views/Contents/Contents";
import Counters from "../views/Counters/Counters";
import HomeLayout from "../layouts/Home/Home";
import ContentDetails from "../views/Contents/Components/ContentDetails";

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
      },

      {
        name: "Contents",
        path: "contents",
        element: Contents,
      },
      {
        name: "Details",
        path: "contents/details/:id",
        element: ContentDetails,
      },
      {
        name: "Counters",
        path: "counters",
        element: Counters,
      },
    ],
  },
];
// Exportación del array de rutas para su uso en otras partes de la aplicación

export default routes;
