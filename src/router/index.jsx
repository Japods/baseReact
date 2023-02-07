import { Routes, Route } from "react-router-dom";
// Importar los componentes necesarios de la biblioteca 'react-router-dom
import routeing from "./collectionRoutes";
// importamos la colection de rutas

function Router() {
  // esta validacion la agregue, para un dado caso, se supiera como manejaria un sistema de loging
  // 'a' vendria siendo el token
  let a = false;
  // si existe el token en el store, o en el localStorage, paseamos por la ruta 1, no existe paseamos por las rustas 2
  // de tal forma garantizamos la validacion de lo que hace un usuario dentro de la plataforma
  const ROUTES = a ? routeing[1] : routeing[0];

  return (
    <Routes>
      <Route path={ROUTES.path} element={<ROUTES.component />}>
        {ROUTES.children.map((element, index) => {
          return (
            <Route
              key={index}
              path={element.path}
              element={<element.element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default Router;
