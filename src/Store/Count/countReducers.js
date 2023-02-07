// Función para incrementar el valor de un item específico en el estado

const SET_INCREMENT = (state, action) => {
  // Encontrar el índice del item en el estado
  const itemIndex = state.findIndex((item) => item.id === action.payload);
  // Incrementar el valor del item en el estado
  state[itemIndex].value++;
};
// Función para decrementar el valor de un item específico en el estado
const SET_DECREMENT = (state, action) => {
  // Encontrar el índice del item en el estado
  const itemIndex = state.findIndex((item) => item.id === action.payload);
  state[itemIndex].value--;
  // Decrementar  el valor del item en el estado
};

export default {
  SET_INCREMENT,
  SET_DECREMENT,
};
