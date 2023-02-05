import { Routes, Route } from "react-router-dom";
import routeing from "./collectionRoutes";

function Router() {
  let a = false;

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
