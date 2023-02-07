import { createSlice } from "@reduxjs/toolkit";
/* Importación de la librería createSlice y otros módulos necesarios */
import CountState from "./CountState";
import countReducers from "./countReducers";

/* Creación de un "slice" de Redux para manejar el estado de la cuenta */
export const counterSlice = createSlice({
  name: "counter" /* Nombre del slice */,
  initialState: CountState.value /* Estado inicial del contador */,
  reducers: {
    increment:
      countReducers.SET_INCREMENT /* Acción para incrementar el contador */,
    decrement:
      countReducers.SET_DECREMENT /* Acción para decrementar el contador */,
  },
});
/* Exportación de las acciones definidas para este slice */
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
/* Exportación del reductor asociado a este slice */
export default counterSlice.reducer;
