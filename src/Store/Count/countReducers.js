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

const SET_ADD_COUNT = (state, action) => {
  const nextId = Math.max(...state.map((item) => item.id)) + 1;
  return [...state, { id: nextId, value: 0 }];
};

export default {
  SET_INCREMENT,
  SET_DECREMENT,
  SET_ADD_COUNT,
};
