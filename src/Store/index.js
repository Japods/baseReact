import { configureStore, combineReducers } from "@reduxjs/toolkit";
// Importar las herramientas de configureStore y combineReducers de reduxjs/toolkit
import thunk from "redux-thunk";
// Importar el middleware thunk para manejar acciones asíncronas en redux

// Importar los reducers de contador, contenido y contenido de imagen
import counterReducer from "./Count/Count";
import ContentReducer from "./Content/content";
import imageContentReducer from "./Image/image";

// Combinar todos los reducers en un solo reducer raíz

const rootReducer = combineReducers({
  counter: counterReducer,
  content: ContentReducer,
  image: imageContentReducer,
});
// Configurar y exportar la tienda redux con el reducer raíz y el middleware thunk
export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
